<template>
  <div class="container-fluid mt-5 pt-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 w-50 m-auto">
      <div class="text-center">
        <img src="../../assets/images/Vector.png" alt="Logo" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3" @submit.prevent="register">
        <div class="row">
          <div class="col-md-6">
            <label for="firstname" class="fw-semibold"
              >Firstname <span style="color: #cb3a31">*</span></label
            >
            <base-input
              type="text"
              id="firstname"
              v-model="signupData.firstname"
              placeholder="Ex: Jack"
            >
              <p slot="validFeedback">Please input your firstname</p>
            </base-input>
          </div>

          <div class="col-md-6">
            <label for="lastname" class="fw-semibold"
              >Last Name <span style="color: #cb3a31">*</span></label
            >
            <base-input
              type="text"
              id="lastname"
              v-model="signupData.lastname"
              placeholder="Ex: Daniel"
            >
              <p slot="validFeedback">Please input your lastname</p>
            </base-input>
          </div>
        </div>

        <!-- Username -->
        <div class="my-4">
          <label for="username" class="fw-semibold"
            >Username <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="text"
            id="username"
            v-model="signupData.username"
            placeholder="Your username"
          >
            <p slot="validFeedback">Please choose an username</p>
          </base-input>
        </div>

        <!-- Email -->
        <div class="my-4">
          <label for="email" class="fw-semibold"
            >Email <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="email"
            id="email"
            v-model="signupData.email"
            placeholder="Your email address"
          >
            <p slot="validFeedback">Please provide a valid email</p>
          </base-input>
        </div>

        <!-- Password -->
        <div class="my-4">
          <label for="password" class="fw-semibold"
            >Password <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="password"
            id="password"
            v-model="signupData.password"
            placeholder="Your password"
            @keyInput="passwordCheck"
          >
          </base-input>
          <p class="text-danger mt-1 fw-medium" style="font-size: 11px" :style="{ display: paswwordStatusDisplay }">The password field must be at least 8 characters</p>
        </div>

        <!-- Confirm Password -->
        <div class="my-4">
          <label for="confirmationPassword" class="fw-semibold"
            >Confirmation Password <span style="color: #cb3a31">*</span></label
          >
          <base-input
            type="password"
            id="confirmationPassword"
            v-model="signupData.confirmationPassword"
            @keyInput="passwordCheck"
            placeholder="Same with password"
          >
          </base-input>
          <p
            class="text-danger mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmPasswordDoesNotMacth }"
          >
            The password confirmation does not match
          </p>
          <p
            class="text-success mt-1 fw-medium"
            style="font-size: 11px"
            :style="{ display: confirmPasswordMacth }"
          >
            The password confirmation does match
          </p>
        </div>

        <base-button class="login w-100 my-3">Register</base-button>
      </form>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have account?<span style="color: #4c4ddc"
            ><router-link tag="a" to="/login" class="text-decoration-none"
              > Login</router-link
            ></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  data() {
    return {
      signupData: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmationPassword: "",
        isLogin: false
      },
      confirmPasswordDoesNotMacth: "none",
      confirmPasswordMacth: "none",
      paswwordStatusDisplay: "none"
    };
  },
  methods: {
    showConfirmPasswordDoesNotMatch() {
        this.confirmPasswordDoesNotMacth = "block";
        this.confirmPasswordMacth = "none";
    },
    showConfirmPasswordMatch(){
        this.confirmPasswordDoesNotMacth = "none"
        this.confirmPasswordMacth = "block"
    },
    hideConfirmPasswordStatus(){
        this.confirmPasswordDoesNotMacth = "none";
        this.confirmPasswordMacth = "none";
    },
    passwordCheck() {
      // Password Length Check
      if ( this.signupData.password.length < 8 ) {
        this.paswwordStatusDisplay = "block"
      } else {
        this.paswwordStatusDisplay = "none"
      }

      if (this.signupData.confirmationPassword === "") {
        this.hideConfirmPasswordStatus()
        return
      }

      if (this.signupData.password !== this.signupData.confirmationPassword) {
        this.showConfirmPasswordDoesNotMatch()
        return
      }
      
      this.showConfirmPasswordMatch()
    },
    async register() {  
      if ( this.signupData.password !== this.signupData.confirmationPassword || this.signupData.password.length < 8 ) {
        this.signupData.confirmationPassword = ""
        this.signupData.password = ""
        this.hideConfirmPasswordStatus()
        return
      }
      await this.$store.dispatch("userSignup", this.signupData);
      this.$router.push("/")
    },
  },
  components: {
    BaseInput,
    BaseButton,
  },
};
</script>