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
import {
  processText,
  getGlossary,
  getAllQAs,
  getAttachments,
} from "../service/processCSV";
export default {
  data() {
    return {
      title: String,
      fulltext: [],
      attachment: String,
      route: Object,
      glossary: [],
      allQAs: [],
      question2attachment: [],
    };
  },
  props: ["id"],
  created() {
    this.glossary = getGlossary();
    this.allQAs = getAllQAs();
    this.question2attachment = getAttachments();
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
      let attachs = this.question2attachment.filter((ob) => {
        if (ob.qid == element.id) {
          return ob;
        }
      });
      for (let ob of attachs) {
        let att = ob.attachment.trim();
        let extension = att.split(".")[1];
        let elementDiv = document.getElementById("attachments");

        if (extension == "gif") {
          let { zoomGroup, img } = this.addGIF(att);
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
          pdfLink.setAttribute("class", "docx");
          pdfLink.href = require("../assets/pdfs/" + att);
          pdfLink.innerHTML = ob.attachment;
          elementDiv.appendChild(pdfLink);
        }
        if (extension == "docx") {
          let pdfLink = document.createElement("a");
          pdfLink.setAttribute('style', 'color: #74C7C5;')
          pdfLink.href = require("../assets/docs/" + att);
          pdfLink.innerHTML = ob.attachment;
          let divDoc = document.createElement("div")
          divDoc.appendChild(pdfLink)
          divDoc.setAttribute("class", "docx");
          divDoc.setAttribute("style", "padding: 2%;border:1px solid #74C7C5; border-radius:18px")
          elementDiv.appendChild(divDoc);
        }
      }
    },
    addGIF(att) {
      let vm = this;

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
      return { zoomGroup, img };
    },

  },
};
</script>

<style scoped>
.articleTitle {
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 2em;
  text-align: left;
  /* margin-bottom: 5vh; */
  text-decoration-style: solid !important;
}
p {
  text-align: left;
}
.article {
  margin: 4%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  background: white;
  z-index: 999;
  display: inline-block;
  height: auto;
  border-radius: 18px;
}
.fullText {
  text-align: left;
  margin: 3%;
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