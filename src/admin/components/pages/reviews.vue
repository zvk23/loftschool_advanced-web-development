<template lang="pug">
    .reviews
        routeInfo(
            pageTitle="Отзывы"
        )
        .container.reviews__container
            .reviews__add-review
                transition(
                    name='card'
                )
                    Card(
                        modifier="full-size"
                        title="Новый отзыв"
                        v-if="addReviewMode"
                    )
                        .add-review
                            .add-review__container
                                .add-review__avatar-block
                                    .add-review__author-photo(
                                        :style='reviewsImage'
                                    )
                                    .add-review__add-photo-btn
                                        label(
                                            class="btn btn--blue-color"
                                        ) Добавить фото
                                            input(
                                                type="file"
                                                class="add-review__file-input"
                                                @change="getPhotoUrl"
                                            )
                                .add-review__desc-block
                                    .add-review__desc-row
                                        .add-review__input-block
                                            label(for="author-name").add-review__label Имя автора
                                            input.add-review__input.add-review__input-name#author-name(
                                                v-model="review.author"
                                            )
                                        
                                        .add-review__input-block
                                            label(for="author-position").add-review__label Титут автора
                                            input.add-review__input.add-review__input--position#author-position(
                                                v-model="review.occ"
                                            )

                                    .add-review__desc-row
                                        .add-review__input-block
                                            label(for="author-review").add-review__label Отзыв
                                            textarea.add-review__input.add-review__input--text#author-review(
                                                placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                                                v-model="review.text"
                                            )
                                .add-review__footer
                                    .add-review__footer-btn
                                        button.btn.btn--cancel(
                                            @click="addReviewMode = false"
                                        )
                                            | Отменить
                                    
                                    .add-review__footer-btn
                                        button.btn.btn--gradient(
                                            @click="addReview"
                                        )
                                            | Сохранить
            
            
            .reviews__reviews-container
                transition-group(
                    tag="ul"
                    class="reviews__reviews-list"
                    name="card"
                )
                    li.reviews__reviews-item(
                        key="add-btn-card"
                    )
                        add-btn(
                            size="card"
                            name="Добавить работу"
                            @addBtnHandler="addReviewMode = true"
                        )
                    
                    li.reviews__reviews-item(
                        v-for="(review, index) in reviews"
                        :key="index"
                    )
                        reviewItem(
                            :author="review.author"
                            :occ="review.occ"
                            :text="review.text"
                            :photo="review.photo"
                            :id="review.id"
                            @deleteCurrentReview="deleteCurrentReview"
                        )
                        
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	components: {
		Card: () => import("components/Card.vue"),
		addBtn: () => import("components/AddBtn.vue"),
		routeInfo: () => import("components/Route.vue"),
		reviewItem: () => import("components/reviewItem.vue")
	},
	data() {
		return {
            url: '',
            review: {
                photo: '',
                author: '',
                occ: '',
                text: 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'
            },
            addReviewMode: false
        }
	},
    computed: {
        ...mapState('reviews',{
            reviews: (state) => state.reviews
        }),
        reviewsImage: function () {
            return {'backgroundImage' : `url(${this.url})`}
        }
    },
    methods: {
        ...mapActions('reviews', ['fetchReviews', 'createReview', 'removeReview']),
        getBase64(file) {
            this.review.photo = file;
            return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            });
        },
        async addReview() {
            try {
                const response = await this.createReview(this.review);
            } catch (error) {
                
            }
        },
        async getPhotoUrl(e) {
            try {
                const result = await this.getBase64(e.target.files[0]);
                this.url = result;
            } catch (error) {
            }
        },
        deleteCurrentReview(id) {
            this.removeReview(id);
        }
    },
    async created() {
        try {
            await this.fetchReviews()
            console.log('this.reviews', this.reviews);
        } catch (error) {
            
        }
    }
}
</script>

<style lang="postcss" scoped>
.card-enter-active, .card-leave-active {
    transition: opacity .6s ease, transform .6s ease;
}

.card-enter {
    opacity: 0;
    transform: scale(0);
}

.card-enter-to {
    opacity: 1;
    transform: scale(1);
}

.card-leave {
    opacity: 1;
    transform: scale(1);
}

.card-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>


