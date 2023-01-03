<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasLeft"
    aria-labelledby="offcanvasLeftLabel"
  >
    <div class="offcanvas-header">
      <!-- <h5 id="offcanvasLeftLabel">Что это?</h5> -->
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <img class="logo" src="../assets/logo.png" alt="logo" />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <img class="icon" src="../assets/icons/about.svg" alt="about" />
          </div>
          <div class="col-8 ">
            <a href="/about">Что тут можно узнать</a>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img
              class="icon"
              src="../assets/icons/courtmon.svg"
              alt="court-monitoring"
            />
          </div>
          <div class="col-8">
            <a href="/what-is-court-monitoring">Судебный мониторинг</a>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img
              class="icon"
              src="../assets/icons/translate.svg"
              alt="glossary"
            />
          </div>
          <div class="col-8 ">
            <a href="/glossary">Глоссарий</a>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img
              class="icon"
              src="../assets/icons/file-earmark-text.svg"
              alt="glossary"
            />
          </div>
          <div class="col-8 ">
            <a href="/documents">Шаблоны документов</a>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <img
              class="icon"
              src="../assets/icons/contacts.svg"
              alt="contacts"
            />
          </div>
          <div class="col-8 ">
            <a href="/contacts">Как с нами связаться</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  height: -webkit-fill-available;
}

main {
  display: flex;
  flex-wrap: nowrap;
  /* height: 100vh; */
  /* height: -webkit-fill-available; */
  /* max-height: 100vh; */
  overflow-x: auto;
  overflow-y: hidden;
}
ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #56576a;
  /* margin-left: 5%; */
  font-size: calc(18px);
}
.icon {
  /* margin: 5%; */
  width: calc(2em + 1vw);
  height: calc(2em + 1vh);
}
.logo {
  width: 11em;
  height: 10em;
}
.row {
  padding: 1%
}
.col-8 {
  display: flex;
  align-self: center;
}
</style>