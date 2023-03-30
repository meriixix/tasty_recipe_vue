import HomePage from './components/pages/HomePage.vue'
import DetailPage from './components/pages/DetailPage.vue'
import UserPage from './components/pages/UserPage.vue'
import NewRecipePage from './components/pages/NewRecipePage.vue'

export const routes = [
    { path: '/', name: "homePage", component: HomePage },
    { path: '/user', name: "userPage", component: UserPage },
    { path: '/user/new-recipe', name: "newRecipePage", component: NewRecipePage },
    { path: '/recipe/:id', name: "recipeDetail", component: DetailPage }
]