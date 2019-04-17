export default {
    namespaced: true,
    state: {
        reviews: []
    },
    actions: {
        async createReview({commit}, review) {
            try {
                const formData = new FormData();
                formData.append('text', review.text)
                formData.append('author', review.author)
                formData.append('occ', review.occ)
                formData.append('photo', review.photo)
                const response = await this.$axios.post('/reviews', formData);
                commit('ADD_REVIEW', review)
                return response;
            } catch (error) {
                console.log('error.message', error.message);   
            }
        },
        async fetchReviews({commit}) {
            try {
                const {data: {user: {id}}} = await this.$axios.get('/user');
                const resonse = await this.$axios.get(`/reviews/${id}`);
                commit('SET_REVIEWS', resonse.data);
                return resonse;
            } catch (error) {
                
            }
        },
        async removeReview({commit}, reviewId){
            try {
                console.log('reviewId', reviewId);
                const response = await this.$axios.delete(`/reviews/${reviewId}`);
                commit('REMOVE_REVIEWS', reviewId)
                return response;
            } catch (error) {
                console.log('error.message', error.message);
            }
        }
    },
    mutations: {
        SET_REVIEWS: (state, reviews) => {
            state.reviews = reviews
        },
        REMOVE_REVIEWS: (state, reviewsId) => {
            state.reviews =  state.reviews.filter(review => review.id != reviewsId)
        },
        ADD_REVIEW: (state, review) => {
            state.reviews.push(review)
        }
    }
}