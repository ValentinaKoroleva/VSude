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
      <form class="d-flex flex-column">
        <div class="d-flex flex-row">
          <!-- <router-link to="/search"><i class="bi bi-search"></i></router-link> -->
          <input
            class="form-control me-2"
            type="text"
            placeholder="Поиск"
            aria-label="Поиск"
            v-model="searchString"
            list="data"
            v-on:keydown.enter.prevent="search()"
            v-on:keyup.enter.prevent
            v-on:click.prevent
          />
        </div>
        <div>
          <ul id="data" v-if="searchInProgress.length > 0">
            <li v-for="item in searchInProgress" :key="item.id" :value="item.q">
              <a :href="'/article?id=' + item.id">{{ item.q }}</a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import csv from "@/assets/questions.csv";
import router from "../router";
export default {
  data() {
    return {
      searchString: "",
      QAs: [],
      messageResult: "Ничего не найдено",
      list: [],
    };
  },
  mounted() {
    let listener = () => {
      this.searchString = "";
    }
    document.addEventListener("click", listener);
    document.querySelector('input').removeEventListener('click', listener)
    for (let i = 0; i < csv.length; i++) {
      let element = csv[i];
      this.list[i] = { id: i, q: element.question, a: element.answer };
    }
  },
  computed: {
    searchInProgress() {
      let newList = [];
      if (this.searchString === "") {
        return newList;
      }
      this.list.forEach((element) => {
        let reg = new RegExp(this.searchString, "ig");
        if (reg.test(element.q) || reg.test(element.a)) {
          newList.push(element);
        }
      });
      return newList;
    },
  },
  methods: {
    resetSearch() {
      this.searchString = "";
    },
    goToQuestion(id) {
      console.log(id);
      router.go(0);
      router.push("/article?id=" + id);
    },
    search(){
      // router.push("/questionList/searched");
      router.push({path:"/questionList/searched", query: {q: this.searchString}});
      this.searchString = ''
    }
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

#data {
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: 5px 0;
  background-color: white;
  border-radius: 0 0 5px 5px;
  border: 1px #ccc solid;
}
#data li {
  display: block;
  padding: 5px 15px;
  text-align: left;
}
/* label {
  width: 90%;
  border-radius: 18px;
  margin: 1%;
  background-image: url('<img src="https://img.icons8.com/ios/50/000000/external-search-logistic-delivery-kiranshastry-gradient-kiranshastry.png"/>');
} */
</style>