<template lang="pug">
    .app-login
        .app-login__card
            .app-login__close-btn
                button.btn.btn--close(
                    @click="closeLoginForm"
                )
            form.app-login__form(
                 @submit="checkForm"
            )
                h4.app-login__form-title Авторизация
                .app-login__input-block.app-login__input-block--login(
                    ref="username"
                )
                    label.app-login__label(for="app-login-username") Логин
                    input.app-login__input#app-login-username(
                        v-model="username"
                    )
                .app-login__input-block.app-login__input-block--pass(
                    ref="password"
                )
                    label.app-login__label(for="app-login-pass") Пароль
                    input.app-login__input#app-login-pass(
                        v-model="password"
                    )

                button.btn.btn--gradient-border.app-login__btn Отправить

</template>

<script>
export default {
    data() {
        return {
            username: null,
            password: null,
            errors: []
        }
    },
    methods: {
        closeLoginForm() {
            this.$emit('closeLoginForm')
        },
        clearErrors() {
            this.$refs.username.classList.remove('is-error');
            this.$refs.password.classList.remove('is-error');
        }
        ,
        checkForm(e) {
            this.clearErrors();

            if(this.username && this.password) {
                return true
            };

            this.errors = [];

            if(!this.username) {
                this.errors.push('Введите имя');
                this.$refs.username.classList.add('is-error');
            };

            if(!this.password) {
                this.errors.push('Введите пароль');
                this.$refs.password.classList.add('is-error');
            };

            e.preventDefault();
        }
    },
    mounted() {
    }
}
</script>

<style lang="postcss" scoped>

</style>



