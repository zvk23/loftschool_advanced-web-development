<template lang="pug">
    .app-login
        .app-login__card
            pre {{ user }}
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
                        v-model="user.name"
                    )
                .app-login__input-block.app-login__input-block--pass(
                    ref="password"
                )
                    label.app-login__label(for="app-login-pass") Пароль
                    input.app-login__input#app-login-pass(
                        v-model="user.password"
                        type="password"
                    )

                button.btn.btn--gradient-border.app-login__btn(
                    @click="login"
                ) Отправить

</template>

<script>
import $axios from '@/requests';

export default {
    data() {
        return {
            user: {
                name: '',
                password: ''
            },
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
        },
        checkForm(e) {
            e.preventDefault();
            this.clearErrors();

            if(this.user.name && this.user.password) {
                return true
            };

            this.errors = [];

            if(!this.user.name) {
                this.errors.push('Введите имя');
                this.$refs.username.classList.add('is-error');
            };

            if(!this.user.password) {
                this.errors.push('Введите пароль');
                this.$refs.password.classList.add('is-error');
            };
        },
        login() {
            try {
               $axios.post('/login', this.user).then(res => {
                   const token = res.data.token;

                   localStorage.setItem('token', token)

                   const tokenFromLocalStorage = localStorage.getItem('token');

                   console.log('tokenFromLocalStorage', tokenFromLocalStorage);
               })
            } catch (error) {
                console.log('error', error);
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="postcss" scoped>

</style>


