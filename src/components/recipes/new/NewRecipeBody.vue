<template>
    <li class="list-group-item">
        <!-- General Information -->
        <general-information></general-information>
        <!-- Time Setting -->
        <!-- <time-setting></time-setting> -->
        <!-- Ingredients -->
        <!-- <ingredients></ingredients> -->
        <!-- Directions -->
        <!-- <directions></directions> -->
        <!-- Submit Button -->
        <!-- <submit-button></submit-button> -->
    </li>
</template>

<script>
import TimeSetting from './TimeSetting.vue'
import GeneralInformation from './GeneralInformation.vue'
import Ingredients from './Ingredients.vue'
import Directions from './Directions.vue'
import SubmitButton from './SubmitButton.vue'

export default {
    components: {
        GeneralInformation,
        TimeSetting,
        Ingredients,
        Directions,
        SubmitButton
    }
}
</script>