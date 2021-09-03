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
      <ul class="sideMenuList">
        <li>
          <img class="icon" src="../assets/icons/about.svg" alt="about" /><a
            href="/about"
            >Что тут можно узнать</a
          >
        </li>
        <li>
          <img
            class="icon"
            src="../assets/icons/courtmon.svg"
            alt="court-monitoring"
          /><a href="/what-is-court-monitoring">Судебный мониторинг</a>
        </li>
        <li>
          <i class="bi bi-file-word"></i><a href="/glossary">Глоссарий</a>
        </li>
        <li>
          <img
            class="icon"
            src="../assets/icons/contacts.svg"
            alt="contacts"
          /><a href="/contacts">Как с нами связаться</a>
        </li>
      </ul>
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
.bi {
  font-size: 2rem;
  vertical-align: -0.125em;
  pointer-events: none;
  fill: black;
  min-width: 10em !important;
  min-height: 10em !important;
  margin: 1%;
  width: 20em;
}
.icon {
  margin: 1%;
}
.logo {
  width: 25%;
  height: 25%;
}
.dropdown-toggle {
  outline: 0;
}

.nav-link {
  border-radius: 0;
}

.sideMenuList {
  text-align: left;
}
</style>