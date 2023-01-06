<template>
<teleport to="head">
      <meta name="description" content="Рано или поздно мы сталкиваемся с судами. Помимо «обязательной» явки в суд, в качестве стороны процесса, вы также можете посетить суд в качестве «слушателя», и узнать каким образом происходит суд…" >
</teleport>
  <div class="container">
    <div class="row-2 d-flex justify-content-center">
      <div class="col-10">
        <div class="card">
          <div class="card-body">
            <p class="card-text">
              <strong>Всё получится!</strong>
              Мы подскажем ответы на всё, что вы хотите знать
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row-8 d-flex justify-content-center">
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/icons/generalqBig.png"
            alt="ttt"
          />
          <div
            class="
              d-flex
              justify-content-center
              align-items-end
              card-img-overlay
            "
          >
            <a
              href="/questionList/generalquestions"
              class="card-link stretched-link"
              >Общие вопросы</a
            >
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/icons/buildingentranceBig.png"
            alt="ttt"
          />
          <div
            class="
              d-flex
              justify-content-center
              align-items-end
              card-img-overlay
            "
          >
            <a href="/questionList/entrance" class="card-link stretched-link"
              >Вход в суд</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row-8 d-flex justify-content-center">
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/icons/roomentranceBig.png"
            alt="ttt"
          />
          <div
            class="
              d-flex
              justify-content-center
              align-items-end
              card-img-overlay
            "
          >
            <a href="/questionList/before" class="card-link stretched-link"
              >Вход в зал</a
            >
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/icons/incourtBig.png"
            alt="ttt"
          />
          <div
            class="
              d-flex
              justify-content-center
              align-items-end
              card-img-overlay
            "
          >
            <a href="/questionList/incourt" class="card-link stretched-link"
              >В зале суда</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row-2 d-flex justify-content-center">
      <div class="col-10">
        <div class="card">
          <div class="article" id="fullText"><pre>{{ description }}</pre></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import txt from "../assets/main_menu.txt";
export default {
  data() {
    return {
      description: "",
    };
  },
  mounted() {
    this.description = txt;
    document.title = "Внутри суда";
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Внутри суда";
    }
  }
};
</script>

<style scoped>
.container {
  align-items: center;
}
.row {
  background: #e9f7f9;
  height: 100%;
}
.card {
  border-radius: 18px;
  margin: 2%;
}

a.custom-card,
a.custom-card:hover {
  color: inherit;
}
.card-link {
  color: #74c7c5;
  font-size: calc(0.3em + 2vw);
  /* font-size: 1em; */
  /* font-size: 200%; */
  text-decoration: none;
}
.card-text {
  font-size: 1rem;
}
.card-img-overlay {
  /* background: #ffffff; */
  border-radius: 18px;
  height: calc(90% + 3vh);
}
.article {
  margin: 4%;
  margin-top: 1%;
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
  margin: 3%;
}
pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
  text-align: left;

}
/* .card-img {} */
</style>




