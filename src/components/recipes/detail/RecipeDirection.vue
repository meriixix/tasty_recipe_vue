<template>
  <div class="my-3">
    <div class="card">
      <div class="card-header">
        <p class="fs-4 my-0 fw-semibold">Directions</p>
      </div>
      <div class="card-body">
        <div v-for="(direction, index) in recipeDirections" :key="index">
          <p class="my-2 fs-5 fw-semibold">Step {{ index + 1 }}</p>
          <p class="my-2">{{ direction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        recipeDirections: {
            type: Array,
            require: true
        }
    }
}
</script>