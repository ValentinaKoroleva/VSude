<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          Вам уже есть 18 лет?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" 
          @click="close()"
          data-bs-dismiss="modal">Да</button>
          <button type="button" class="btn btn-primary"
          @click="redirect()"
          >Нет</button>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import { Modal } from "bootstrap";
 
export default {
  mounted(){
    var myModal = new Modal(document.getElementById('staticBackdrop'))
    myModal.toggle()
  },
  methods:{
    close(){
      var myModal = new Modal(document.getElementById('staticBackdrop'))
      myModal.close()
    },
    redirect(){
      window.location.href = 'https://www.google.com';
    }
  }
}
</script>
