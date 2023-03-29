<template>
  <div class="d-flex justify-content-center flex-wrap mb-3">
    <category-item v-for="(category, index) in categories" :key="index" :category="category" :index="index"></category-item>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue'
export default {
    data() {
        return {
            categories: ["Breakfast", "Lunch", "Dinner", "Meals", "Snacks"]
        }
    },
    components: {
        CategoryItem
    }
}
</script>