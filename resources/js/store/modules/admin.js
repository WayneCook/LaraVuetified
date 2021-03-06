const state = {
    data: [],
    loaded: false
  }

const mutations = {

    setData( state, payload ) {
        state.data = payload
    },
    setLoaded( state ) {
        state.loaded = true
    }

}

  // getters
const getters = {

    getData( state ) {
        return state.data
    },
    getLoaded( state ) {
        return state.loaded
    }
}


  // actions
  const actions = {

    fetchData({ commit }) {

       return axios.get('/api/app'

        ).then((response) => {

            commit('setData', response.data);
            commit('setLoaded');

            return true

        })
        .catch((error) => {

            if (error.response) {
            console.log(error.response.data.errors);
            }

        });

    }

  }


  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
