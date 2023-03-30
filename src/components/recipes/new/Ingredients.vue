<template>
  <div class="border-top py-1">
    <p class="my-3 fs-5 fw-semibold">Ingredients</p>
    <p>
      Enter one ingredient per line. Include the quantity (i.e. cups,
      tablespoons) and any special preparation (i.e. sifted, softened, chopped).
      Use optional headers to organize the different parts of the recipe (i.e.
      Cake, Frosting, Dressing).
    </p>
    <div>
      <div class="mb-3 row">
        <div class="col-lg-11 col-11">
          <base-input
            id="ingredient"
            type="text"
            placeholder="Ex : 1 cup sugar"
          ></base-input>
        </div>
        <div
          class="col-lg-1 col-1 col-form-label align-self-end"
          style="color: #cb3a31"
          ><i class="fa-regular fa-trash-can px-1"></i
          ><span class="d-none d-md-inline">Delete</span></div
        >
      </div>
    </div>

    <!-- Add Button -->
    <base-button buttonName="Add More" class="new-ingredient-btn px-3 py-2">
        <i class="fa-solid fa-plus me-2"></i>
    </base-button>
  </div>
</template>

<script>
import BaseInput from "../../ui/BaseInput.vue";
import BaseButton from "../../ui/BaseButton.vue"

export default {
  components: {
    BaseInput,
    BaseButton
  },
};
</script>