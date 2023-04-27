<template>
  <div
    class="my-2 p-4 d-flex flex-column-reverse flex-lg-row justify-content-between border border-secondary-sublet rounded"
  >
    <div class="pe-lg-4">
      <h2>{{ recipeData.name }}</h2>
      <p>{{ recipeData.description }}</p>

      <!-- Phone Device -->
      <div
        class="d-flex d-lg-none flex-column justify-content-between border border-primary rounded bg-color-detail"
      >
        <div
          class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-bottom border-primary"
        >
          <p class="my-0">Preptime</p>
          <p class="my-0">{{ recipeData.preparationTime }} Mins</p>
        </div>
        <div class="w-75 px-lg-4 pb-3 mx-auto border-bottom border-primary">
          <p class="my-0">Cooktime</p>
          <p class="my-0">{{ recipeData.cookTime }} Mins</p>
        </div>
        <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
          <p class="my-0">Total</p>
          <p class="my-0">{{ recipeData.preparationTime + recipeData.cookTime }} Mins</p>
        </div>
      </div>

      <!-- PC Device -->
      <div
        class="d-none d-lg-flex flex-lg-row justify-content-between border border-primary rounded bg-color-detail"
      >
        <div
          class="w-75 my-3 pb-3 mx-auto pe-lg-4 ps-lg-3 border-end border-primary"
        >
          <p class="my-0">Preptime</p>
          <p class="my-0">{{ recipeData.prepTime }} Mins</p>
        </div>
        <div class="w-75 my-3 px-lg-4 mx-auto border-end border-primary">
          <p class="my-0">Cooktime</p>
          <p class="my-0">{{ recipeData.cookTime }} Mins</p>
        </div>
        <div class="w-75 my-3 mx-auto ps-lg-4 pe-3">
          <p class="my-0">Total</p>
          <p class="my-0">{{ recipeData.totalTime }} Mins</p>
        </div>
      </div>
      <p class="my-3">Recipe By {{ recipeData.username }}</p>
      <button class="btn fav-btn px-3 py-2 rounded-pill">
        <i class="fas fa-heart pe-2" style="color: red"></i>Add To Favorite
      </button>
    </div>
    <div class="ps-lg-4">
      <img
        :src="recipeData.imageLink"
        alt="Food"
        class="recipe__detail-img rounded mx-auto"
        style="object-fit: cover"
      />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        recipeData: {
            type: Object,
            require: true
        }
    }
}
</script>