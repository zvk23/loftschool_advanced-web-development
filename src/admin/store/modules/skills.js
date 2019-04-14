export default {
    namespaced: true,
    state: {
        skills: []
    },
    actions: {
        async adddNewSkill({commit}, skill) {
            try {
                const response = await this.$axios.post('/skills', skill);
                commit('ADD_SKILL', skill)
                return response;
            } catch (error) {
            }
        },
        async fetchSkills({commit}) {
            try {
                const {data: {user: {id}}} = await this.$axios.get('/user');
                const {data} = await this.$axios.get(`/skills/${id}`);
                commit('SET_SKILLS', data)
            } catch (error) {
                alert(error.message)
            }
        }
    },
    mutations: {
        SET_SKILLS: (state, skills) => {
            state.skills = skills;
        },
        ADD_SKILL: (state, skill) => {
            state.skills.push(skill)
        }
    }
}