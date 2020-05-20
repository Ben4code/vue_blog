import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    auth: localStorage.getItem("authData")
      ? JSON.parse(localStorage.getItem("authData"))
      : {},
    isAuth: localStorage.getItem("authData") ? true : false,
    formErrors: {},
    loading: false,
    articles: [],
    categories: [],
    meta: {},
    notification: null
  },
  getters: {
    isUserAuth: (state) => state.isAuth,
    getNotification: (state) => state.notification,
    getStateArticles: (state) => state.articles,
    getStateCategories: (state) => state.categories,
    getArticlesMeta: (state) => state.meta,
    getAuthUser: (state) => state.auth,
    getAuthErrors: (state) => state.formErrors,
    getAuthLoader: (state) => state.loading,
  },
  actions: {
    // Auth Actions
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
      } catch ({ response }) {
        context.state.loading = false;
        context.commit("setAuthErrorsMutation", response.data);
      }
    },
    async loginUser(context, userData) {
      context.state.loading = true;
      try {
        const res = await Axios.post(
          "https://react-blog-api.bahdcasts.com/api/auth/login",
          userData
        );
        const { data: authUserData } = res.data;
        localStorage.setItem("authData", JSON.stringify(authUserData));
        context.commit("setUserMutation", authUserData);
        context.state.loading = false;
      } catch ({ response }) {
        context.state.loading = false;
        context.commit("setAuthErrorsMutation", response.data);
      }
    },
    logoutUser({ commit }) {
      commit("clearUserData");
    },

    // Article actions
    async getArticles(context, url) {
      context.state.loading = true;
      try {
        const res = await Axios.get(url);
        const articles = res.data.data;
        context.commit("getArticlesMutation", articles);
        localStorage.setItem("articles", JSON.stringify(articles));
        context.state.loading = false;
      } catch ({ response }) {
        console.log(response);
        context.state.loading = false;
      }
    },
    async getCategories({ commit }) {
      const cat_key = localStorage.getItem("categories");
      if (cat_key) {
        commit("getCategoriesMutation", JSON.parse(cat_key));
      } else {
        try {
          const res = await Axios.get(
            "https://react-blog-api.bahdcasts.com/api/categories"
          );
          localStorage.setItem(
            "categories",
            JSON.stringify(res.data.categories)
          );
          commit("getCategoriesMutation", res.data.categories);
        } catch ({ response }) {
          console.log(response);
        }
      }
    },
    createArticle(context, formFields) {
      context.state.loading = true;
      const formData = new FormData();
      formData.append("file", formFields.image);
      formData.append("upload_preset", process.env.VUE_APP_CLOUDINARY_PRESET);
      formData.append("api_key", process.env.VUE_APP_CLOUDINARY_API_KEY);
      // Axios({
      //   url: process.env.VUE_APP_CLOUDINARY_URL,
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      //   data: formData,
      // })
      //   .then((res) => {
      //     if (res.statusText === "OK") {
      //       Axios.post(process.env.VUE_APP_ARTICLES_API, {
      //         title: formFields.title,
      //         content: formFields.content,
      //         category_id: formFields.category_id,
      //         imageUrl: res.data.secure_url
      //       },
      //       {
      //         headers: {
      //           Authorization: `Bearer ${context.state.auth.token}`
      //         }
      //       })
      //         .then((response) =>{
      //           console.log(response)
      //           context.state.loading = false;
      //           context.state.notification = response.status;   
      //         })
      //         .catch(({response}) => {
      //           console.log(response)
      //           context.state.loading = false;
      //         });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //     context.state.loading = false;
      //   });
    },
  },

  mutations: {
    clearUserData: (state) => {
      state.auth = {};
      state.isAuth = false;
      localStorage.removeItem("authData");
    },
    setUserMutation: (state, payload) => {
      state.auth = payload;
      state.isAuth = true;
    },
    setAuthErrorsMutation: (state, payload) => {
      state.formErrors = payload;
      setTimeout(() => {
        state.formErrors = {};
      }, 3000);
    },
    getArticlesMutation: (state, payload) => {
      state.articles = payload.data;
      state.meta = payload;
    },
    getCategoriesMutation: (state, payload) => {
      state.categories = payload;
    },
  },
});

export default store;
