import HomePage from './components/HomePage.vue'
import DetailPage from './components/DetailPage.vue'
import UserPage from './components/UserPage.vue'
import NewRecipePage from './components/NewRecipePage.vue'

export const routes = [
    { path: '/', name: "homePage", component: HomePage },
    { path: '/user', name: "userPage", component: UserPage },
    { path: '/user/new-recipe', name: "newRecipePage", component: NewRecipePage },
    { path: '/recipe/:id', component: DetailPage }
]