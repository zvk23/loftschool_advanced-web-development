<template lang="pug">
    section.works
        .container.works__container
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
             
            
            .works__works-container 
                ul.works__works-list
                    li.works__work-item
                        .card.card--gradient.card--new-work
                            .card__add-icon
                            span.card__add-icon-text
                                | Добавить
                                br
                                | Работу


                    li.works__work-item
                        .card.card--work-item
                            .card__header
                                .card__work-image

                            .card__body
                                .card__work-title Название работы

                                .card__work-desc 
                                    |Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                
                                .card__work-link-container
                                    a(href="").card__work-link https://loftschool.com
                            .card__footer
                                .card__footer-btn
                                    button.btn.btn--change Изменить
                                
                                .card__footer-btn
                                    button.btn.btn--delete Удалить
                    
                    li.works__work-item
                        .card.card--work-item
                            .card__header
                                .card__work-image

                            .card__body
                                .card__work-title Название работы

                                .card__work-desc 
                                    |Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                
                                .card__work-link-container
                                    a(href="").card__work-link https://loftschool.com
                            .card__footer
                                .card__footer-btn
                                    button.btn.btn--change Изменить
                                
                                .card__footer-btn
                                    button.btn.btn--delete Удалить
                    
                    li.works__work-item
                        .card.card--work-item
                            .card__header
                                .card__work-image

                            .card__body
                                .card__work-title Название работы

                                .card__work-desc 
                                    |Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                                
                                .card__work-link-container
                                    a(href="").card__work-link https://loftschool.com
                            .card__footer
                                .card__footer-btn
                                    button.btn.btn--change Изменить
                                
                                .card__footer-btn
                                    button.btn.btn--delete Удалить


                    

</template>

<script>
export default {
    
}
</script>

<style lang="postcss" scoped>

</style>
