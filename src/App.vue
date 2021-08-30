<template>
  <search />
  <side-menu v-if="true" />
  <nav class="navbar fixed-bottom navbar-expand navbar-light bg-light">
    <div class="container-fluid d-flex flex-nowrap">
      <ul class="navbar-nav d-flex flex-fill">
        <li class="nav-item flex-fill">
          <router-link
            class="nav-link"
            aria-current="page"
            to="/"
          >
            <img src="./assets/home.png" alt="home" />
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link
            id="general"
            class="nav-link"
            to="/questionList/generalquestions"
          >
            <figure class="figure">
              <img
                src="./assets/generalq.png"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <!-- <img src= "./assets/generalq-active.png" alt="home"/> -->
              <figcaption>Общие вопросы</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link
            class="nav-link"
            to="/questionList/entrance"
          >
            <figure class="figure">
              <img
                src="./assets/buildingentrance.png"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <figcaption>Вход в суд</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link
            class="nav-link"
            to="/questionList/before"
          >
            <figure class="figure">
              <img
                src="./assets/roomentrance.png"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <figcaption>Вход в зал</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link
            class="nav-link"
            to="/questionList/incourt"
          >
            <figure class="figure">
              <img
                src="./assets/incourt.png"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <figcaption>В зале суда</figcaption>
            </figure>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
  <router-view />
  <div class="bottomLine"></div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import Search from "./components/Search.vue";

export default {
  // name:'App',
  components: {
    Search,
    SideMenu,
  },
};
</script>


<style>
html,
body {
  margin: 0;
  height: 100%;
  background: #e9f7f9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e9f7f9;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 2em;
  height: 2em;
}
figcaption {
  font-size: 0.75rem;
}
#general {
  /* background-image: url("./assets/generalq.png"); */
}
.bottomLine {
  height: 20%;
}
/* #BABABE */
/* hsl(240, 3%, 74%) */
/* 74C7C5 */
/* hsl(179, 43%, 62%) */
</style>
