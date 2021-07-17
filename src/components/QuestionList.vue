<template>
  <div></div>
  <ul>
    <li class="btn btn-primary" v-for="el in QAs" :key="el">
      <div
        class="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapseExample' + el.id"
        aria-expanded="false"
        aria-controls="#collapseExample"
      >
        {{ el.q }}
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="collapse" :id="'collapseExample' + el.id">
        <div class="card card-body">
          <p style="color: black !important">{{ el.a }}</p>
        </div>
      </div>
    </li>
  </ul>

  <!-- <p>
    <a
      class="btn btn-primary"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Link with href
    </a>
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Button with data-bs-target
    </button>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="card card-body">
      Some placeholder content for the collapse component. This panel is hidden
      by default but revealed when the user activates the relevant trigger.
    </div>
  </div> -->
</template>


<script>
import csv from "@/assets/questions.csv";

export default {
  data() {  
    return {
      QAs: [],
    };
  },
  props: ['type'],
  created() {
    console.log(this.type)
    for (let i = 0; i < csv.length; i++) {
      let element = csv[i];
      let id = i;
      if (element.type == this.type) {
        this.QAs[i] = {id: id, q: element.question, a:element.answer};
      }
    }
  },
};
</script>
