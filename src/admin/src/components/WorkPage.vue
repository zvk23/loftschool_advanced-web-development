<template lang="pug">
    section.works
        .container.works__container
            Card(
                modifier="full-size"
                title="Редактирование работы"
            )
                .add-work
                    .add-work__container
                        .add-work__side.add-work__side--image
                            .add-work__change-image-container
                                img(src="../../../images/content/portfolio/1.jpg").add-work__work-image
                                
                                button.add-work__change-image-btn Изменить превью
                            
                            .add-work__add-image-container
                                |Перетащите или загрузите
                                br
                                |для загрузки изображения

                                .add-work__add-image-btn
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
                                button.btn.btn--cancel Отменить
                            .add-work__footer-btn
                                button.btn.btn--gradient Сохранить
         
         
         
         
         
         
         
            .works__works-container 
                ul.works__works-list
                    li.works__work-item
                         addBtn(
                            size="card"
                            name="Добавить работу"
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
import Card from './Card'
import addBtn from './addBtn'

export default {
    components: {
        Card,
        addBtn
    }
}
</script>

<style lang="postcss" scoped>

</style>
