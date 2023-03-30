<template>
  <div>
    <p class="my-3 fs-5 fw-semibold">General Information</p>
    <div>
      <div class="mb-3">
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
        <base-input type="file" id="recipe-image" class="d-none"></base-input>
      </div>

      <div class="mb-3">
        <label for="recipe-title" class="form-label"
          >Recipe Title <span style="color: #cb3a31">*</span></label
        >
        <base-input
          type="text"
          id="recipe-title"
          placeholder="Give your recipe a title"
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
        ></base-input>
      </div>

      <div class="mb-3">
        <label for="recipe-category" class="form-label"
          >Category <span style="color: #cb3a31">*</span></label
        >
        <base-select :data="['Breakfast', 'Lunch', 'Dinner', 'Meals', 'Snacks']"></base-select>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../ui/BaseInput.vue";
import BaseSelect from '../../ui/BaseSelect.vue';

export default {
  components: {
    BaseInput,
    BaseSelect
  },
};
</script>