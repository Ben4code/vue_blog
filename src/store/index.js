import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    auth: localStorage.getItem("authData") ? JSON.parse(localStorage.getItem("authData")) : {},
    isAuth: localStorage.getItem("authData") ? true : false,
    formErrors: {},
    loading: false
  },
  getters: {
    isUserAuth: (state) => state.isAuth,
    getAuthUser: (state) => state.auth,
    getAuthErrors: (state) => state.formErrors,
    getAuthLoader: (state) => state.loading,
  },
  actions: {
    async registerUser(context, userData) {
      context.state.loading = true;
      try {
        const res = await Axios.post(
          "https://react-blog-api.bahdcasts.com/api/auth/register",
          userData
        );
        const { data: authUserData } = res.data;
        localStorage.setItem("authData", JSON.stringify(authUserData));
        context.commit("setUserMutation", authUserData);
        context.state.loading = false;
      } catch ({response}) {
        context.state.loading = false;
        context.commit("setAuthErrorsMutation", response.data);
      }
    },
    async loginUser(context, userData){
      context.state.loading = true;
      try {
        const res = await Axios.post("https://react-blog-api.bahdcasts.com/api/auth/login", userData);
        const { data: authUserData } = res.data;
        localStorage.setItem("authData", JSON.stringify(authUserData));
        context.commit("setUserMutation", authUserData);
        context.state.loading = false;
      } catch ({response}) {
        context.state.loading = false;
        context.commit("setAuthErrorsMutation", response.data);
      }
    },
    logoutUser({commit}){
      commit('clearUserData');
    }
  },
  mutations: {
    clearUserData: (state) => {
      state.auth = {};
      state.isAuth = false;
      localStorage.removeItem('authData');
    },
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
