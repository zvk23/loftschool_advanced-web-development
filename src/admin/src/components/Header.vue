<template lang="pug">
    header.header
        .container.header__container
            .header__user
                .header__user-avatar
                    img.header__user-avatar-image(src="../../../images/content/user.jpg")
                .header__user-info
                    .header__user-name Виктор Ефименко
                    a.header__controls-link.header__controls-link--desktop-hidden Выйти

            .header__title Панель Администрирования

            .header__controls-block
                a.header__controls-link.header__controls-link--desktop-visible Выйти
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
    .header {
        height: 80px;
        background-color: #414165;

        &__container {
            display: flex;
            align-items: center;
            flex-grow: 1;
            height: 100%;
        }

        &__user {
            display: flex;
            align-items: center;
        }

        &__user-avatar {
            width: 46px;
            height: 46px;
            border-radius: 50px;
            overflow: hidden;
            flex-shrink: 0;
        }

        &__user-info {
            margin-left: 20px;
        }

        &__user-name {
            font-size: 18px;
            color: #ffffff;

            @media (min-width: 480px) {
                font-size: 16px;
            }
        }

        &__title {
            font-size: 14px;
            font-weight: 400;
            color: rgba(#FFF, .5);
            margin-left: 30px;

            @media (max-width: 480px) {
                display: none;   
            }
        }

        &__controls-block {
            margin-left: auto;
        }

        &__controls-link {
            font-size: 16px;
            color: rgba(#FFF, .5);
            text-decoration: underline;
            font-weight: 400;
            transition: opacity .3s;

            &--desktop-visible {

                @media (max-width: 480px) {
                    display: none;
                }
            }

            &--desktop-hidden {
                font-size: 16px;
                @media (min-width: 480px) {
                    display: none;
                }
            }
        }
    }
</style>


