<template>
  <div>
    <main>
      <div class="container-md my-5 py-5">
        <new-recipe :recipes="recipeData"></new-recipe>
      </div>
    </main>
  </div>
</template>

<script>
import NewRecipe from "../recipes/new/NewRecipe.vue"

export default {
  components: {
    NewRecipe
  },
  computed: {
    recipeData() {
      return this.$store.getters.getRecepById(this.$route.params.id)
    }
  }
}
</script>