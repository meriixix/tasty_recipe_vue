<template>
  <li class="list-group-item">
    <!-- General Information Start-->
    <div>
      <p class="my-3 fs-5 fw-semibold">General Information</p>
      <div>
        <!-- <div class="mb-3">
          <label for="recipe-image">
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
          <base-input
            type="file"
            id="recipe-image"
            :modelValue="inputValue"
            @update:modelValue="newValue"
          ></base-input>
        </div> -->

        <div class="mb-3">
          <label for="recipe-title" class="form-label"
            >Image <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="text"
            id="recipe-title"
            v-model="recipeData.imageLink"
            placeholder="Give your recipe an image"
          ></base-input>
        </div>

        <div class="mb-3">
          <label for="recipe-title" class="form-label"
            >Recipe Title <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="text"
            id="recipe-title"
            placeholder="Give your recipe a title"
            v-model="recipeData.name"
          ></base-input>
        </div>

        <div class="mb-3">
          <label for="recipe-description" class="form-label"
            >Description <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="text"
            id="recipe-description"
            placeholder="Share story behind recipe and what is make it special"
            v-model="recipeData.description"
          ></base-input>
        </div>

        <div class="mb-3">
          <label for="recipe-category" class="form-label"
            >Category <span style="color: #cb3a31">*</span></label
          >
          <base-select
            v-model="recipeData.category"
            :data="['Breakfast', 'Lunch', 'Dinner', 'Meals', 'Snacks']"
          ></base-select>
        </div>
      </div>
    </div>
    <!-- General Information End -->

    <!-- Time Setting Start -->
    <div class="border-top py-1">
      <p class="my-3 fs-5 fw-semibold">Time Setting</p>
      <div>
        <div class="mb-3">
          <label for="prep-time" class="form-label"
            >Prep Time <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="number"
            id="prep-time"
            placeholder="0"
            v-model="recipeData.prepTime"
          ></base-input>
        </div>
        <div class="mb-3">
          <label for="cook-time" class="form-label"
            >Cook Time <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="number"
            id="cook-time"
            placeholder="0"
            v-model="recipeData.cookTime"
          ></base-input>
        </div>
        <div class="mb-3">
          <label for="prep-time" class="form-label"
            >Total Time <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="number"
            id="total-time"
            placeholder="0"
            v-model="recipeData.totalTime"
            @totalTimeFocus="totalTime"
            readonly="1"
          ></base-input>
        </div>
      </div>
    </div>
    <!-- Time Setting End -->

    <!-- Ingredients Start -->
    <div class="border-top py-1">
      <p class="my-3 fs-5 fw-semibold">Ingredients</p>
      <p>
        Enter one ingredient per line. Include the quantity (i.e. cups,
        tablespoons) and any special preparation (i.e. sifted, softened,
        chopped). Use optional headers to organize the different parts of the
        recipe (i.e. Cake, Frosting, Dressing).
      </p>
      <div>
        <!-- Ingredient Template -->
        <div class="mb-3 row" v-for="count in ingredientCount" :key="count">
          <div class="col-lg-11 col-11">
            <base-input
              id="ingredient"
              type="text"
              placeholder="Ex : 1 cup sugar"
              v-model="recipeData.ingredients[count - 1]"
            ></base-input>
          </div>
          <div
            class="col-lg-1 col-1 col-form-label align-self-end delete-ingredient"
            style="color: #cb3a31"
            v-if="ingredientCount > 1"
            @click="deleteIngredient(count - 1)"
          >
            <i class="fa-regular fa-trash-can px-1"></i
            ><span class="d-none d-md-inline">Delete</span>
          </div>
        </div>
      </div>

      <!-- Add Button -->
      <base-button
        buttonName="Add More"
        class="new-ingredient-btn px-3 py-2"
        @clickButton="addIngredient"
      >
        <i class="fa-solid fa-plus me-2"></i>
      </base-button>
    </div>
    <!-- Ingredients End -->

    <!-- Directions Start -->
    <div class="border-top my-3">
      <p class="my-3 fs-5 fw-semibold">Directions</p>
      <p>
        Explain how to make your recipe, including oven temperatures, baking or
        cooking times, and pan sizes, etc. Use optional headers to organize the
        different parts of the recipe
      </p>
      <div>
        <div class="mb-3 row" v-for="count in directionCount" :key="count">
          <div class="col-md-11 col-11">
            <label for="direction" class="form-label align-self-end"
              ><b>Step {{ count }}</b
              ><span style="color: #cb3a31">*</span></label
            >
            <base-input
              id="direction"
              type="text"
              placeholder="Ex : 1 cup sugar"
              v-model="recipeData.directions[count - 1]"
            ></base-input>
          </div>
          <div
            class="col-md-1 col-1 col-form-label align-self-end delete-directions"
            style="color: #cb3a31"
            v-if="directionCount > 1"
            @click="deleteDirection(count - 1)"
          >
            <i class="fa-regular fa-trash-can px-1"></i
            ><span class="d-none d-md-inline">Delete</span>
          </div>
        </div>
      </div>

      <!-- Add Button -->
      <base-button
        buttonName="Add More"
        class="new-ingredient-btn px-3 py-2"
        @clickButton="addDirection"
      >
        <i class="fa-solid fa-plus me-2"></i>
      </base-button>
    </div>
    <!-- Direction End -->

    <!-- Submit Button Start-->
    <div class="border-top py-3 d-flex my-4 justify-content-end">
      <base-button
        buttonName="Cancel"
        class="cancel-btn px-3 py-2 me-1"
      ></base-button>
      <base-button
        buttonName="Submit"
        class="submit-recipe-btn px-3 py-2 ms-1"
        @clickButton="addNewRecipe"
      ></base-button>
    </div>
  </li>
</template>

<script>
import BaseInput from "../../ui/BaseInput.vue";
import BaseSelect from "../../ui/BaseSelect.vue";
import BaseButton from "../../ui/BaseButton.vue";

export default {
  props: {
    recipes: {
      type: Object,
      required: false,
    },
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseButton,
  },
  data() {
    return {
      recipeData: this.recipes
        ? { ...this.recipes }
        : {
            imageLink: "",
            name: "",
            description: "",
            category: "",
            prepTime: 0,
            cookTime: 0,
            totalTime: 0,
            ingredients: [],
            directions: [],
          },
      ingredientCount: 1,
      directionCount: 1,
    };
  },
  methods: {
    totalTime(data) {
      this.recipeData.totalTime =
        parseInt(this.recipeData.prepTime) + parseInt(this.recipeData.cookTime);
    },
    addIngredient(item) {
      this.ingredientCount++;
    },
    addDirection(item) {
      this.directionCount++;
    },
    deleteIngredient(index) {
      this.recipeData.ingredients.splice(index, 1);
      this.ingredientCount = this.recipeData.ingredients.length;
    },
    deleteDirection(index) {
      this.recipeData.directions.splice(index, 1);
      this.directionCount = this.recipeData.directions.length;
    },
    async addNewRecipe(item) {
      if (!this.recipes) {
        await this.$store.dispatch("addNewRecipe", this.recipeData);
        this.$router.push("/");
      } else {
        await this.$store.dispatch("updateRecipe", this.recipeData);
        this.$router.push("/user/user-recipe");
      }
    },
    test() {
      console.log("ayyaya");
    },
  },
  created() {
    if (this.recipes) {
      this.ingredientCount = this.recipes.ingredients.length;
      this.directionCount = this.recipes.directions.length;
    }
  },
};
</script>

<style>
.delete-ingredient:hover,
.delete-directions:hover {
  cursor: pointer;
}
</style>