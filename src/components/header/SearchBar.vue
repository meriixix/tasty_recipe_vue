<template>
  <div class="col-sm-9 col-5 py-0">
    <div class="d-none d-sm-block">
      <div
        class="header__searchbar input-group align-items-center border rounded-pill"
      >
        <span class="px-2"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input
          type="text"
          class="form-control form-control-sm border-0 rounded-pill"
          placeholder="Search Recipe"
          v-model="keyword"
          @keydown="searchKeyword"
        />
      </div>
    </div>
    <div class="d-block d-sm-none border-end text-end px-3">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    }
  },
  methods: {
    searchKeyword() {
      console.log("search bar", this.keyword)
      this.$router.push({path: 'search', query: {key: this.keyword}})
    }
  }
}
</script>