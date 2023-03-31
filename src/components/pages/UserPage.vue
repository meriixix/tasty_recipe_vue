<template>
  <div>
    <div class="container-md my-5 py-5">
      <div class="row">
        <user-menu @changeComponent="currentTabComponent = $event"></user-menu>
        <div class="col-lg-9">
          <component :is="currentTabComponent"></component>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
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
    UserMenu,
    FavoriteRecipes,
    UserRecipe,
    PersonalInfo,
  },
};
</script>
