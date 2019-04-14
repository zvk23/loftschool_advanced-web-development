<template lang="pug">
    .setup-skills
        route-info(
            pageTitle="Обо мне",
            :withBtn="showAddingButton"
            @addBtnHandler="toggleAddingForm"
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

                li.setup-skills__item(
                    v-for="category in categories"
                )
                    Card(
                        modifier="skill",
                        :title="category.category",
                        type="skill"
                        :categoryId="category.id"
                    )
                        SkillsList(
                            :categoryId="category.id"
                            @addNewSkill='addSkill'
                        )
                        
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        AddBtn: () => import('components/addBtn.vue'),
        Card: () => import('components/Card.vue'),
        SkillsList: () => import('components/SkillsList.vue'),
        RouteInfo: () => import('components/Route.vue')
    },
    data() {
        return {
            showAddForm: false,
            showAddingButton: true,
            newGroupName: ''
        }
    },
    computed: {
        ...mapState('categories', {
            categories: (state) => state.categories
        })
    },
    methods: {
        ...mapActions('categories', ['addNewSkillGroup', 'fetchCategories']),
        ...mapActions('skills', ['adddNewSkill']),
        toggleAddingForm() {
            this.showAddForm = !this.showAddForm;
            this.showAddingButton = !this.showAddingButton;
        },
        addSkillGroup(title) {
            this.addNewSkillGroup(title);
        },
        async addSkill(skill) {
            try {
                await this.adddNewSkill(skill)
            } catch (error) {
            }
        }
    },
    created() {
        try {
            this.fetchCategories();
        } catch (error) {
            alert('Ошибка загрузки категорий')
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
