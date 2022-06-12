export default {
    namespaced: true,
    state: {
        name: "",
        email: "",
    },
    mutations: {
        SET_NAME(state, name) {
            state.name = name;
        },
        SET_EMAIL(state, email) {
            state.email = email;
        }
    },
    actions: {
        setName({ commit }, name) {
            commit('SET_NAME', name);
        },
        setEmail({ commit }, email) {
            commit('SET_EMAIL', email);
        }
    },
    getters: {
        getName: state => state.name,
        getEmail: state => state.email
    }
}