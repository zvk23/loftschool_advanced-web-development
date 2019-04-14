export default {
    namespaced: true,
    state: {
        skills: []

    },
    actions: {
        async adddNewSkill({commit}, skill) {
            try {
                const response = await this.$axios.post('/skills', skill);
                return response
            } catch (error) {
            }
        },
        async fetchSkills(store) {
            try {
                const response = await this.$axios.get(`/skills/1`)
            } catch (error) {
                
            }
        }
    },
    mutations: {

    }
}