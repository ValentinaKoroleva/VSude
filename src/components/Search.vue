<template>
  <nav class="navbar">
    <div class="container-fluid d-flex flex-nowrap">
      <!-- <div class="container"> -->
      <button
        class="btn d-flex justify-content-start align-self-start"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLeft"
        aria-controls="offcanvasLeft"
      >
        <i class="bi bi-list"></i>
      </button>
      <form class="d-flex flex-column">
        <div class="d-flex flex-row d-flex justify-content-start">
          <!-- <router-link to="/search"><i class="bi bi-search"></i></router-link> -->
          <input
            class="form-control me-2 custom-search"
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
              <a class="question" :href="'/article/question?id=' + item.id">{{
                item.q
              }}</a>
            </li>
          </ul>
        </div>
      </form>
      <a
        tabindex="0"
        class="btn d-flex justify-content-start align-self-start"
        role="button"
        data-bs-toggle="popover"
        data-bs-trigger="focus"
        :data-bs-content="tagTip"
        ><i class="bi bi-lightbulb"></i
      ></a>
    </div>
  </nav>
</template>

<script>
import csv from "@/assets/questions.csv";
import router from "../router";
import { Popover } from "bootstrap";

export default {
  data() {
    return {
      searchString: "",
      QAs: [],
      messageResult: "Ничего не найдено",
      list: [],
      tagTip: 'Info'
    };
  },
  mounted() {
    let listener = () => {
      this.searchString = "";
    };
    document.addEventListener("click", listener);
    document.querySelector("input").removeEventListener("click", listener);
    for (let i = 0; i < csv.length; i++) {
      let element = csv[i];
      this.list[i] = { id: element.id, q: element.question, a: element.answer };
    }
    // enable popover
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl, {
        container: "body",
        html: true,
      });
    });
    this.tagTip =
      "Для быстрого доступа к ресурсу зайдите в меню браузера и нажмите 'Добавить на главный экран'/'Добавить ярлык'/'Установить приложение'";
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
      router.push("/article/question?id=" + id);
    },
    search() {
      // router.push("/questionList/searched");
      router.push({
        path: "/questionList/searched",
        query: { q: this.searchString },
      });
      this.searchString = "";
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}
form {
  width: 100%;
  border-radius: 18px;
  margin: 1vh;
}
ul {
  width: 90%;
  border-radius: 18px !important;
  padding: 2vh !important;
  position: absolute;
  z-index: 999;
}
.question {
  text-decoration: none;
}
.custom-search {
  /* color: #b1b1b7; */
  /* background: #ece9e9; */
  /* border: #474747; */
  width: 98%;
  border-radius: 18px;
}
/* .custom-search:hover {
  color: #b1b1b7;
  background: #ece9e9;
  border: #686767;
} */

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
.bi {
  font-size: 2em;
}
.btn-custom {
  width: 10%;
  background-color:#84C3BE !important;
  color: white !important;
  margin: 1%
}
.btn-custom:focus {
  box-shadow: none!important;
}
/* label {
  width: 90%;
  border-radius: 18px;
  margin: 1%;
  background-image: url('<img src="https://img.icons8.com/ios/50/000000/external-search-logistic-delivery-kiranshastry-gradient-kiranshastry.png"/>');
} */
</style>