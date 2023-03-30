<template>
  <button class="btn rounded-pill">
    <slot></slot>{{ buttonName }}
  </button>
</template>


<script>
export default {
    props: {
        buttonName: {
            type: String,
            require: true
        }
    }
}
</script>