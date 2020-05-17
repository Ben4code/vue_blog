import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    auth: localStorage.getItem("authData") ? JSON.parse(localStorage.getItem("authData")) : {},
    isAuth: localStorage.getItem("authData") ? true : false,
    formErrors: {}
  },
  getters: {
    isUserAuth: (state) => state.isAuth,
    getAuthUser: (state) => state.auth,
    getAuthErrors: (state) => state.formErrors,
  },
  actions: {
    async registerUser({ commit }, userData) {
      try {
        const res = await Axios.post(
          "https://react-blog-api.bahdcasts.com/api/auth/register",
          userData
        );
        const { data: authUserData } = res.data;
        localStorage.setItem("authData", JSON.stringify(authUserData));
        commit("setUserMutation", authUserData);
      } catch ({response}) {
        // console.log(response);
        commit("setAuthErrorsMutation", response.data);
      }
    },
    async loginUser({commit}, userData){
      try {
        const res = await Axios.post("https://react-blog-api.bahdcasts.com/api/auth/login", userData);
        const { data: authUserData } = res.data;
        localStorage.setItem("authData", JSON.stringify(authUserData));
        commit("setUserMutation", authUserData);
      } catch ({response}) {
        // console.log(response);
        commit("setAuthErrorsMutation", response.data);
      }
    }
  },
  mutations: {
    setUserMutation: (state, payload) => {
      state.auth = payload;
      state.isAuth = true;
    },
    setAuthErrorsMutation: (state, payload) => {
      state.formErrors = payload;
      setTimeout(()=>{
        state.formErrors = {};
      } , 3000)
    }
  }
});

export default store;
