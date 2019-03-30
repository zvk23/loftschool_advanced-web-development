<template lang="pug">
    section.work
        .container.work__container
            .card.card--add-work
                .card__header
                    h3.card__header__title Редактирование работы
                .card__body
                    .add-work
                        .add-work__container
                            .add-work__side.add-work__side--image
                                .add-work__image-container
                                    |Перетащите или загрузите
                                    br
                                    |для загрузки изображения

                                    .add-work__change-image-btn
                                        label.btn.btn--gradient(for="work-image") Загрузить
                                        input(type="file").add-work__image-input#work-image

                            .add-work__side.add-work__side--descriptions                    
                                .add-work__input-block
                                    label(for="work-name").add-work__input-label Название
                                    input.add-work__input#work-name

                                .add-work__input-block
                                    label(for="work-link").add-work__input-label Ссылка
                                    input.add-work__input#work-link
                            
                                .add-work__input-block
                                    label(for="work-desc").add-work__input-label Описание
                                    textarea.add-work__input.add-work__input--area#work-desc
                                
                                .add-work__input-block
                                    label(for="work-tags").add-work__input-label Добавление тегов
                                    input.add-work__input#work-tags
                                    .add-work__tags-container
                                        .card__tag HTML5
                                        .card__tag CSS3
                                        .card__tag JavaScript
                .card__footer
                    .card__footer-btn
                        button.btn.btn--cancel
                         | Отмена
                    
                    .card__footer-btn
                        button.btn.btn--gradient
                         | Сохранить

</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>

</style>
