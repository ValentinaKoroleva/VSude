<template>
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
          <p>{{ el.a }}
            <router-link :to="'/article?id=' + el.id" v-if="moreOn"
            >Подробнее</router-link
          >
          </p>
          
          <!-- <a :href="'/article?id='+el.id" v-if="moreOn"> Подробнее </a> -->
        </div>
      </div>
    </div>
  </div>

  <div class="bottomLine"></div>
</template>


<script>
import csv from "@/assets/questions.csv";

export default {
  data() {
    return {
      QAs: [],
      moreOn: false,
    };
  },
  props: ["type"],
  created() {
    // console.log(csv)
    let k = 0;
    for (let i = 0; i < csv.length; i++) {
      let element = csv[i];
      // console.log(element.answer)
      let answer = element.answer.split("$")[0];
      if (element.answer.length > answer.length) {
        this.moreOn = true;
      }
      // console.log(element.answer.split("\n"))
      if (element.type == this.type) {
        this.QAs[k] = { id: i, q: element.question, a: answer };
        k++;
      }
    }
    // console.log(this.QAs.length)
  },
  methods: {},
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