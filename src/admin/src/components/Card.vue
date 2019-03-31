<template lang="pug">
    .card(:class="modifier ? 'card--' + modifier : '' ")
        .card__header
            h3.card__header-title {{ title }}
        .card__body
            slot
</template>

<script>
export default {
    data() {
    },
    props: {
        modifier: String,
        title: String
    }
}
</script>


<style lang="postcss" scoped>
    
</style>

