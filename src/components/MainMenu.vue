<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
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
    <div class="row">
      <div class="col-6">
        <div class="card">
          <img
            class="card-img w-50 h-50"
            src="../assets/generalqBig.png"
            alt="ttt"
          />
          <div class="card-body">
            <a href="/generalquestions" class="btn btn-primary stretched-link"
              >Общие вопросы</a
            >
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img
            class="card-img w-50 h-50"
            src="../assets/buildingentranceBig.png"
            alt="ttt"
          />
          <div class="card-body">
            <a href="/entrance" class="btn btn-primary stretched-link">Вход в суд</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <img
            class="card-img w-50 h-50"
            src="../assets/roomentranceBig.png"
            alt="ttt"
          />
          <div class="card-body">
            <a href="/before" class="btn btn-primary stretched-link">Вход в зал</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <img
            class="card-img w-50 h-50"
            src="../assets/incourtBig.png"
            alt="ttt"
          />
          <div class="card-body">
            <a href="/incourt" class="btn btn-primary stretched-link">В зале суда</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  background: #e9f7f9;
  height: 100%;
}
.card-body {
  /* position: absolute;
width: 156px;
height: 156px;
left: 24px;
top: 198px; */

  background: #ffffff;
  border-radius: 18px;
}

a.custom-card,
a.custom-card:hover {
  color: inherit;
}
</style>