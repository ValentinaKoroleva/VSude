
<template>
  <p>{{ message }}</p>
  <question-list type="searched" />
</template>

<script>
import QuestionList from "../components/QuestionList.vue";
export default {
  name: "SearchResult",
  data() {
    return {
      message: "",
    };
  },
  props: ['messages'],
  components: {
    QuestionList,
  },
   mounted(){
    console.log(this.messages)
  },

};
</script>

<style scoped>
</style>