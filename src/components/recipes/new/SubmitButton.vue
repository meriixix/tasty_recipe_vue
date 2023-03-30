<template>
    <div class="d-flex my-4 justify-content-end">
        <base-button buttonName="Cancel" class="cancel-btn px-3 py-2 me-1"></base-button>
        <base-button buttonName="Submit Recipe" class="submit-recipe-btn px-3 py-2 ms-1"></base-button>
    </div>
</template>

<script>
import BaseButton from "../../ui/BaseButton.vue"

export default {
    components: {
        BaseButton
    }
}
</script>