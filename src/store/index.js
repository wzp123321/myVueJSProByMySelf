import Vuex from "vuex";
import Vue from "vue";

const GET_COUNT_ADD = "getcountadd";
const GET_COUNT_REDUCE = "getcountreduce";

Vue.use(Vuex)

const state = {
    count: 1,
};
const getters = {
    count: function (state) {
        return state.count
    }
};
const mutations = {
    [GET_COUNT_ADD](state, data ) {
        state.count += data;
    },
    [GET_COUNT_REDUCE](state, data ) {
        state.count -= data
    }
};

const actions = {
    getCountAdd({
        commit,
        state
    }, data) {
        commit(GET_COUNT_ADD, data);
    },
    getCountReduce({
        commit,
        state
    }, data) {
        commit(GET_COUNT_REDUCE, data);
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store;