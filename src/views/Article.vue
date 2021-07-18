<template>
  <div class="article">
    <div class="articleTitle">{{ title }}</div>
    <div class="fullText">
      <p class="paragraph" v-for="(par, i) in fulltext" :key="i">
        {{ par }}
      </p>
    </div>
    <div class="attachment" id="attachments" >
      <img :src="attachment" alt="rayonny sud territory" />
    </div>
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
      elementSaved: Object
    };
  },
  props: ["id"],
  created() {
    const route = useRoute();
    let element = csv[route.query.id];
    this.elementSaved = csv[route.query.id];
    // console.log(element)
    this.title = element.question;
    this.fulltext = element.answer.split("\n");
    this.attachment = "";
    
    if (element.attachment != "" && element.attachment != null) {
      // let extension = element.attachment.split(".")[1]
      // let attachs = element.attachment.split(";")

      // for (let att of attachs) {
      //     let img = document.createElement("img", 
      //     {src: require("../assets/" + att),
      //     alt: "attach"})
      //     document.getElementById("attachments").appendChild(img)
      // }
      this.attachment = require("../assets/" + element.attachment);
    }
  },
  mounted() {
    // this.attachment = "";
    
    // if (this.elementSaved.attachment != "" && this.elementSaved.attachment != null) {
    //   // let extension = element.attachment.split(".")[1]
    //   let attachs = this.elementSaved.attachment.split(";")

    //   for (let att of attachs) {
    //       let img = document.createElement("img", 
    //       {
    //         src: "../assets/" + att,
    //       alt: "attach"})
    //       document.getElementById("attachments").appendChild(img)
    //   }
    //   // this.attachment = require("../assets/" + element.attachment);
    // }
  }
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
</style>