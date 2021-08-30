<template>
  <div class="article">
    <div class="articleTitle">{{ title }}</div>
    <div class="fullText" id="fullText"></div>
    <div class="attachment" id="attachments"></div>
  </div>
</template>

<script>
// import csv from "@/assets/questions.csv";
// import gloss from "@/assets/glossary.csv";

import { useRoute } from "vue-router";
import { Popover } from "bootstrap";
import { processText, getGlossary, getAllQAs } from "../service/processCSV";
export default {
  data() {
    return {
      title: String,
      fulltext: [],
      attachment: String,
      route: Object,
      glossary: [],
      allQAs: [],
    };
  },
  props: ["id"],
  created() {
    this.glossary = getGlossary();
    this.allQAs = getAllQAs();
  },
  mounted() {
    // console.log('fff')
    const route = useRoute();
    let element = {};
    let copyAnswer = "";
    let fullText = "";
    if (route.params.category == "question") {
      // element = csv[route.query.id];
      element = this.allQAs.find((que) => {
        if (que.id == route.query.id) {
          return que;
        }
      });
      this.title = element.q;
      // process text
      fullText = element.a;
      copyAnswer = processText(fullText);
    }
    if (route.params.category == "term") {
      // element = this.glossary[route.query.id];
      element = this.glossary.find((ob) => {
        if (ob.id == route.query.id) {
          return ob;
        }
      });
      this.title = element.term;
      // process text
      fullText = element.short + "\n" + element.long;
      copyAnswer = processText(fullText);
    }

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
      entry.setAttribute("style", "color:blue;text-decoration:underline");
    });

    // this.fulltext = element.a.split("\n");
    this.fulltext = fullText.split("\n");
    // console.log(fullText)
    this.attachment = "";
    if (element.attachment != "" && element.attachment != null) {
      let attachs = element.attachment.split(";");
      for (let att of attachs) {
        // console.log(att.trim())
        att = att.trim()
        let extension = att.split(".")[1];
        if (extension == "gif") {
          // console.log(att);
          let img = document.createElement("img");
          img.setAttribute("src", require("../assets/gifs/" + att));
          img.setAttribute("alt", "attach");
          img.setAttribute("style", "width:75%;height:75%");
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
  methods: {},
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
.fullText {
  text-align: left;
}
a[id^="gloss-"] {
  color: red;
  font-style: italic !important;
  font-weight: 100 !important;
}
</style>