<template>
  <div class="about d-flex justify-content-center">
    <!-- <div class="logo-header">
      <img src="../assets/logo.png" alt="logo" />
    </div> -->
    <div class="articleBody">
      <p class="articleTitle">Список шаблонов</p>
      <div  v-for="doc in docs" :key="doc.name">
        <p class="contentHeader">
          <a :href="doc.path">{{doc.name}}</a>
        </p>
        <p class="content">
          {{doc.description}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Glossary",
  data() {
    return {
      docs: [
        {
            name: "Обращение об обеспечении гласности судебного заседания",
            filename: "Obespechenie_glasnosti.docx",
            path: require("../assets/docs/Obespechenie_glasnosti.docx"),
            description: ""
        },
        {
            name: "Запрос текста решения суда",
            filename: "Zapros_reschenia_suda.docx",
            path: require("../assets/docs/Zapros_reschenia_suda.docx"),
            description: ""
        },
        {
            name: "Жалоба в связи с удалением из судебного заседания",
            filename: "Zhaloba_na_udalenie.docx",
            path: require("../assets/docs/Zhaloba_na_udalenie.docx"),
            description: ""
        },
        {
            name: "Жалоба на нарушение прав слушателей (Незаконная проверка паспорта)",
            filename: "Zhaloba_nezakonnaya_proverka_pasporta.docx",
            path: require("../assets/docs/Zhaloba_nezakonnaya_proverka_pasporta.docx"),
            description: ""
        },
        {
            name: "Запрос на допуск в заседание в качестве слушателя",
            filename: "Prosba_na_dopusk.docx",
            path: require("../assets/docs/Prosba_na_dopusk.docx"),
            description: ""
        },
        {
            name: "Жалоба в связи с недопуском на заседание",
            filename: "Zhaloba_na_nedopusk.docx",
            path: require("../assets/docs/Zhaloba_na_nedopusk.docx"),
            description: ""
        },
        {
            name: "Обращение об обеспечении гласности судебного заседания",
            filename: "Zhaloba_na_zakrytoe_zasedanie.docx",
            path: require("../assets/docs/Zhaloba_na_zakrytoe_zasedanie.docx"),
            description: ""
        },
      ],
    };
  },
  //   mounted() {

  //   },
  methods: {},
};
</script>
<style scoped>
p {
  text-align: left;
}
.articleTitle {
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 2em;
  text-align: left;
  /* margin-bottom: 5vh; */
  text-decoration-style: solid !important;
}
.content {
  /* align-self:center */
  /* margin-left: 20% */
}
.contentHeader {
}
.articleBody {
  padding-right: 10%;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 10%;
  border: 1px solid #74c7c5;
  border-radius: 18px;
  background-color: white;
}
.about {
  padding: 5%;
  margin: 5%;
  margin-top: 0%;
  padding-top: 0%;
  background: white;
  z-index: 999;
  display: inline-block;
  height: auto;
  border-radius: 18px;
  width: 90%;
  background-color: #e9f7f9;
}
.bi {
  margin: 1% !important;
}
img {
  width: 10%;
  height: 10%;
}
.logo-header {
  display: flex;
  float: left;
}
</style>