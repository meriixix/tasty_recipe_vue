<template>
  <div class="header__navbar row justify-content-between align-items-center" style="width: 450px">
    <search-bar></search-bar>
    <profile-menu></profile-menu>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue"
import ProfileMenu from "./ProfileMenu.vue"
export default {
    components: {
        SearchBar,
        ProfileMenu
    }
}
</script>