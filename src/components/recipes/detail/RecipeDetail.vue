<template>
  <div class="col-12 col-sm-8">
    <recipe-description :recipeData="recipe"></recipe-description>
    <recipe-ingredients :recipeIngredient="recipe.ingredients"></recipe-ingredients>
    <recipe-direction :recipeDirections="recipe.directions"></recipe-direction>
  </div>
</template>

<script>
import RecipeDescription from "./RecipeDescription.vue";
import RecipeIngredients from "./RecipeIngredients.vue";
import RecipeDirection from "./RecipeDirection.vue";

export default {
  props: {
    recipe: {
      type: Object,
      require: true,
    },
  },
  components: {
    RecipeDescription,
    RecipeDirection,
    RecipeIngredients,
  },
};
</script>