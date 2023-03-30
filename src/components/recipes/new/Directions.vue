<template>
  <div class="border-top my-3">
    <p class="my-3 fs-5 fw-semibold">Directions</p>
    <p>
      Explain how to make your recipe, including oven temperatures, baking or
      cooking times, and pan sizes, etc. Use optional headers to organize the
      different parts of the recipe
    </p>
    <div>
      <div class="mb-3 row">
        <div class="col-md-11 col-11">
          <label for="direction" class="form-label align-self-end"
            ><b>Step 1</b><span style="color: #cb3a31">*</span></label
          >
          <base-input
            id="direction"
            type="text"
            placeholder="Ex : 1 cup sugar"
          ></base-input>
        </div>
        <div
          class="col-md-1 col-1 col-form-label align-self-end"
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