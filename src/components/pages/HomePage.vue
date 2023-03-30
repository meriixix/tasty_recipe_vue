<template>
  <div>
    <Header></Header>
    <div class="container-md my-5 py-5">
      <div class="recipe__title text-center">
        <h2>All Recipe</h2>
        <p style="font-size: 15px">
          Find and share everyday cooking inspiration on Allrecipes.Discover
          recipes, cooks, videos, and how-tos based on the food you love and the
          friends you follow.
        </p>
      </div>
      <category></category>
      <home-recipe-list></home-recipe-list>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import HomeRecipeList from "../recipes/HomeRecipeList.vue";
import Category from '../category/Category.vue';

export default {
  components: {
    Header,
    Footer,
    HomeRecipeList,
    Category
  },
};
</script>

<style>
</style>