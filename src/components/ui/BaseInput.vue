<template>
  <input
    :type="type"
    class="form-control"
    :id="id"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
    props:{
        type: {
            type: String,
            require: true
        },
        id: {
            type: String,
            require: true
        },
        placeholder: {
            type: String,
            require: false,
        }
    }
}
</script>