<template lang="pug">
    .route
        .container.route__container
            .route__title Блок &laquo;Обо мне&raquo;
            .route__controls
                button.route__add
                    .route__add-icon
                    span.route__add-name Добавить группу
</template>

<script>
export default {
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

        &__add {
            display: flex;
            align-items: center;
            transition: opacity .3s;

            &:hover {
                opacity: 0.8;
            }
        }

        &__add-icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(to right, #1d51dd, #3f35cb);
            position: relative;

            &::before,
            &::after {
                display: block;
                content: '';
                width: 10px;
                height: 2px;
                background-color: #ffffff;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -5px;
                margin-top: -1px;
            }

            &:before {
                transform: rotate(90deg);
                transform-origin: 50% 50%;
            }
        }

        &__add-name {
            font-size: 16px;
            color: #383bcf;
            margin-left: 10px;
        }
    }
</style>


