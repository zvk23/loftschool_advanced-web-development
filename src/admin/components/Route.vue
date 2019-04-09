<template lang="pug">
    .route
        .container.route__container
            .route__title Блок &laquo;{{pageTitle}}&raquo;
            .route__controls
                add-btn(
                    name="Добавить группу",
                    size="small"
                    v-if="addBtn"
                )
</template>

<script>
export default {
    components: {
        addBtn: () => import('components/addBtn.vue')
    },
    props: {
        pageTitle: String,
        addBtn: false
    }
}
</script>

<style lang="postcss" scoped>
    .route {
        margin: 0 0 55px 0;
    }
</style>


