<template>
  <router-link
    tag="div"
    class="col-12 col-lg-3 col-sm-4"
    style="padding-top: 12px; padding-bottom: 12px"
    :to="/recipe/ + recipe.id"
  >
    <div class="card position-relative" style="height: 398px">
      <img
        :src="`images/${recipe.image}`"
        class="card-img-top"
        alt="Food"
        height="240"
        width="285"
      />
      <div class="card-body">
        <p class="mb-0">{{recipe.category}}</p>
        <div class="h-50">
          <h4 class="fs-5 mb-0">{{ recipe.name }}</h4>
        </div>
        <p>Recipe By {{ recipe.createdBy }}</p>
      </div>
      <div
        class="position-absolute text-danger bg-light px-2 py-1 rounded-circle end-0 m-2"
      >
        <i class="fas fa-heart"></i>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      require: true
    }
  }
}
</script>