<template>
  <div>
    <!-- <Header></Header> -->
    <div class="my-5 py-5">
      <div class="recipe__title text-center container-fluid py-3" style="background-color: #f5f5f5">
        <h2>Search result for "{{ $route.query.key }}"</h2>
        <p style="font-size: 15px">25 Recipe found using this keyword</p>
        <category></category>
      </div>
      <div class="container-md">
        <home-recipe-list :keyword="$route.query.key"></home-recipe-list>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../category/Category.vue";
import HomeRecipeList from "../recipes/HomeRecipeList.vue";

export default {
  components: {
    HomeRecipeList,
    Category,
  },
  computed: {
    filterRecipe() {
      // const keyword = this.$route.query.key.toLowerCase();
      // return this.$store.getters.getSearchData(keyword)
    }
  }
};
</script>