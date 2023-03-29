<template>
  <header
    class="shadow-sm container-fluid bg-white py-3 border-bottom fixed-top"
  >
    <div class="container-md d-flex justify-content-between align-items-center">
      <router-link tag="a" to="/">
        <img src="@/../public/images/Logo.png" alt="Logo" />
      </router-link>
      <Navbar></Navbar>
    </div>
  </header>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>