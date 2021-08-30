<template>
  <div class="article">
    <div class="articleTitle">{{ title }}</div>
    <div class="fullText" id="fullText"></div>
    <div class="attachment" id="attachments"></div>
  </div>
</template>

<script>
import csv from "@/assets/questions.csv";
import gloss from "@/assets/glossary.csv";

import { useRoute } from "vue-router";
import { Popover } from "bootstrap";

export default {
  data() {
    return {
      title: String,
      fulltext: [],
      attachment: String,
      elementSaved: Object,
      route: Object,
      glossary: [],
    };
  },
  props: ["id"],
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
  },
  mounted() {
    const route = useRoute();
    let element = csv[route.query.id];
    this.elementSaved = csv[route.query.id];
    this.title = element.question;
    // process text
    let copyAnswer = this.processText(element.answer);

    document
      .getElementById("fullText")
      .insertAdjacentHTML("afterbegin", copyAnswer);

    // enable popover
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new Popover(popoverTriggerEl, { container: "body", html: true });
    });
    // change style
    var glossaryEntries = [].slice.call(
      document.querySelectorAll('[id^="gloss-"]')
    );
    glossaryEntries.map(function (entry) {
      entry.setAttribute('style', 'color:blue;text-decoration:underline')
    });
    console.log(glossaryEntries)

    this.fulltext = element.answer.split("\n");
    this.attachment = "";

    if (element.attachment != "" && element.attachment != null) {
      let extension = element.attachment.split(".")[1];
      let attachs = element.attachment.split(";");

      for (let att of attachs) {
        if (extension == "gif") {
          let img = document.createElement("img");
          img.setAttribute("src", require("../assets/gifs/" + att));
          img.setAttribute("alt", "attach");
          img.setAttribute("style", "width:100%;height:100%");
          document.getElementById("attachments").appendChild(img);
        }
        if (extension == "jpg") {
          let img = document.createElement("img");
          img.setAttribute("src", require("../assets/jpgs/" + att));
          img.setAttribute("alt", "attach");
          img.setAttribute("style", "width:100%;height:100%");
          document.getElementById("attachments").appendChild(img);
        }
        if (extension == "pdf") {
          let pdfLink = document.createElement("a");
          pdfLink.href = require("../assets/pdfs/" + att);
          pdfLink.innerHTML = "file";
          document.getElementById("attachments").appendChild(pdfLink);
        }
      }
    }
  },
  methods: {
    processText(text) {
      let copyAnswer = text;
      copyAnswer = copyAnswer.replace("\n", "<br>");
      copyAnswer = copyAnswer.replace("$", "<br>");
      const exSiteStringReg = /\(http(\S+)/gi;
      let exSiteStrings = [];
      if (exSiteStringReg.test(text)) {
        // let stringBefore = text.split("(http")[0];
        // console.log(stringBefore.split(" ").slice(0, -1)[0]);
        exSiteStrings = text.match(exSiteStringReg);
      }
      exSiteStrings.forEach((el) => {
        let link = document.createElement("a");
        let href = el.substr(1);
        href = href.slice(0, -1);
        link.href = href;
        link.innerHTML = " Пример по ссылке. ";
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
        let question = this.allQAs.find((que) => {
          if (que.id == id) {
            return que;
          }
        }).q;
        let href = "/article?id=" + id;
        link.href = href;
        link.innerHTML = " См. также " + question;
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
        // let linkTermHTML = "";
        if (termObject.long.length > 0) {
          let href = "/term?id=" + termObject.id;
          linkTerm.href = href;
          link.innerHTML = " Подробнее.";
          // linkTermHTML = linkTerm.outerHTML;
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
        // console.log(linkTermHTML)
        // link.setAttribute("data-bs-template", termObject.short + linkTermHTML);
        // console.log(link)
        link.innerHTML = " (" + term + ") ";
        let linkHTML = link.outerHTML;
        copyAnswer = copyAnswer.replace(el, linkHTML);
      });

      return copyAnswer;
    },
  },
};
</script>

<style scoped>
.articleTitle {
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
  text-align: left;
}
p {
  text-align: left;
}
.article {
  padding: 5%;
}
img {
  width: 100%;
  height: 100%;
}
.fullText {
  text-align: left;
}
a[id^="gloss-"] {
  color: red;
  font-style: italic !important;
  font-weight: 100 !important;
}
</style>