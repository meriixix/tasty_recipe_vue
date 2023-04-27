<template>
  <div>
    <main>
      <div class="container-md my-5 py-5">
        <div class="row my-4">
          <div class="col-12 col-sm-2"></div>
          <recipe-detail :recipe="detailData"></recipe-detail>
          
          <div class="col-12 col-sm-2"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import RecipeDetail from "../recipes/detail/RecipeDetail.vue";

export default {
  data() {
    return {
      detailData: null
    }
  },
  created() {
      this.detailData = this.$store.getters.getRecepById(this.$route.params.id);
  },
  components: {
    RecipeDetail,
  },
};
</script>