export default {
    namespaced: true,
    state: {
        user: {

        }
    },
    mutations: {
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    getters: {
        userIsLogged: state => {
            const 
                userObj = state.user,
                userObjIsEmpty = Object.keys(userObj) === 0 && userObj.constructor === Object ? true : false;

            console.log('userObjIsEmpty', userObjIsEmpty);
            
            return userObjIsEmpty;
        }
    }
}