<template>
  <div>
    <Header></Header>
    <div class="container-md my-5 py-5">
      <div class="row">
        <user-menu @changeComponent="currentTabComponent = $event"></user-menu>
        <div class="col-lg-9">
          <component :is="currentTabComponent"></component>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import UserMenu from "../user/UserMenu.vue";
import FavoriteRecipes from "../user/FavoriteRecipes.vue";
import UserRecipe from "../user/UserRecipe.vue";
import PersonalInfo from "../user/PersonalInfo.vue";

export default {
  data() {
    return {
        currentTabComponent: "personal-info"
    };
  },
  components: {
    Header,
    Footer,
    UserMenu,
    FavoriteRecipes,
    UserRecipe,
    PersonalInfo,
  },
};
</script>
