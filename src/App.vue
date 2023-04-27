<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- <base-alert></base-alert> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue"
import Footer from "./components/footer/Footer.vue"
import BaseAlert from './components/ui/BaseAlert.vue'
export default {
  created() {
    this.$store.dispatch("recipeList")
  },
  components: {
    Header,
    Footer,
    BaseAlert
  },
  
}
</script>