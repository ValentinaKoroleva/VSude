<template>
    <p>{{message}}</p>
    <question-list type="found" />
</template>

<script>
import QuestionList from '../components/QuestionList.vue'
export default {
    name: 'SearchResults',
    props:['messages'],
    components:{
        QuestionList,
    }
}
</script>

<style scoped>

</style>