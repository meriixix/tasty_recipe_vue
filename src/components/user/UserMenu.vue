<template>
  <div class="col-lg-3 mb-4">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex align-items-center">
          <img
            src="@/../public/images/profile.jpg"
            alt="Profile"
            width="36"
            height="36"
            class="rounded-circle"
          />
          <div class="ps-3">
            <p class="my-0 fs-5 fw-semibold">
              {{ userData.firstname }} {{ userData.lastname }}
            </p>
            <p class="my-0 fs-6 text-secondary">{{ userData.email }}</p>
          </div>
        </div>
      </li>
      <li
        class="list-group-item user-menu"
        :class="{ 'border-start': isPersonalInfo, 'border-3': isPersonalInfo }"
        @click="menuClicked('personal-info')"
      >
        <i
          class="fa-solid fa-user pe-2"
          :class="{ 'active-color': isPersonalInfo }"
        ></i
        >Personal Info
      </li>
      <li
        class="list-group-item user-menu"
        :class="{
          'border-start': isFavoriteRecipe,
          'border-3': isFavoriteRecipe,
        }"
        @click="menuClicked('favorite-recipes')"
      >
        <i
          class="fas fa-heart pe-2"
          :class="{ 'active-color': isFavoriteRecipe }"
        ></i
        >Favorited Recipes
      </li>
      <li
        class="list-group-item user-menu"
        :class="{ 'border-start': isMyRecipe, 'border-3': isMyRecipe }"
        @click="menuClicked('user-recipe')"
      >
        <i
          class="fa-solid fa-burger pe-2"
          :class="{ 'active-color': isMyRecipe }"
        ></i
        >My Recipe
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFavoriteRecipe: false,
      isPersonalInfo: false,
      isMyRecipe: false,
    };
  },
  computed: {
    userData() {
      return this.$store.state.userLogin;
    },
    getPath() {
      return this.$route.params.component;
    },
  },
  methods: {
    activeMenu(option) {
      if (option === "personal-info") {
        this.isFavoriteRecipe = false;
        this.isMyRecipe = false;
        this.isPersonalInfo = true;
      } else if (option === "favorite-recipes") {
        this.isFavoriteRecipe = true;
        this.isMyRecipe = false;
        this.isPersonalInfo = false;
      } else {
        this.isFavoriteRecipe = false;
        this.isMyRecipe = true;
        this.isPersonalInfo = false;
      }
    },
    menuClicked(option) {
      this.activeMenu(option);
      this.$emit("changeComponent", option);
    },
  },
  watch: {
    getPath(newRoute) {
      this.activeMenu(newRoute);
    },
  },
  created() {
    const route = this.$route.params.component;
    this.activeMenu(route);
  },
};
</script>

<style scoped>
.user-menu:hover {
  cursor: pointer;
}

.active-color {
  color: #4c4ddc;
}

.inactive-color {
  color: #404040;
}
</style>