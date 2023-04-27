import HomePage from "./components/pages/HomePage.vue";
import DetailPage from "./components/pages/DetailPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import NewRecipePage from "./components/pages/NewRecipePage.vue";
import SearchPage from "./components/pages/SearchPage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import EditRecipePage from "./components/pages/EditRecipePage.vue";
import Cookies from "js-cookie";
import { store } from "./store";

const checkAuth = () => {
  const jwtCookie = Cookies.get("jwt");
  const expirationDate = Cookies.get("tokenExpirationDate");
  const userData = Cookies.get("user");
  if (jwtCookie) {
    // Plus sign used to change the data type to number
    if (new Date().getTime() < +expirationDate) {
      store.commit("setToken", jwtCookie);
      store.commit("setUserLogin", JSON.parse(decodeURIComponent(userData)));
      store.commit("setLoginStatus", true)
      return true;
    } else {
      Cookies.remove("jwt");
      Cookies.remove("tokenExpirationDate");
      Cookies.remove("user");
      store.commit("setLoginStatus", false)
      return false;
    }
  } else {
    return false;
  }
};

export const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      checkAuth() ? next() : next();
    },
  },
  {
    path: "/user/:component",
    name: "userPage",
    component: UserPage,
    beforeEnter: (to, from, next) =>
      checkAuth() ? next() : next({ name: "login" }),
  },
  {
    path: "/new-recipe",
    name: "newRecipePage",
    component: NewRecipePage,
    beforeEnter: (to, from, next) =>
      checkAuth() ? next() : next({ name: "login" }),
  },
  {
    path: "/recipe/:id",
    name: "recipeDetail",
    component: DetailPage,
    // children: [
    //   {
    //     path: "edit",
    //     component: EditRecipePage,
    //   },
    // ],
  },
  { path: "/search", name: "search", component: SearchPage },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/signup", name: "signup", component: SignupPage },
  {
    path: "/recipe/edit/:id",
    name: "editRecipe",
    component: EditRecipePage,
    beforeEnter: (to, from, next) =>
      checkAuth() ? next() : next({ name: "login" }),
  },
];
