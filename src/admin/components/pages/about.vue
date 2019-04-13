<template lang="pug">
    .setup-skills
        route-info(
            pageTitle="Обо мне",
            :withBtn="showAddingButton"
            @showAddGroupForm="toggleAddingForm"
        )
        
        .container.setup-skills__container
            ul.setup-skills__list
                transition(
                    name="adding"
                )
                    li.setup-skills__item(
                        v-if="showAddForm"
                    )
                        Card(
                            modifier="add-skills-group",
                            type="add-skills-group"
                            @closeAddSkillsForm="toggleAddingForm"
                            @addSkillGroup="groupName => addSkillGroup(groupName)"
                        )
                            .skills-list
                                .skills-list__footer.is-disabled
                                    .skills-list__skill-name.skills-list__skill-name--footer
                                        input.skills-list__input.skills-list__input--footer.skills-list__input--name(placeholder="Новый скилл")
                                    .skills-list__skill-percent
                                        input.skills-list__input.skills-list__input--footer.skills-list__input--percent(placeholder="100")
                                    .skills-list__footer-btn
                                        add-btn(
                                            size="big"
                                            :disabled="true"
                                        )

                li.setup-skills__item
                    Card(
                        modifier="skill",
                        title="Workflow",
                        type="skill"
                    )
                        ul.skills-list
                            li.skills-list__item
                                .skills-list__skill-name
                                    div.skills-list__input.skills-list__input--name Git
                                .skills-list__skill-percent
                                    div.skills-list__input.skills-list__input--percent 90
                                .skills-listskill-edit 
                                    button.skills-list__skill-edit-btn.skills-list__skill-edit-btn--edit
                                    button.skills-list__skill-edit-btn
                                    button.skills-list__skill-edit-btn
                        .skills-list__footer
                                .skills-list__skill-name.skills-list__skill-name--footer
                                    input.skills-list__input.skills-list__input--footer.skills-list__input--name(placeholder="Новый скилл")
                                .skills-list__skill-percent
                                    input.skills-list__input.skills-list__input--footer.skills-list__input--percent(placeholder="100")
                                .skills-list__footer-btn
                                    add-btn(
                                        size="big"
                                    )
</template>

<script>
import { mapActions } from 'vuex'

export default {
    components: {
        addBtn: () => import('components/addBtn.vue'),
        Card: () => import('components/Card.vue'),
        routeInfo: () => import('components/Route.vue')
    },
    data() {
        return {
            showAddForm: false,
            showAddingButton: true,
            newGroupName: ''
        }
    },
    methods: {
        ...mapActions('categories', ['addNewSkillGroup']),
        toggleAddingForm() {
            this.showAddForm = !this.showAddForm;
            this.showAddingButton = !this.showAddingButton;
        },
        addSkillGroup(title) {
            this.addNewSkillGroup(title);
        }
    }
}
</script>

<style lang="postcss" scoped>

.adding-enter-active, .adding-leave-active {
    transition: opacity .6s ease;
}

.adding-enter {
    opacity: 0;
}

.adding-enter-to {
    opacity: 1;
}

.adding-leave {
    opacity: 1;
}

.adding-leave-to {
    opacity: 0;
}
</style>
