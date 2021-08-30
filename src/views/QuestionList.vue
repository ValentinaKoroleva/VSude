<template>
  <p v-if="QAs.length == 0">Нет вопросов, соответствующих запросу</p>

  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="el in QAs" :key="el">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseOne' + el.id"
          aria-expanded="false"
          v-bind:aria-controls="'collapseOne' + el.id"
        >
          {{ el.q }}
        </button>
      </h2>
      <div
        :id="'collapseOne' + el.id"
        class="accordion-collapse collapse hide"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="answer" v-html="el.a"></div>
          <p>
            <router-link
              :to="'/article/question?id=' + el.id"
              v-if="moreOn[el.id]"
              >Подробнее</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="bottomLine"></div>
</template>


<script>
import csv from "@/assets/questions.csv";
import { Popover } from "bootstrap";
import { processText, getGlossary, getAllQAs } from "../service/processCSV";

export default {
  name: "QuestionList",
  data() {
    return {
      allQAs: [],
      QAs: [],
      moreOn: {},
      inconsistency: {
        general: "generalquestions",
        buildingentrance: "entrance",
        roomentrance: "before",
        incourt: "incourt",
      },
      glossary: [],
    };
  },
  created() {
    this.glossary = getGlossary();
    this.allQAs = getAllQAs();
  },
  mounted() {
    // console.log(this.$route.query.q);
    let query = "";
    if (this.$route.query.q != undefined) {
      query = this.$route.query.q;
    }
    this.filterQuestions(this.$route.params.category, query);
    this.$watch(
      () => this.$route,
      (r) => {
        if (r.query.q != undefined) {
          query = r.query.q;
        }
        this.filterQuestions(r.params.category, query);
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
    // change style
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
          if (
            element.answer.length > answer.length ||
            element.attachment != ""
          ) {
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
            });
          }
        });
      } else {
        csv.forEach((element) => {
          let answer = element.answer.split("$")[0];
          answer = processText(answer);
          if (
            element.answer.length > answer.length ||
            element.attachment != null
          ) {
            this.moreOn[element.id] = true;
          } else {
            this.moreOn[element.id] = false;
          }
          if (this.inconsistency[element.type] == category) {
            this.QAs.push({ id: element.id, q: element.question, a: answer });
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
  background: #e9f7f9;
}
.accordion-header {
  margin: 1%;
}
.accordion-button {
  background: #ffffff;
}
.headingOne {
  background: #ffffff;
  border-radius: 18px;
}
p {
  text-align: left;
}
.answer {
  text-align: left;
}
</style>