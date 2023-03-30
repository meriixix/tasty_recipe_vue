<template>
    <select class="form-select" :id="id">
        <option v-for="(item, index) in data" :key="index" :value="item">{{ item }}</option>
    </select>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            require: true
        },
        id: {
            type: String,
            require: true
        }
    }
}
</script>
