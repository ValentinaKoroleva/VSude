<template>
  <search />
  <side-menu v-if="true" />
  <nav class="navbar fixed-bottom navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">
            <img src= "./assets/home.png" alt="home"/>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/questionList/generalquestions"
            >
            <img src= "./assets/generalq.png" alt="home"/>
            Общие вопросы
          </router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/questionList/entrance">
            <img src= "./assets/buildingentrance.png" alt="home"/>
            Вход в суд
          </router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/questionList/before">
          <img src= "./assets/roomentrance.png" alt="home"/>
          Вход в зал
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/questionList/incourt">
          <img src= "./assets/incourt.png" alt="home"/>
          В зале суда
          </router-link>
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
  <router-view />
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
/* i {
font-family: fontawesome !important;
} */

img {
  width: 2em;
  height: 2em;
}

/* #BABABE */
/* 74C7C5 */
</style>
