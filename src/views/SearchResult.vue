
<template>
  <p>{{ message }}</p>
  <question-list type="searched" />
</template>

<script>
import { useRoute } from "vue-router";
import QuestionList from "../components/QuestionList.vue";
import { onMounted } from "vue";
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
  // mounted() {
  //   const route = useRoute();
  //   console.log(route.params)
  //   console.log(this.messages)
  //   this.message = route.params.message;

  // },
  mounted(){
    console.log(this.messages)
    console.log("ddd")
  },
  setup() {
    const route = useRoute();
    onMounted(() => {
      // let message = route.params.message;
      console.log(route)
    });

    
  },
};
</script>

<style scoped>
</style>