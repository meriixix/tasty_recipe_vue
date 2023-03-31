<template>
    <div class="recipe__list-recipe row">
        <home-recipe-card v-for="(recipe, index) in recipeList" :key="index" :recipe="recipe"></home-recipe-card>
    </div>
</template>

<script>
import HomeRecipeCard from './HomeRecipeCard.vue'

export default {
    props: {
        keyword: {
            type: String,
            require: false,
            default: null
        }
    },
    data() {
        return {
             recipeList: this.keyword ? this.$store.getters.getSearchData(this.keyword) : this.$store.state.recipes
        }
    },
    computed: {
        // recipeList() {
            // if ( keyword ) {
            //     return this.$store.getters.getSearchData(keyword)
            // }
            // console.log(keyword)
            // return this.$store.state.recipes
        // }
    },
    created() {
        console.log(this.keyword)
    },
    components: {
        HomeRecipeCard
    }    
}
</script>