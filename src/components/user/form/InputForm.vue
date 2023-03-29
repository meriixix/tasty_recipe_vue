<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label"
      >{{ label }} <span style="color: #cb3a31">*</span></label
    >
    <input
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            require: true
        },
        placeholder: {
            type: String,
            require: true
        }
    }
}
</script>