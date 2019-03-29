<template lang="pug">
    button(class="add-btn", :class="{'add-btn--big': size == 'big'}")
        .add-btn__icon
        span.add-btn__text(v-if="name") {{name}}
        
</template>

<script>
export default {
    props: ['name','size']
}
</script>

<style lang="postcss" scoped>
    .add-btn {
        display: flex;
        align-items: center;
        transition: opacity .3s;
        padding: 0;

        &--big {
            .add-btn__icon {
                width: 40px;
                height: 40px;
            }
        }

        &:hover {
            opacity: 0.8;
        }
        
        &__icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            // background: linear-gradient(to right, #1d51dd, #3f35cb);
            background-color: #3f35cb;
            position: relative;

            &::before,
            &::after {
                display: block;
                content: '';
                width: 50%;
                height: 2px;
                background-color: #ffffff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            &:before {
                transform: translate(-50%, -50%) rotate(90deg);
                transform-origin: 50% 50%;
            }
        }

        &__text {
            font-size: 16px;
            color: #383bcf;
            margin-left: 10px;
        }
    }

</style>
