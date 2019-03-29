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
    .route {

        &__container {
            display: flex;
            align-items: center;
        }

        &__title {
            color: #414c63;
        }

        &__controls {
            margin-left: 60px;
        }
    }
</style>


