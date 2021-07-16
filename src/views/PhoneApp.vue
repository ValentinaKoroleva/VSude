<template>
  <div class="about">
    <h1>Приложение</h1>
  </div>
  <phone-img/>
</template>


  <script>

  import PhoneImg from '../components/PhoneImg.vue'
  export default {
    name: 'PhoneApp',
    components: {
        PhoneImg
      }
  }
  </script>
