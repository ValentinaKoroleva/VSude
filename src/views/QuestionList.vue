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
          <div v-html="el.a"></div>
          <p>
            <router-link :to="'/article?id=' + el.id" v-if="moreOn[el.id]"
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
import gloss from "@/assets/glossary.csv";
import { Popover } from "bootstrap";

export default {
  name: "QuestionList",
  data() {
    return {
      QAs: [],
      moreOn: {},
      inconsistency: {
        general: "generalquestions",
        entrance: "buildingentrance",
        before: "roomentrance",
        incourt: "incourt",
      },
      glossary: [],
    };
  },
  created() {
    for (let i = 0; i < gloss.length; i++) {
      let element = gloss[i];
      this.glossary[i] = {
        id: element.id,
        term: element.term,
        short: element.short,
        long: element.long,
      };
    }
    // console.log(this.glossary)
  },
  mounted() {
    console.log(this.$route.query.q);
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
  },
  methods: {
    filterQuestions(category, query) {
      this.QAs = [];
      if (category == "searched") {
        csv.forEach((element) => {
          let answer = element.answer.split("$")[0];
          if (element.answer.length > answer.length) {
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
            });
          }
        });
      } else {
        csv.forEach((element) => {
          let answer = element.answer.split("$")[0];
          answer = this.processText(answer);
          if (element.answer.length > answer.length) {
            this.moreOn[element.id] = true;
          } else {
            this.moreOn[element.id] = false;
          }
          if (element.type == this.inconsistency[category]) {
            this.QAs.push({ id: element.id, q: element.question, a: answer });
          }
        });
      }
    },
    processText(text) {
      let copyAnswer = text;
      copyAnswer = copyAnswer.replace("\n", "<br>");
      copyAnswer = copyAnswer.replace("$", "<br>");

      const exSiteStringReg = /\(http(\S+)/gi;
      let exSiteStrings = [];
      if (exSiteStringReg.test(text)) {
        exSiteStrings = text.match(exSiteStringReg);
      }
      exSiteStrings.forEach((el) => {
        let link = document.createElement("a");
        let href = el.substr(1);
        href = href.slice(0, -1);
        link.href = href;
        link.innerHTML = "См.";
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
      });

      const inSiteStringReg = /\(question_\d+\)/gi;
      let inSiteStrings = [];
      if (inSiteStringReg.test(text)) {
        inSiteStrings = text.match(inSiteStringReg);
      }
      inSiteStrings.forEach((el) => {
        let link = document.createElement("a");
        let id = el.split("_")[1];
        id = id.slice(0, -1);
        let href = "/article?id=" + id;
        link.href = href;
        link.innerHTML = "Вопрос " + id;
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
      });

      const glossaryReg = /\(glossary_\d+\)/gi;
      let glossaryStrings = [];
      if (glossaryReg.test(text)) {
        glossaryStrings = text.match(glossaryReg);
      }
      glossaryStrings.forEach((el) => {
        let id = el.split("_")[1];
        id = id.slice(0, -1);
        let termObject = this.glossary.find((ob) => {
          if (ob.id == id) {
            return ob.term;
          }
        });
        let term = termObject.term;
        let link = document.createElement("a");
        let linkTerm = document.createElement("a");
        if (termObject.long != undefined) {
          let href = "/term?id=" + termObject.id;
          linkTerm.href = href;
          link.innerHTML = "Подробнее";
        }
        link.setAttribute("tabindex", 0);
        link.setAttribute("id", "gloss-" + id);
        link.setAttribute("data-bs-toggle", "popover");
        link.setAttribute("data-bs-trigger", "click");
        link.title = term;
        let pop = document.createElement("div");
        pop.setAttribute("class", "popover-body");
        let popText = document.createElement("p");
        popText.innerHTML = termObject.short;
        pop.append(popText);
        pop.append(linkTerm);
        link.setAttribute("data-bs-content", pop.outerHTML);
        link.innerHTML = "(См. " + term + ")";
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
      });

      return copyAnswer;
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
</style>