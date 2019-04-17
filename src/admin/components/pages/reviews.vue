<template lang="pug">
    .reviews
        routeInfo(
            pageTitle="Отзывы"
        )
        .container.reviews__container
            .reviews__add-review
                Card(
                    modifier="full-size"
                    title="Новый отзыв"
                )
                    .add-review
                        .add-review__container
                            .add-review__avatar-block
                                .add-review__author-photo(
                                    :style={'backgroundImage' : `url(${this.url})`}
                                )
                                .add-review__add-photo-btn
                                    label(
                                        class="btn btn--blue-color"
                                    ) Добавить фото
                                        input(
                                            type="file"
                                            class="add-review__file-input"
                                            @change="appendFileAndRenderPhoto"
                                        )
                            .add-review__desc-block
                                .add-review__desc-row
                                    .add-review__input-block
                                        label(for="author-name").add-review__label Имя автора
                                        input.add-review__input.add-review__input-name#author-name
                                    
                                    .add-review__input-block
                                        label(for="author-position").add-review__label Титут автора
                                        input.add-review__input.add-review__input--position#author-position

                                .add-review__desc-row
                                    .add-review__input-block
                                        label(for="author-review").add-review__label Отзыв
                                        textarea.add-review__input.add-review__input--text#author-review(
                                            placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"
                                        )
                            .add-review__footer
                                .add-review__footer-btn
                                    button.btn.btn--cancel
                                        | Отменить
                                
                                .add-review__footer-btn
                                    button.btn.btn--gradient
                                        | Сохранить
            
            .reviews__reviews-container
                ul.reviews__reviews-list
                    li.reviews__reviews-item
                        add-btn(
                            size="card"
                            name="Добавить работу"
                        )
                    
                    li.reviews__reviews-item
                        Card(
                            modifier="reviews"
                            type="review"
                            author="Владимир Сабанцев"
                            authorPosition="Преподователь"
                            authorAvatarUrl="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
                        )   
                            .reviews__review-text
                                | Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            
                            .reviews__review-footer
                                button.btn.btn--change
                                    |  Править
                                
                                button.btn.btn--delete
                                    |  Удалить
                    
                    li.reviews__reviews-item
                        Card(
                            modifier="reviews"
                            type="review"
                            author="Владимир Сабанцев"
                            authorPosition="Преподователь"
                            authorAvatarUrl="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
                        )   
                            .reviews__review-text
                                | Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            
                            .reviews__review-footer
                                button.btn.btn--change
                                    |  Править
                                
                                button.btn.btn--delete
                                    |  Удалить
                   
                    li.reviews__reviews-item
                        Card(
                            modifier="reviews"
                            type="review"
                            author="Владимир Сабанцев"
                            authorPosition="Преподователь"
                            authorAvatarUrl="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
                        )   
                            .reviews__review-text
                                | Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            
                            .reviews__review-footer
                                button.btn.btn--change
                                    |  Править
                                
                                button.btn.btn--delete
                                    |  Удалить
                    
                    li.reviews__reviews-item
                        Card(
                            modifier="reviews"
                            type="review"
                            author="Владимир Сабанцев"
                            authorPosition="Преподователь"
                            authorAvatarUrl="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"
                        )   
                            .reviews__review-text
                                | Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                            
                            .reviews__review-footer
                                button.btn.btn--change
                                    |  Править
                                
                                button.btn.btn--delete
                                    |  Удалить


                                    
</template>

<script>
export default {
	components: {
		Card: () => import("components/Card.vue"),
		addBtn: () => import("components/AddBtn.vue"),
		routeInfo: () => import("components/Route.vue")
	},
	data() {
		return {
            photo: '',
            url: ''
        }
	},
	methods: {
		appendFileAndRenderPhoto(e) {
			const file = e.target.files[0],
				reader = new FileReader();

			this.photo = file;

			reader.readAsDataURL(file);
			reader.onload = () => {
				this.renderedPhotoUrl = reader.result;
			};
		}
	}
};
</script>

