<template lang="pug">
    .route
        .container.route__container
            .route__title Блок &laquo;{{pageTitle}}&raquo;
            .route__controls
                addBtn(
                    name="Добавить группу",
                    size="'small'"
                )
</template>

<script>
import addBtn from './addBtn'

export default {
    components: {
        addBtn
    },
    props: {
        pageTitle: String
    }
}
</script>

<style lang="postcss" scoped>
    
</style>


