<template>
  <div class="border-top py-1">
    <p class="my-3 fs-5 fw-semibold">Time Setting</p>
    <div>
      <div class="mb-3">
        <label for="prep-time" class="form-label"
          >Prep Time <span style="color: #cb3a31">*</span></label
        >
        <base-input type="number" id="prep-time" placeholder="0"></base-input>
      </div>
      <div class="mb-3">
        <label for="cook-time" class="form-label"
          >Cook Time <span style="color: #cb3a31">*</span></label
        >
        <base-input type="number" id="cook-time" placeholder="0"></base-input>
      </div>
      <div class="mb-3">
        <label for="prep-time" class="form-label"
          >Total Time <span style="color: #cb3a31">*</span></label
        >
        <base-input type="number" id="total-time" placeholder="0"></base-input>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../../ui/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },
};
</script>