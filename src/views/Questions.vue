<template>
  {{ readersNumber }}
  <question-list v-model:type="categoryUpd" ></question-list>
</template>

<script>

import QuestionList from "../components/QuestionList.vue";

export default {
  name: "Questions",
  components: { QuestionList },
  data() {
    return {
      category: "",
    };
  },
  computed: {
      categoryUpd() {
        //   this.$emit('update:category', $event.target.value)
          return this.category
      }
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        // console.log(toParams)
        // console.log(previousParams)
        this.category = toParams.category;
        // console.log(this.category)
      }
    );
  },
};
</script>