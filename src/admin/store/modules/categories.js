export const categories = {
    namespaced: true,
    state: {
        // categories: []
    },
    actions: {
        async addNewSkillGroup(store, groupTitle) {
            try {
                const res = await this.$axios.post('/categories', {
                title: groupTitle
            });
            return res;
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        }
    },
    getters: {

    },
    mutations: {
        
    }
}