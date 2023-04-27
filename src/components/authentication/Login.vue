<template>
  <div class="container-fluid mt-5 pt-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 w-50 m-auto">
      <div class="text-center">
        <img src="../../assets/images/Vector.png" alt="Logo" />
        <h2 class="mt-4">Log in to your account</h2>
        <p>Welcome back! Please enter your details.</p>
      </div>
      <form @submit.prevent="login">
        <div class="my-4">
          <label for="email" class="fw-semibold">Email <span style="color: #cb3a31">*</span></label>
          <base-input
            type="email"
            id="email"
            v-model="loginData.email"
            placeholder="Your email address"
          ></base-input>
        </div>
        <div class="my-4">
          <label for="password" class="fw-semibold">Password <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="password"
            id="password"
            v-model="loginData.password"
            placeholder="Your password"
          ></base-input>
        </div>
        <base-button class="login w-100 my-3">Login</base-button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">Don’t have an account?<span style="color: #4C4DDC"> <router-link tag="a" to="/signup" class="text-decoration-none"> Signup</router-link></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue"

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: "",
        isLogin: true
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch("userSignup", this.loginData)
      this.$router.push("/")
    }
  },
  components: {
    BaseInput,
    BaseButton
  },
};
</script>