<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div class="mb-3 mb-sm-0">
        <p class="my-0 fs-4 fw-semibold">Favorite Recipe</p>
        <p class="my-0 text-secondary">Save the recipe that you loved here</p>
      </div>
    </li>
    <li class="list-group-item">
      <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
      <div class="row">
       <user-recipe-card
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
          :buttonName="['Remove', 'See Details']"
          @btnRemowe="showModal(recipe)"
          @btnDetail="showDetail(recipe.id)"
        >
          <p>Recipe By {{ recipe.username }}</p>
        </user-recipe-card>
        <base-modal :modal="{title: 'Remove Recipe from favorite', body: `Are you sure to remove '${ modalBody }' from favorites?`}" @removeClicked="likeRecipe(recipeId)"></base-modal>
      </div>
    </li>
  </ul>
</template>

<script>
import UserRecipeCard from "./UserRecipeCard.vue";
import BaseModal from "../ui/BaseModal.vue"

export default {
  data() {
    return {
      modalBody: "",
      recipeId: ""
    }
  },
  computed: {
    recipes() {
      const allRecipe = this.$store.state.recipes;
      const userId = this.$store.state.userLogin.userId;
      const favoritedRecipe = allRecipe.filter(recipe => {
        const findRecipe = recipe.likes.find(like => like === userId)
        if ( findRecipe !== undefined ) {
          return recipe
        } 
      })
      return favoritedRecipe
    },
  },
  methods: {
    likeRecipe(id) {
      console.log(id)
      this.$store.dispatch("updateLike", {status: true, recipeId: id})
    },
    showDetail(id) {
      this.$router.push(`/recipe/${id}`)
    },
    showModal(data) {
      console.log(data.id)
      this.modalBody = data.name
      this.recipeId = data.id
    }
  },
  components: {
    UserRecipeCard,
    BaseModal
  }  
}
</script>