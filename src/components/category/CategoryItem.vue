<template>
  <div class="px-2 mb-2">
    <input type="checkbox" class="btn-check" :id="`btn-check-${index + 1}-outlined`" @input="$emit('input', $event.target.value)" :value="category"/>
    <label class="btn btn-category" :for="`btn-check-${index + 1}-outlined`">{{ category }}</label>
  </div>
</template>

<script>
export default {
    props: {
        category: {
            type: String,
            require: true
        },
        index: {
            type: Number,
            require: true
        },
        checked: {
          type: Boolean
        }
    },
}
</script>