<template>
  <div class="d-flex justify-content-center flex-wrap mb-3">
    {{ choosenCategory }}
    <category-item v-for="(category, index) in categories" :key="index" :category="category" :index="index" v-model="choosenCategory"></category-item>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue'
export default {
    data() {
        return {
            categories: ["Breakfast", "Lunch", "Dinner", "Meals", "Snacks"],
            choosenCategory: []
        }
    },
    components: {
        CategoryItem
    }
}
</script>