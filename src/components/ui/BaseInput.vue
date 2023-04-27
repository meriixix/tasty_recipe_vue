<template>
  <div>
    <input
      :type="type"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('totalTimeFocus', $event.target.value)"
      @keyup="$emit('keyInput', $event.target.value)"
      :readonly="readonly === '1'"
      required
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      require: true,
    },
    id: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: false,
    },
    value: {
      type: [String, Number, File, Array],
    },
    readonly: {
      type: String,
      default: "0",
    },
    validFeedback: {
        type: String,
        require: true
    },
    inValidFeedback: {
        type: String,
        require: true
    }
  },
};
</script>