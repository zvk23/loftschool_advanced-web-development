<template lang="pug">
    .setup-skills
        .container.setup-skills__container
            ul.setup-skills__list
                li.setup-skills__item
                    Card(
                        modifier="skill",
                        title="Workflow"
                    )
                        ul.skills-list
                            li.skills-list__item
                                .skills-list__skill-name
                                    input.skills-list__input.skills-list__input--name(value="Git")
                                .skills-list__skill-percent
                                    input.skills-list__input.skills-list__input--percent(value="90")
                                .skills-listskill-edit 
                                    button.skills-list__skill-edit-btn.skills-list__skill-edit-btn--edit
                                    button.skills-list__skill-edit-btn
                                    button.skills-list__skill-edit-btn
                li.setup-skills__item
                    Card(
                        modifier="skill",
                        title="Workflow"
                    )
                        ul.skills-list
                            li.skills-list__item
                                .skills-list__skill-name
                                    input.skills-list__input.skills-list__input--name(value="Git")
                                .skills-list__skill-percent
                                    input.skills-list__input.skills-list__input--percent(value="90")
                                .skills-listskill-edit 
                                    button.skills-list__skill-edit-btn.skills-list__skill-edit-btn--edit
                                    button.skills-list__skill-edit-btn
                                    button.skills-list__skill-edit-btn
                li.setup-skills__item
                    Card(
                        modifier="skill",
                        title="Workflow"
                    )
                        ul.skills-list
                            li.skills-list__item
                                .skills-list__skill-name
                                    input.skills-list__input.skills-list__input--name(value="Git")
                                .skills-list__skill-percent
                                    input.skills-list__input.skills-list__input--percent(value="90")
                                .skills-listskill-edit 
                                    button.skills-list__skill-edit-btn.skills-list__skill-edit-btn--edit
                                    button.skills-list__skill-edit-btn
                                    button.skills-list__skill-edit-btn
</template>

<script>
import addBtn from './addBtn'
import Card from './Card'

export default {
    components: {
        addBtn,
        Card
    }
}
</script>

<style lang="postcss" scoped>
</style>
