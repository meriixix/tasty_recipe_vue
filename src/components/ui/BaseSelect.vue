<template>
    <select class="form-select" :id="id" @input="$emit('input', $event.target.value)">
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
    },
    data() {
        return {
            selected: this.data[0]
        }
    }
}
</script>
