<template>
    <div class="container">
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLeft"
          aria-controls="offcanvasLeft"
        >
          <i class="bi bi-list"></i>
        </button>
        <div class="container search-data">
          <div class="row">
        <form class="">
          <input
            class="form-control custom-search"
            type="text"
            placeholder="Поиск"
            aria-label="Поиск"
            v-model="searchString"
            list="data"
            v-on:keydown.enter.prevent="search()"
            v-on:keyup.enter.prevent
            v-on:click.prevent
          />
        </form>
      </div>
        <div class="row answers">
        <ul id="data" v-if="searchInProgress.length > 0">
          <li v-for="item in searchInProgress" :key="item.id" :value="item.q">
            <a class="question" :href="'/article/question?id=' + item.id">{{
              item.q
            }}</a>
          </li>
        </ul>
      </div>
    </div>
      <a
        tabindex="0"
        class="btn"
        role="button"
        data-bs-toggle="popover"
        data-bs-trigger="focus"
        :data-bs-content="tagTip"
        ><i class="bi bi-lightbulb"></i
      ></a>
    </div>
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
      tagTip: "Введите интересующий вас вопрос",
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
  display: flex;
  flex-direction: row;
}
.search-data {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;

}
.answers ul {
  width: calc(70vw + 3em);
}
form {
  width: 100%;
  border-radius: 18px;
  padding: 0
}
ul {
  padding:0;
  border-radius: 18px !important;
  /* padding: 2vh !important; */
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
  width: 100%;
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
  background-color: #84c3be !important;
  color: white !important;
  margin: 1%;
}
.btn-custom:focus {
  box-shadow: none !important;
}
/* label {
  width: 90%;
  border-radius: 18px;
  margin: 1%;
  background-image: url('<img src="https://img.icons8.com/ios/50/000000/external-search-logistic-delivery-kiranshastry-gradient-kiranshastry.png"/>');
} */
</style>