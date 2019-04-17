<template lang="pug">
    Card(
        modifier="reviews"
        type="review"
        :author="author"
        :authorPosition="occ"
        :authorAvatarUrl="photoUrl"
    )   
        .reviews__review-text {{ text }}
        .reviews__review-footer
            button.btn.btn--change
                |  Править
            
            button.btn.btn--delete(
                @click="emitRemoveReview"
            )
                |  Удалить
</template>
 
 <script>
 export default {
     components: {
         Card: () => import('components/Card.vue')
     },
     props: [
        'author',
        'occ',
        'text',
        'photo',
        'id'
     ],
     computed: {
        photoUrl: function () {
            return `https://webdev-api.loftschool.com/${this.photo}`
        }
     },
     methods: {
         emitRemoveReview() {
             this.$emit('deleteCurrentReview', this.id)
         }
     },
     created() {
         console.log('this.photoUrl', this.photoUrl);
     }
 }
 </script>
 