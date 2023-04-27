<template>
  <div
    class="header__navbar row justify-content-between align-items-center"
    style="width: 450px"
  >
    <search-bar></search-bar>
    <component :is="menuComponent"></component>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import ProfileMenu from "./ProfileMenu.vue";
import SignupMenu from "./SignupMenu.vue";

export default {
  data() {
    return {
      token: null,
      menuComponent: "signup-menu",
    };
  },
  computed: {
    getToken() {
      return this.$store.state.token;
    },
  },
  watch: {
    getToken(newToken) {
      if (!newToken) {
        this.menuComponent = "signup-menu";
      } else {
        this.menuComponent = "profile-menu";
      }
    },
  },
  created() {
    if ( !this.getToken ) {
      this.menuComponent = "signup-menu";
    } else {
       this.menuComponent = "profile-menu";
    }
  },
  components: {
    SearchBar,
    ProfileMenu,
    SignupMenu,
  },
};
</script>