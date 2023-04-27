<template>
    <ul class="list-group">
        <new-recipe-header></new-recipe-header>
        <new-recipe-body :recipes="recipes"></new-recipe-body>
    </ul>
</template>

<script>
import NewRecipeHeader from "./NewRecipeHeader.vue"
import NewRecipeBody from "./NewRecipeBody.vue"

export default {
    props: {
        recipes: {
            type: Object,
            require: false
        }
    },
    components: {
        NewRecipeHeader,
        NewRecipeBody
    }
}
</script>