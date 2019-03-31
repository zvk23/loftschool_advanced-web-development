<template lang="pug">
    button(class="add-btn", :class="{'add-btn--big': size == 'big', 'add-btn--card' : size == 'card'}")
        .add-btn__icon
        span.add-btn__text(v-if="name") {{name}}
        
</template>

<script>
export default {
	props: ["name", "size"]
};
</script>

<style lang="postcss" scoped>
</style>
