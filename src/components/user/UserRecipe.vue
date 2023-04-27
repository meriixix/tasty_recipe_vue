<template>
  <ul class="list-group">
    <li class="list-group-item">
      <div
        class="d-flex flex-sm-row flex-column justify-content-between align-items-sm-center"
      >
        <div class="mb-3 mb-sm-0">
          <p class="my-0 fs-4 fw-semibold">My Recipe</p>
          <p class="my-0 text-secondary">Add your original recipe here</p>
        </div>
        <div>
          <router-link
            tag="button"
            to="/new-recipe"
            class="btn add-btn px-3 py-2 rounded-pill"
          >
            <i class="fa-solid fa-circle-plus pe-2"></i>Add Recipe
          </router-link>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <p class="mt-2 mb-4 fs-5 fw-semibold">Recipe</p>
      <div class="row">
        <user-recipe-card
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
          :buttonName="['Delete', 'Edit']"
          @btnRemowe="showModal(recipe)"
          @btnDetail="editButton(recipe.id)"
        >
          <p>Created at {{ getDate(recipe.createdAt) }}</p>
        </user-recipe-card>
        <base-modal :modal="{title: 'Delete Recipe?', body: `Are you sure to delete '${ modalBody }' from your recipe?`}" @removeClicked="deleteRecipe(recipeId)"></base-modal>
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
      return allRecipe.filter((recipe) => recipe.userId === userId);
    },
  },
  methods: {
    getDate(data) {
      const date = new Date(data);
      return date.toDateString();
    },
    async deleteRecipe(id) {
      await this.$store.dispatch("deleteRecipe", id)
    },
    showModal(data) {
      this.modalBody = data.name
      this.recipeId = data.id
    },
    editButton(id) {
      this.$router.push(`/recipe/edit/${id}`)
    }
  },
  components: {
    UserRecipeCard,
    BaseModal
  },
};
</script>