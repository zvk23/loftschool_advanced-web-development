<template lang="pug">
    section.works
        route-info(
            pageTitle="Работы"
        )
        .container.works__container
            pre {{newWork}}
            transition(
                name="card"
            )
                Card(
                    modifier="full-size"
                    title="Редактирование работы"
                    type="add"
                    v-if="addWorkMode"
                )
                    .add-work
                        .add-work__container
                            .add-work__side.add-work__side--image
                                .add-work__add-image-container(
                                    v-if="!newWork.photo"
                                )
                                    |Перетащите или загрузите
                                    br
                                    |для загрузки изображения

                                    .add-work__add-image-btn
                                        label.btn.btn--gradient(for="work-image") Загрузить
                                        input(
                                            type="file"
                                            @change="getPhotoUrl"
                                            id="work-image"
                                            class="add-work__image-input"
                                        )
                                .add-work__change-image-container(
                                    v-else
                                )
                                    .add-work__work-image(:style='workImage')
                                    
                                    label.add-work__change-image-btn Изменить превью
                                        input(type="file").add-work__image-input(
                                            @change="getPhotoUrl"
                                        )

                            .add-work__side.add-work__side--descriptions                    
                                .add-work__input-block
                                    label(for="work-name").add-work__input-label Название
                                    input.add-work__input#work-name(
                                        v-model="newWork.title"
                                    )

                                .add-work__input-block
                                    label(for="work-link").add-work__input-label Ссылка
                                    input.add-work__input#work-link(
                                        v-model="newWork.link"
                                    )
                            
                                .add-work__input-block
                                    label(for="work-desc").add-work__input-label Описание
                                    textarea.add-work__input.add-work__input--area#work-desc(
                                        v-model="newWork.description"
                                    )
                                
                                .add-work__input-block
                                    label(for="work-tags").add-work__input-label Добавление тегов
                                    input.add-work__input#work-tags(
                                        @keyup.enter="addTag"
                                    )
                                    .add-work__tags-container
                                        .add-work__tag 
                                            | HTML5
                                            button.add-work__close-tag-btn
                                        .add-work__tag 
                                            | CSS3
                                            button.add-work__close-tag-btn
                                        .add-work__tag 
                                            | JavaScript
                                            button.add-work__close-tag-btn
                            
                            .add-work__footer
                                .add-work__footer-btn
                                    button.btn.btn--cancel(
                                        @click="addWorkMode = false"
                                    ) Отменить
                                .add-work__footer-btn
                                    button.btn.btn--gradient Сохранить
         
         
         
         
         
         
         
            .works__works-container 
                ul.works__works-list
                    li.works__work-item
                         add-btn(
                            size="card"
                            name="Добавить работу"
                            @addBtnHandler="setMode('add')"
                        )

                    li.works__work-item
                        Card(
                            modifier="work-item"
                            type="work"
                        )
                            .works__work-content
                                .works__work-title Название работы

                                .works__work-desc 
                                    | Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                
                                .works__work-link-container
                                    a(href="").works__work-link https://loftschool.com

                            .works__work-footer
                                .works__work-footer-btn
                                    button.btn.btn--change Изменить
                                
                                .works__work-footer-btn
                                    button.btn.btn--delete Удалить
</template>

<script>
export default {
    components: {
        addBtn: () => import('components/addBtn.vue'),
        Card: () => import('components/Card.vue'),
        routeInfo: () => import('components/Route.vue')
    },
    data() {
        return {
            addWorkMode: true,
            editMode: false,
            newWork: {
                title: '',
                techs: '',
                photo: '',
                link: '',
                description: '',
            }
        }
    },
    computed: {
        workImage: function () {
            return {'backgroundImage' : `url(${this.newWork.photo})`}
        }
    },
    methods: {
        setMode(mode) {
            switch(mode) {
                case 'add' :
                this.addWorkMode = true;
                this.editMode = false;
                break;

                case 'edit' :
                this.editMode = true;
                this.addWorkMode = false;
                break;
            }
        },
        addTag() {
            console.log('true', true);
        },
        getBase64(file) {
            try {
                this.newWork.photo = file;
                return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                });
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        createFormData(editedReview) {
            try {
                const formData = new FormData();
                formData.append('text', editedReview.text)
                formData.append('author', editedReview.author)
                formData.append('occ', editedReview.occ)
                formData.append('photo', editedReview.photo)

                return formData
            } catch (error) {
                console.log('error.message', error.message);
            }
        },
        async getPhotoUrl(e) {
            try {
                const result = await this.getBase64(e.target.files[0]);
                this.newWork.photo = result;
            } catch (error) {
            }
        },
    }
}
</script>

<style lang="postcss" scoped>
.card-enter-active, .card-leave-active {
    transition: opacity .6s ease, transform .6s ease;
}

.card-enter {
    opacity: 0;
    transform: scale(0);
}

.card-enter-to {
    opacity: 1;
    transform: scale(1);
}

.card-leave {
    opacity: 1;
    transform: scale(1);
}

.card-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
