<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="el in gloss" :key="el">
      <h2 class="accordion-header" :id="'heading-' + el.id">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseOne' + el.id"
          aria-expanded="false"
          v-bind:aria-controls="'collapseOne' + el.id"
        >
          {{ el.term }}
        </button>
      </h2>
      <div
        :id="'collapseOne' + el.id"
        class="accordion-collapse collapse hide"
        :aria-labelledby="'heading-' + el.id" 
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            {{ el.short }}
          </p>
          <p>
            {{ el.long }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="bottomLine"></div>
</template>


<script>
import csv from "@/assets/glossary.csv";

export default {
  name: "Glossary",
  data() {
    return {
      gloss: [],
    };
  },
  created() {
    csv.forEach((element) => {
      this.gloss.push({
        id: element.id,
        term: element.term,
        short: element.short,
        long: element.long,
      });
    });
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
  background: white;
  width: 90%;
  margin: 2vh;
  border: none;
  border-radius: 18px !important;
}
.accordion-header {
  margin: 2vh;
}
.accordion-button {
  background: #ffffff;
}
.accordion-body {
  background: #ffffff;
  margin: 2vh;
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