<template>
  <div>
    <Header></Header>
    <main>
      <div class="container-md my-5 py-5">
        <new-recipe></new-recipe>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../header/Header.vue";
import Footer from "../footer/Footer.vue";
import NewRecipe from "../recipes/new/NewRecipe.vue";

export default {
  components: {
    Header,
    Footer,
    NewRecipe,
  },
};
</script>