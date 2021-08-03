<template>
  <div class="article">
    <div class="articleTitle">{{ title }}</div>
    <div class="fullText" id="fullText">
      <!-- <p class="paragraph" v-for="(par, i) in fulltext" :key="i">
        {{ par }}
      </p> -->
    </div>
    <div class="attachment" id="attachments"></div>
    <!-- <a :href=link>test</a> -->
  </div>
</template>

<script>
import csv from "@/assets/questions.csv";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      title: String,
      fulltext: [],
      attachment: String,
      elementSaved: Object,
      route: Object,
      // link: require("../assets/pdfs/test.pdf")
    };
  },
  props: ["id"],
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
          pdfLink.href = require("../assets/pdfs/" + att)
          pdfLink.innerHTML = "file"
          document.getElementById("attachments").appendChild(pdfLink);
        }
      }
    }
  },
  methods: {
    processText(text) {
      let copyAnswer = text;
      copyAnswer = copyAnswer.replace("\n", "<br>");

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
        link.innerHTML = "ссылка";
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
        link.innerHTML = "ссылка";
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
</style>