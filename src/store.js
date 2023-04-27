import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    recipes: [],
    userLogin: {},
    token: null,
    isLogin: false
  },
  getters: {
    getRecepById: (state) => (id) => {
      return state.recipes.find((recipe) => recipe.id === id);
    },
    getSearchData: (state) => (key) => {
      return state.recipes.filter(
        (recipe) => recipe.name.toLowerCase().indexOf(key) !== -1
      );
    },
  },
  mutations: {
    addNewRecipe(state, payload) {
      state.recipes.push(payload);
    },
    setNewRecipe(state, payload) {
      state.recipes = payload;
    },
    setToken(state, payload) {
      state.token = payload;
      console.log(state.token);
    },
    setUserLogin(state, payload) {
      state.userLogin = payload;
    },
    updateRecipe(state, payload) {
      const newRecipe = state.recipes.map((recipe) => {
        if (recipe.id === payload.id) {
          recipe = payload;
        }
        return recipe;
      });
      state.recipes = newRecipe;
    },
    deleteRecipe(state, payload) {
      const recipes = state.recipes.filter((item) => item.id !== payload);
      state.recipes = recipes;
    },
    setLoginStatus(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    async recipeList({ commit }) {
      try {
        const { data } = await axios.get(
          "https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes.json"
        );
        const arr = [];
        for (let key in data) {
          arr.push({ id: key, ...data[key] });
        }
        commit("setNewRecipe", arr);
      } catch (err) {
        console.log(err);
      }
    },
    async addNewRecipe({ commit, state }, payload) {
      const newData = {
        ...payload,
        username: state.userLogin.username,
        createdAt: Date.now(),
        likes: ["null"],
        userId: state.userLogin.userId,
      };
      try {
        const { data } = await axios.post(
          "https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes.json?auth=" +
            state.token,
          newData
        );
        commit("addNewRecipe", { id: data.name, ...newData });
      } catch (err) {
        console.log(err.message);
      }
    },
    async updateLike({ commit, state, getters }, payload) {
      const userId = state.userLogin.userId;
      const recipe = getters.getRecepById(payload.recipeId);
      if (payload.status) {
        const newLikes = recipe.likes.filter((like) => like !== userId);
        recipe.likes = newLikes;
      } else {
        recipe.likes.push(userId);
      }
      try {
        const data = await axios.put(
          `https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes/${payload.recipeId}.json?auth=${state.token}`,
          recipe
        );
        commit("updateRecipe", recipe);
      } catch (err) {
        if (err.message === "Request failed with status code 401") {
          commit("setLoginStatus", false)
        }
      }
    },
    async deleteRecipe({ commit, state }, payload) {
      try {
        const { data } = await axios.delete(
          `https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes/${payload}.json?auth=${state.token}`
        );
        commit("deleteRecipe", payload);
      } catch (err) {
        console.log(err);
      }
    },
    async updateRecipe({commit, state}, payload) {
      let {id: _, ...newRecipe} = payload
      console.log(newRecipe);
      console.log(payload)
      try {
        const { data } = await axios.put(
          `https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes/${payload.id}.json?auth=${state.token}`, newRecipe
        );
        commit("updateRecipe", payload)
      } catch (err) {

      }
    },

    // AUTH ACTION
    async userSignup({ commit, dispatch }, payload) {
      console.log(payload);
      const APIkey = "AIzaSyAZw4XY-USmeiN9j1cLmxJ8W8mu_l2a19U";
      const authURL = payload.isLogin
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

      try {
        const { data } = await axios.post(authURL + APIkey, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        });

        // Save Token and Expiration date on cookies
        Cookies.set("jwt", data.idToken);
        Cookies.set(
          "tokenExpirationDate",
          new Date().getTime() + Number.parseInt(data.expiresIn) * 1000
        );
        // Cookies.set("UID", data.localId);
        commit("setToken", data.idToken);

        // If status = login
        if (!payload.isLogin) {
          const newUserData = {
            userId: data.localId,
            firstname: payload.firstname,
            lastname: payload.lastname,
            username: payload.username,
            email: payload.email,
          };
          await dispatch("newUser", newUserData);
        } else {
          await dispatch("getUser", data.localId);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async newUser({ commit }, payload) {
      try {
        const { data } = await axios.post(
          "https://recipe-vue-batch2-default-rtdb.firebaseio.com/user.json",
          payload
        );
        commit("setUserLogin", { ...payload });
        commit("setLoginStatus", true)
      } catch (err) {
        console.log(err);
      }
    },
    async getUser({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `https://recipe-vue-batch2-default-rtdb.firebaseio.com/user.json`
        );
        for (let key in data) {
          if (data[key].userId === payload) {
            commit("setUserLogin", data[key]);
            commit("setLoginStatus", true)
            Cookies.set("user", JSON.stringify(data[key]));
            return;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    logout({ commit }, payload) {
      commit("setToken", null);
      commit("setUserLogin", {});
      commit("setLoginStatus", false)
      Cookies.remove("jwt");
      Cookies.remove("user");
      Cookies.remove("tokenExpirationDate");
      Cookies.remove("UID");
    },
  },
});
