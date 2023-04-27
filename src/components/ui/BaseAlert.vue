<template>
  <div
    class="alert alert-danger alert-dismissible fade show position-fixed top-0 end-0 w-25 me-3 mt-3"
    role="alert"
    style="z-index: 9999"
    
  >
    <strong>Session Expired!</strong> You should
    <router-link tag="a" to="/login" class="text-decoration-none"
      >login</router-link
    >
    to use this feature
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      @click="setAlert"
      aria-label="Close"
    ></button>
    {{ getAlertStatus }}
  </div>
</template>

<script>
export default {
  computed: {
    getAlertStatus() {
      console.log(this.$store.state.isAlert);
      return this.$store.state.isAlert;
    },
  },
  methods: {
    setAlert() {
      this.$store.commit('setAlert', false)
    }
  },
  watch: {
    getAlertStatus(newStatus) {
      document.querySelector(".alert").style.display = ""
    }
  }
};
</script>