<template lang="pug">
    Card(
        modifier="work-item"
        type="work"
        :workImage="work.photo"
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
                button.btn.btn--delete(
                    @click="emitRemoveWork"
                ) Удалить
</template>

<script>
export default {
    components: {
        Card: () => import('components/Card.vue')
    },
    props: {
        work: Object
    },
    methods: {
        emitRemoveWork() {
            this.$emit('removeWork', this.work.id);
        }
    },
    created() {
    }
};
</script>
