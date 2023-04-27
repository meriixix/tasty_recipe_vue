<template>
  <div
    class="header__signup col-8 col-sm-4 fw-semibold d-flex justify-content-evenly align-items-center text-decoration-none"
    style="text-align: right"
  >
    <i class="fa-solid fa-user" style="color: #4c4ddc"></i>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          My Profile
        </a>
        <ul class="dropdown-menu">
          <router-link to="/user/personal-info" tag="li" class="dropdown-item">My Profile</router-link>
          <router-link to="/user/favorite-recipes" tag="li" class="dropdown-item">Favorited Recipes</router-link>
          <router-link to="/user/user-recipe" tag="li" class="dropdown-item">My Recipes</router-link>
          <li><hr class="dropdown-divider"/></li>
          <li class="dropdown-item" @click="logout">Logout</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.dropdown-item:hover {
  cursor: pointer;
}

.navbar-nav {
  --bs-nav-link-padding-y: 0
}

</style>