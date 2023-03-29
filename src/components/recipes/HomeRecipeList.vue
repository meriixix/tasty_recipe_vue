<template>
    <div class="recipe__list-recipe row">
        <home-recipe-card v-for="(recipe, index) in recipeList" :key="index" :recipe="recipe"></home-recipe-card>
    </div>
</template>

<script>
import HomeRecipeCard from './HomeRecipeCard.vue'

export default {
    computed: {
        recipeList() {
            return this.$store.state.recipes
        }
    },
    components: {
        HomeRecipeCard
    }    
}
</script>