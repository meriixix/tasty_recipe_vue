<template>
  <div class="modal fade" id="modal-container">
    <div class="modal-dialog bg-white rounded">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modal.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
          {{ modal.body }}
        </div>
        <div
          class="modal-footer justify-content-between"
          style="background-color: #f5f5f5"
        >
          <base-button
            buttonName="Close"
            class="base-color-border px-3 py-2 me-1"
            :isModal="true"
          ></base-button>
          <base-button
            buttonName="Remove"
            class="base-color-bg px-3 py-2 ms-1"
            @clickButton="buttonClicked"
            :isModal="true"
          ></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    modal: {
      type: Object,
      require: true,
    },
  },
  methods: {
    buttonClicked(e) {
      this.$emit("removeClicked")
    },
  },
  components: {
    BaseButton,
  },
};
</script>

<style>
.modal-header {
  border-bottom: none;
}

.modal-footer {
  border-top: none;
}
.modal-dialog {
  top: 25%;
}
</style>