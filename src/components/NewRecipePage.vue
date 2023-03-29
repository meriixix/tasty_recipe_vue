<template>
  <div>
    <Header></Header>
    <new-recipe></new-recipe>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header/Header.vue";
import Footer from "./footer/Footer.vue";
import NewRecipe from "./user/form/NewRecipe.vue";

export default {
  components: {
    Header,
    Footer,
    NewRecipe,
  },
};
</script>