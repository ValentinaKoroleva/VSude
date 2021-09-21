<template>
  <div class="article">
    <div class="articleTitle">{{ title }}</div>
    <div class="fullText" id="fullText"></div>
    <div class="attachment d-flex justify-content-start" id="attachments"></div>
    <canvas></canvas>
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

    this.addAttachment(element);
  },
  methods: {
    pauseGif(id) {
      console.log(id);
      // let img = document.getElementById(id)
      // let canvas = document.querySelector("canvas");
      // document.getElementById("attachments").appendChild(canvas);
      // var ctx = canvas.getContext("2d");
      // ctx.drawImage(img, 0, 0, 500, 500);
    },
    addAttachment(element) {
      this.attachment = "";
      let vm = this;
      if (element.attachment != "" && element.attachment != null) {
        let attachs = element.attachment.split(";");
        for (let att of attachs) {
          att = att.trim();
          let extension = att.split(".")[1];
          let elementDiv = document.getElementById("attachments");

          if (extension == "gif") {
            let img = document.createElement("img");
            img.setAttribute("id", att);
            img.setAttribute("src", require("../assets/gifs/" + att));
            img.setAttribute("alt", "attach");
            img.setAttribute(
              "style",
              "width:50%;height:50%;animation:none;border-radius:18px"
            );
            img.setAttribute("class", "d-flex justify-content-end");

            img.addEventListener("click", function () {
              vm.pauseGif(att);
            });

            let zoomGroup = document.createElement("div");
            zoomGroup.setAttribute(
              "class",
              "btn-group-vertical btn-group-sm align-self-start"
            );

            let zoomButton = document.createElement("button");
            zoomButton.setAttribute("type", "button");
            zoomButton.setAttribute(
              "class",
              "btn btn-outline-dark btn-sm d-flex flex-grow-0"
            );
            zoomButton.innerHTML = "<i class='bi bi-zoom-in'></i>";

            zoomButton.addEventListener("click", function () {
              img.style.width = parseInt(img.style.width) * 1.1 + "%";
            });
            let unZoomButton = document.createElement("button");
            unZoomButton.setAttribute("type", "button");
            unZoomButton.setAttribute(
              "class",
              "btn btn-outline-dark btn-sm d-flex flex-grow-0"
            );
            unZoomButton.innerHTML = "<i class='bi bi-zoom-out'></i>";
            unZoomButton.addEventListener("click", function () {
              img.style.width = parseInt(img.style.width) / 1.1 + "%";
            });
            zoomGroup.appendChild(zoomButton);
            zoomGroup.appendChild(unZoomButton);
            elementDiv.appendChild(zoomGroup);
            elementDiv.appendChild(img);
          }
          if (extension == "jpg") {
            let img = document.createElement("img");
            img.setAttribute("src", require("../assets/jpgs/" + att));
            img.setAttribute("alt", "attach");
            img.setAttribute("style", "width:100%;height:100%");
            elementDiv.appendChild(img);
          }
          if (extension == "pdf") {
            let pdfLink = document.createElement("a");
            pdfLink.href = require("../assets/pdfs/" + att);
            pdfLink.innerHTML = "file";
            elementDiv.appendChild(pdfLink);
          }
          if (extension == "docx") {
            let pdfLink = document.createElement("a");
            pdfLink.href = require("../assets/docs/" + att);
            pdfLink.innerHTML = "file";
            elementDiv.appendChild(pdfLink);
          }
        }
      }
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
  background: white;
  z-index: 999;
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
.img-test {
  width: 300px;
  height: 300px;
  background-image: url("../assets/gifs/Render_rayonn_territ_podsudnost.gif");
  background-repeat: no-repeat;
}
* {
  /*CSS animations*/
  -webkit-animation: none !important;
  -moz-animation: none !important;
  -o-animation: none !important;
  -ms-animation: none !important;
  animation: none !important;
  /*CSS transitions*/
  transition-property: none !important;
  /*CSS transforms*/
  transform: none !important;
  /*CSS animations*/
  animation: initial !important;
}
</style>