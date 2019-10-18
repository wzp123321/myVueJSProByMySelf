import Vuex from "vuex";
import Vue from "vue";
import users from "./modules/users";
import getters from "./getters";
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        users
    },
    getters
})

export default store;