<template>
  <div
    class="col-12 col-lg-3 col-sm-4 position-relative"
    style="padding-top: 12px; padding-bottom: 12px"
  >
    <router-link
      class="card"
      style="height: 398px"
      :to="/recipe/ + recipe.id"
      tag="div"
    >
      <img
        :src="recipe.imageLink"
        class="card-img-top"
        alt="Food"
        height="240"
        width="285"
        style="object-fit: cover"
      />
      <div class="card-body">
        <p class="mb-0">{{ recipe.category }}</p>
        <div class="h-50">
          <h4 class="fs-5 mb-0">{{ recipe.name }}</h4>
        </div>
        <p>Recipe By {{ recipe.username }}</p>
      </div>
    </router-link>
    <div
      class="position-absolute text-secondary bg-light px-2 py-1 rounded-circle top-0 end-0 m-4 like-icon"
      :class="{ 'text-secondary': !isLike, 'text-danger': isLike }"
      @click="likeRecipe"
    >
      <i class="fas fa-heart"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      require: true,
    },
  },
  computed: {
    isLike() {
      if (this.recipe.likes.length === 0) {
        if (this.recipe.likes[0] === "null") {
          return false;
        }
      } else {
        const data = this.recipe.likes.find(
          (like) => like === this.$store.state.userLogin.userId
        );
        if (data === undefined) {
          return false;
        } else {
          return true;
        }
      }
    },
  },
  methods: {
    async likeRecipe() {
      await this.$store.dispatch("updateLike", {
        status: this.isLike,
        recipeId: this.recipe.id,
      });

      const isLogin = this.$store.state.isLogin;
      if (!isLogin) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          html:
            "<b>Session Expired!</b> Please login to use this feature.",
          width: 400,
          padding: "1em",
          background: "#fff url(/images/trees.png)",
          backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
        }).then(res => {
          this.$router.push("/login")
        });
      }
    },
  },
};
</script>

<style scoped>
.like-icon:hover {
  cursor: pointer;
}
</style>