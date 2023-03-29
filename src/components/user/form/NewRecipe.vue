<template>
  <div class="container-md my-5 py-5">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex align-items-center px-3">
          <i class="fa-solid fa-arrow-left"></i>
          <div class="ms-4">
            <p class="my-0 fs-4 fw-semibold">Add Recipe</p>
            <p class="my-0">
              Uploading personal recipes is easy! Add yours to your favorites,
              share with friends, family, or the Allrecipes community.
            </p>
          </div>
        </div>
      </li>

      <li class="list-group-item">
        <!-- General Information -->
        <p class="my-3 fs-5 fw-semibold">General Information</p>
        <div>
          <div class="mb-3">
            <label for="recipeImage">
              Photo Recipe<span style="color: #cb3a31">*</span>
              <div class="border px-5 py-4 text-center mt-2 rounded-3">
                <div class="my-2">
                  <i
                    class="fa-solid fa-plus d-block rounded-circle px-3 py-3"
                    style="background-color: #efefff; color: #4c4ddc"
                  ></i>
                  Upload
                </div>
              </div>
            </label>
            <input type="file" id="recipeImage" class="d-none" />
          </div>

          <input-form
            placeholder="Give your recipe a title"
            label="Recipe Title"
          ></input-form>

          <input-form
            placeholder="Share story behind recipe and what is make it special"
            label="Description"
          ></input-form>
        </div>

        <!-- Time Setting -->
        <div class="border-bottom py-1"></div>
        <p class="my-3 fs-5 fw-semibold">Time Setting</p>
        <div>
          <input-form placeholder="0" label="Prep Time"></input-form>
          <input-form placeholder="0" label="Cook Time"></input-form>
          <input-form placeholder="0" label="Total Time"></input-form>
        </div>

        <!-- Ingredients -->
        <div class="border-bottom py-1"></div>
        <p class="my-3 fs-5 fw-semibold">Ingredients</p>
        <p>
          Enter one ingredient per line. Include the quantity (i.e. cups,
          tablespoons) and any special preparation (i.e. sifted, softened,
          chopped). Use optional headers to organize the different parts of the
          recipe (i.e. Cake, Frosting, Dressing).
        </p>

        <!-- Directions -->
      </li>
    </ul>
  </div>
</template>

<script>
import InputForm from "./InputForm.vue";
export default {
  components: {
    InputForm,
  },
};
</script>