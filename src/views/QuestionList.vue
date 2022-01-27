<template>
  <teleport to="head">
    <meta name="description" :content="description" />
  </teleport>
  <p v-if="QAs.length == 0">Нет вопросов, соответствующих запросу</p>
  <h1>{{ title }}</h1>

  <!-- 
  <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    <h1>{{ title }}</h1>
  </button>

<div>
  <div class="collapse" id="collapseWidthExample">
    <p class="article" style="white-space:pre-wrap;">
      {{ categoryInfo }}
    </p>
  </div>
</div> -->

  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="el in QAs" :key="el">
      <h2 class="accordion-header" :id="'heading-' + el.id">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse-' + el.id"
          aria-expanded="false"
          v-bind:aria-controls="'collapse-' + el.id"
        >
          {{ el.q }}
        </button>
      </h2>
      <div
        :id="'collapse-' + el.id"
        class="accordion-collapse collapse hide"
        :aria-labelledby="'heading-' + el.id"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <!-- <div class="answer" v-html="el.a"></div>
          <p class="moreOn">
            <router-link
              class="btn btn-outline-primary"
              role="button"
              :to="'/article/question?id=' + el.id"
              v-if="moreOn[el.id]"
              >Подробнее</router-link
            >
          </p> -->
          <div class="card">
            <div class="row">
              <div class="col-3 align-self-center">
                <img :src="el.image" alt="visual" />
              </div>
              <div class="col">
                <div class="card-body">
                  <p class="card-text answer" v-html="el.a"></p>
                  <p class="moreOn">
                    <router-link
                      class="btn btn-outline-primary"
                      role="button"
                      :to="'/article/question?id=' + el.id"
                      v-if="moreOn[el.id]"
                      >Подробнее</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="article" style="white-space: pre-wrap">{{ categoryInfo }}</p>

  <div class="bottomLine"></div>
</template>


<script>
import csv from "@/assets/questions.csv";
import categoryInfo from "../assets/categoryInfos.json";
import { Popover } from "bootstrap";
import {
  processText,
  getGlossary,
  getAllQAs,
  getAttachments,
  clean_text,
} from "../service/processCSV";

export default {
  name: "QuestionList",
  data() {
    return {
      allQAs: [],
      QAs: [],
      q2attachment: [],
      moreOn: {},
      inconsistency: {
        general: "generalquestions",
        buildingentrance: "entrance",
        roomentrance: "before",
        incourt: "incourt",
      },
      russian_titles: {
        generalquestions: "Общие вопросы",
        entrance: "Вход в суд",
        before: "Вход в зал",
        incourt: "В зале суда",
        searched: "Результаты поиска",
      },
      glossary: [],
      title: "",
      categoryInfo: "",
      description: "",
    };
  },
  created() {
    this.glossary = getGlossary();
    this.allQAs = getAllQAs();
    this.question2attachment = getAttachments();
  },
  mounted() {
    let query = "";
    if (this.$route.query.q != undefined) {
      query = this.$route.query.q;
    }
    if (this.russian_titles[this.$route.params.category] == undefined) {
      document.title = "Внутри суда";
    } else {
      document.title =
        this.russian_titles[this.$route.params.category] + " - Внутри суда" ||
        "Внутри суда";
    }
    if (this.$route.params.category != undefined) {
      this.filterQuestions(this.$route.params.category, query);
      let description =
        clean_text(this.QAs[0].q + this.QAs[0].a).substr(0, 157) + "...";
      this.description = description;
    }

    this.$watch(
      () => this.$route,
      (r) => {
        if (r.query.q != undefined) {
          query = r.query.q;
        }
        if (r.params.category != undefined) {
          document.title =
            this.russian_titles[r.params.category] + " - Внутри суда" ||
            "Внутри суда";
          this.filterQuestions(r.params.category, query);
        }
      }
    );
  },
  updated() {
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
    var glossaryEntries = [].slice.call(
      document.querySelectorAll('[id^="gloss-"]')
    );
    glossaryEntries.map(function (entry) {
      entry.setAttribute("style", "color:blue;text-decoration:underline");
    });
  },
  methods: {
    filterQuestions(category, query) {
      this.QAs = [];
      if (category == "searched") {
        csv.forEach((element) => {
          let answer = element.answer.split("$")[0];
          answer = processText(answer);
          let attachs = this.question2attachment.filter((ob) => {
            if (ob.qid == element.id) {
              return ob;
            }
          });
          if (element.answer.length > answer.length || attachs.length > 0) {
            this.moreOn[element.id] = true;
          } else {
            this.moreOn[element.id] = false;
          }
          let reg = new RegExp(query, "ig");
          if (reg.test(element.question) || reg.test(element.answer)) {
            this.QAs.push({
              id: element.id,
              q: element.question,
              a: answer,
              attachment: element.attachment,
              image: require("../assets/images/" + element.id + ".svg"),
            });
          }
        });
        this.title = "Результаты поиска";
        document.title = "Результаты поиска - Внутри суда";
      } else {
        csv.forEach((element) => {
          let answer = element.answer.split("$")[0];
          answer = processText(answer);
          let attachs = this.question2attachment.filter((ob) => {
            if (ob.qid == element.id) {
              return ob;
            }
          });

          if (element.answer.length > answer.length || attachs.length > 0) {
            this.moreOn[element.id] = true;
          } else {
            this.moreOn[element.id] = false;
          }
          if (this.inconsistency[element.type] == category) {
            this.title = this.russian_titles[category];
            let textEdited = categoryInfo[category].replace("/n", "<br>");
            this.categoryInfo = textEdited;
            this.QAs.push({
              id: element.id,
              q: element.question,
              a: answer,
              image: require("../assets/images/" + element.id + ".svg"),
            });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
.bottomLine {
  height: 10%;
}
.accordion-item {
  background: white;
  width: 98%;
  margin: 2vh;
  border: none;
  border-radius: 18px !important;
}
.accordion-header {
  margin: 2vh;
}
.accordion-button {
  background: #ffffff;
  /* border-radius: 18px !important; */
}
.accordion-body {
  background: #ffffff;
  /* margin: 2vh; */

  /* border-radius: 18px !important; */
}
.headingOne {
  background: #ffffff;
  border-radius: 18px;
}
p {
  text-align: left;
}
.moreOn {
  text-align: right;
}
.answer {
  text-align: left;
}
.card {
  border: none;
}
.article {
  margin-left: 3em;
  margin-right: 3em;
  /* margin-top: 1%; */
  /* padding-left: 5%; */
  /* padding-right: 5%; */
  /*padding-top: 3%; */
  /*padding-bottom: 3%; */
  /* background: white; */
  /* z-index: 999; */
  /* display: inline-block; */
  /* height: auto; */
  /* border-radius: 18px; */
  text-align: left;
}
img {
  width: calc(5em + 10vw);
  height: calc(5em + 10vw);
  padding: 5%;
}
</style>