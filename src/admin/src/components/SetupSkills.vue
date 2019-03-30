<template lang="pug">
    .setup-skills
        .container.setup-skills__container
            ul.setup-skills__list
                li.setup-skills__item
                    .card.card--skill
                        //- header
                        .card__header
                            .card__header-input
                                input.card__input.card__input--header(placeholder="Название новой группы")
                            .card__header-btns
                        
                        //- body
                        .card__body
                            ul.card__skills-list
                                li.card__skill-item
                                    .card__skill-name 
                                        input.card__input.card__input--name(value="Git")
                                    .card__skill-percent
                                        input.card__input.card__input--percent(value="90")
                                    .card__skill-edit 
                                        button.card__skill-edit-btn.card__skill-edit-btn--edit
                                        button.card__skill-edit-btn
                                        button.card__skill-edit-btn
                        
                        //- footer
                        .card__footer
                            .card__footer-input-container
                                input.card__input.card__input--skill-footer(placeholder="Новый скилл")
                            
                            .card__footer-percent-container
                                input.card__input.card__input--percent.card__input--border(value="90")
                            
                            .card__footer-btn-container
                                addBtn(
                                    size="big"
                                )
                li.setup-skills__item
                    .card.card--skill
                        //- header
                        .card__header
                            .card__header-input
                                input.card__input.card__input--header(placeholder="Название новой группы")
                            .card__header-btns
                        
                        //- body
                        .card__body
                            ul.card__skills-list
                                li.card__skill-item
                                    .card__skill-name 
                                        input.card__input.card__input--name(value="Git")
                                    .card__skill-percent
                                        input.card__input.card__input--percent(value="90")
                                    .card__skill-edit 
                                        button.card__skill-edit-btn.card__skill-edit-btn--edit
                                        button.card__skill-edit-btn
                                        button.card__skill-edit-btn
                        
                        //- footer
                        .card__footer
                            .card__footer-input-container
                                input.card__input.card__input--skill-footer(placeholder="Новый скилл")
                            
                            .card__footer-percent-container
                                input.card__input.card__input--percent.card__input--border(value="90")
                            
                            .card__footer-btn-container
                                addBtn(
                                    size="big"
                                )
                li.setup-skills__item
                    .card.card--skill
                        //- header
                        .card__header
                            .card__header-input
                                input.card__input.card__input--header(placeholder="Название новой группы")
                            .card__header-btns
                        
                        //- body
                        .card__body
                            ul.card__skills-list
                                li.card__skill-item
                                    .card__skill-name 
                                        input.card__input.card__input--name(value="Git")
                                    .card__skill-percent
                                        input.card__input.card__input--percent(value="90")
                                    .card__skill-edit 
                                        button.card__skill-edit-btn.card__skill-edit-btn--edit
                                        button.card__skill-edit-btn
                                        button.card__skill-edit-btn
                        
                        //- footer
                        .card__footer
                            .card__footer-input-container
                                input.card__input.card__input--skill-footer(placeholder="Новый скилл")
                            
                            .card__footer-percent-container
                                input.card__input.card__input--percent.card__input--border(value="90")
                            
                            .card__footer-btn-container
                                addBtn(
                                    size="big"
                                )
</template>

<script>
import addBtn from './addBtn'

export default {
    components: {
        addBtn
    }
}
</script>

<style lang="postcss" scoped>
</style>
