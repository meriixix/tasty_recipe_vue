<template>
  <button class="btn rounded-pill" @click="$emit('addMoreClick')">
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