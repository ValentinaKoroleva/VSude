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
      <ul class="sideMenuList">
        <li>
          <a href="/about">Что это?</a>
        </li>
        <li>
          <a href="/what-is-court-monitoring">О судебном мониторинге </a>
        </li>
        <li>
          <a href="/glossary">Глоссарий </a>
        </li>
        <li>
          <a href="/contacts">О нас</a>
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

.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
  min-width: 10em !important;
  min-height: 10em !important;
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