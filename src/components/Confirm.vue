<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">Вам уже есть 18 лет?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="close()"
            data-bs-dismiss="modal"
          >
            Да
          </button>
          <button type="button" class="btn btn-primary" @click="redirect()">
            Нет
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";

export default {
  props: ['isOfAge'],
  data() {
    return {
      ofAge: this.isOfAge,
    };
  },
  computed:{
    age(){
      return this.ofAge
    }
  },
  mounted() {
    if (this.isOfAge === undefined) {
      const myModal = new Modal(document.getElementById("staticBackdrop"));
      myModal.toggle();
    }
  },
  emits: ['update:isOfAge'],
  methods: {
    close() {
      // const myModal = new Modal(document.getElementById("staticBackdrop"));
      // myModal.close();
      // $emit('update:this.isOfAge', true)
      this.ofAge = true
      this.$emit('update:isOfAge', true)
      // this.setOfAge(true)
    },
    redirect() {
      // this.setOfAge(false)
      this.$emit('update:isOfAge', false)

      window.location.href = "https://www.google.com";
    },
  },
};
</script>
