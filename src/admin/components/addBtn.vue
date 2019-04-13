<template lang="pug">
    button(class="add-btn", :class="size ? 'add-btn--' + size: ''", @click="addBtnHandler")
        .add-btn__icon(
            v-if="!disabled"
        )
        .add-btn__icon.add-btn__icon--disabled(
            v-else="!disabled"
        )
        span.add-btn__text(
            v-if="name"
        ) {{name}}
        
</template>

<script>
export default {
    props: {
        name: String, 
        size: String, 
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    methods: {
        addBtnHandler() {
            this.$emit('showAddGroupForm', null)
        }
    }
}
</script>
