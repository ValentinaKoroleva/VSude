<template>
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
            src="../assets/generalqBig.png"
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
            <a href="/generalquestions" class="card-link stretched-link"
              >Общие вопросы</a
            >
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/buildingentranceBig.png"
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
            <a href="/entrance" class="card-link stretched-link">Вход в суд</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row-8 d-flex justify-content-center">
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/roomentranceBig.png"
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
            <a href="/before" class="card-link stretched-link">Вход в зал</a>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="card">
          <img
            class="card-img w-100 h-auto"
            src="../assets/incourtBig.png"
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
            <a href="/incourt" class="card-link stretched-link">В зале суда</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
.card-body {
}

a.custom-card,
a.custom-card:hover {
  color: inherit;
}
.card-link {
  color: #74c7c5;
  font-size: 1.1rem;
  text-decoration: none;
}
.card-text {
    font-size: 1.15rem;

}
.card-img-overlay {
  /* background: #ffffff; */
  border-radius: 18px;
}
/* .card-img {} */
</style>