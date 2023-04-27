<template>
  <div class="recipe__list-recipe row">
    <home-recipe-card
      v-for="(recipe, index) in recipeList"
      :key="index"
      :recipe="recipe"
    ></home-recipe-card>
  </div>
</template>

<script>
import HomeRecipeCard from "./HomeRecipeCard.vue";

export default {
  props: {
    recipes: {
      type: Object,
      require: false,
    },
  },
  computed: {
    recipeList() {
      if (this.recipes) {
        return { ...this.recipes };
      } else {
        return this.$store.state.recipes;
      }
    },
  },
  components: {
    HomeRecipeCard,
  },
};
</script>