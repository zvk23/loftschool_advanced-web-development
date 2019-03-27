<template lang="pug">
    .tabs
        .container.tabs__container
            ul.tabs__list
                li.tabs__item.is-active Обо мне
                li.tabs__item Работы
                li.tabs__item Отзывы
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
    .tabs {
        height: 76px;
        background-color: #ffffff;

        &__container {
            height: 100%;
            display: flex;
            align-items: stretch;
        }

        &__list {
            display: flex;
        }

        &__item {
            padding: 0 28px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #414c63;
            font-weight: 40;
            transition: color .3s;
            position: relative;

            &:before {
                display: block;
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                height: 3px;
                width: 100%;
                background-color: #383bcf;
                opacity: 0;
                transition: opacity .3s;
            }

            &:hover {
                color: #383bcf;

                &:before {
                    opacity: 0.3;
                }
            }

            &.is-active {
                color: #383bcf;

                &:before {
                    opacity: 1;
                }
            }
        }
    }
</style>


