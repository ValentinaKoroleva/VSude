<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLeft"
        aria-controls="offcanvasLeft"
      >
        <i class="bi bi-list"></i>
      </button>
      <form class="d-flex">
        <router-link to="/search"><i class="bi bi-search"></i></router-link>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchString"
          list="data"
        />
        <datalist id="data">
          <option v-for="item in searchInProgress" :key="item" :value="item" />
        </datalist>
        <!-- <button
          class="btn btn-outline-success custom-search"
          type="submit"
          aria-placeholder="Search"
        >
          <i class="bi bi-search"></i>
        </button> -->
      </form>
    </div>
  </nav>
</template>

<script>
import csv from "@/assets/questions.csv";

export default {
  data() {
    return {
      searchString:'',
      QAs:[],
      messageResult: "Ничего не найдено",
      list: ["HTML", "CSS", "JavaScript"],
    };
  },
  mounted() {
      let k = 0;
      for (let i = 0; i < csv.length; i++) {
        let element = csv[i];
        if (element.answer.search(this.searchString)) {
          // this.list[k] = element.question
          this.QAs[k] = { id: i, q: element.question, a: element.answer };
          k++;
        }
      }
  },
  // watch (){
  // },
  computed:{
    searchInProgress() {
      let newList = []
      this.list.forEach(element => {
        if(element.search(this.searchString)) {
          newList.push(element)
        }
      });
      return newList
    }
  },
  methods: {
    findString() {
      let k = 0;
      for (let i = 0; i < csv.length; i++) {
        let element = csv[i];
        if (element.answer.find(this.searchString)) {
          this.list[k] = element.question
          k++;
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 90%;
  border-radius: 18px;
  margin: 1%;
}
.custom-search {
  color: #b1b1b7;
  background: #ece9e9;
  border: #474747;
}
.custom-search:hover {
  color: #b1b1b7;
  background: #ece9e9;
  border: #686767;
}
</style>