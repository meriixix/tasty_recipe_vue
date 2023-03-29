<template>
  <div>
    <Header></Header>
    <main>
      <div class="container-md my-5 py-5">
        <div class="row my-4">
          <div class="col-12 col-sm-2"></div>
          <recipe-detail :recipe="detailData"></recipe-detail>
          <div class="col-12 col-sm-2"></div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header/Header.vue";
import Footer from "./footer/Footer.vue";
import RecipeDetail from "./recipes/detail/RecipeDetail.vue";

export default {
  computed: {
    detailData() {
      return this.$store.getters.getRecepById(this.$route.params.id);
    },
  },
  components: {
    Header,
    Footer,
    RecipeDetail,
  },
};
</script>