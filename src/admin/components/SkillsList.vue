<template lang="pug">
    ul.skills-list
        li.skills-list__item
            .skills-list__skill-name
                div.skills-list__input.skills-list__input--name Git
            .skills-list__skill-percent
                div.skills-list__input.skills-list__input--percent 10
            .skills-listskill-edit
                button.skills-list__skill-edit-btn.skills-list__skill-edit-btn--edit
                button.skills-list__skill-edit-btn
                button.skills-list__skill-edit-btn
        .skills-list__footer
            .skills-list__skill-name.skills-list__skill-name--footer
                input.skills-list__input.skills-list__input--footer.skills-list__input--name(
                    placeholder="Новый скилл",
                    v-model="newSkill.title"
                )
            .skills-list__skill-percent
                input.skills-list__input.skills-list__input--footer.skills-list__input--percent(
                    placeholder="100",
                    v-model="newSkill.percent"
                )
            .skills-list__footer-btn
                add-btn(
                    size="big"
                    @addBtnHandler="addBtnHandler"
                )
</template>

<script>
import $axios from '@/requests'

export default {
    components: {
        AddBtn: () => import('@/components/addBtn.vue')
    },
    data() {
        return {
            newSkill: {
                title: '',
                percent: 0,
                category: this.categoryId
            }
        }
    },
    props: {
        categoryId: Number
    },
    methods: {
        addBtnHandler() {
            this.$emit('addNewSkill', this.newSkill)
        }
    },
    created() {
    }
}
</script>
