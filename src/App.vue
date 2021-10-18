<template>
  <search />
  <side-menu />
  <nav class="navbar fixed-bottom navbar-expand navbar-light bg-light">
    <div class="container-fluid d-flex flex-nowrap">
      <ul class="navbar-nav d-flex flex-fill">
        <li class="nav-item flex-fill">
          <router-link class="nav-link" aria-current="page" to="/">
            <figure class="figure">
              <img
                :src="icons.home.active"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <figcaption style='color:#74C7C5'>Главная</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link class="nav-link" to="/questionList/generalquestions">
            <figure class="figure">
              <img
                :src="icons.general.passive"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <!-- <img src= "./assets/generalq-active.png" alt="home"/> -->
              <figcaption>Общие вопросы</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link class="nav-link" to="/questionList/entrance">
            <figure class="figure">
              <img
                :src="icons.courtEntrance.passive"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <figcaption>Вход в суд</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link class="nav-link" to="/questionList/before">
            <figure class="figure">
              <img
                :src="icons.roomEntrance.passive"
                class="figure-img img-fluid rounded"
                alt="home"
              />
              <figcaption>Вход в зал</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link class="nav-link" to="/questionList/incourt">
            <figure class="figure">
              <img
                :src="icons.inCourt.passive"
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
  data() {
    return {
      topMenuShow: true,
      icons: {
        home: {
          active: require("./assets/icons/home-active.png"),
          passive: require("./assets/icons/home.png"),
        },
        general: {
          active: require("./assets/icons/generalq-active.png"),
          passive: require("./assets/icons/generalq.png"),
        },
        courtEntrance: {
          active: require("./assets/icons/buildingentrance-active.png"),
          passive: require("./assets/icons/buildingentrance.png"),
        },
        roomEntrance: {
          active: require("./assets/icons/roomentrance-active.png"),
          passive: require("./assets/icons/roomentrance.png"),
        },
        inCourt: {
          active: require("./assets/icons/incourt-active.png"),
          passive: require("./assets/icons/incourt.png"),
        },
      },
      href2icon: {
        "/": "home",
        "/questionList/generalquestions": "general",
        "/questionList/entrance": "courtEntrance",
        "/questionList/before": "roomEntrance",
        "/questionList/incourt": "inCourt",
      },
    };
  },
  watch: {
    $route(to) {
      if (this.href2icon[to.href] != undefined) {
        let captionTo = document
          .querySelector("[href='" + to.href + "']")
          .querySelector("figcaption");

        let hrefOthers = document.querySelectorAll(".nav-link");
        let vm = this;
        hrefOthers.forEach((element) => {
          let h = element.getAttribute("href");
          let caption = element.querySelector("figcaption");
          element.querySelector("img").src = vm.icons[vm.href2icon[h]].passive;
          caption.style.color = "#BABABE";
        });
        let imgTo = document
          .querySelector("[href='" + to.href + "']")
          .querySelector("img");
        imgTo.src = this.icons[this.href2icon[to.href]].active;
        captionTo.style.color = "#74C7C5";
      }

      if (to.fullPath.match(/article/gi)) {
        this.topMenuShow = false;
      }
    },
  },
};
</script>


<style>
html,
body {
  margin: 0;
  height: 100%;
  background: #e9f7f9;
  font-family: SF Pro Text;
}
#app {
  /* font-family: SF Pro Text; */
  font-family: Helvetica;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
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

/* #nav a.router-link-exact-active {
  fill: #42b983!important;
} */

img {
  /* width: 2em;
  height: 2em; */
  width: calc(1em + 2vw);
  height: calc(1em + 2vw);
}
figcaption {
  /* font-size: 0.75rem; */
  font-size: calc(0.5em + 0.75vw);
}

.bottomLine {
  height: 20%;
}
/* #BABABE */
/* hsl(240, 3%, 74%) */
/* 74C7C5 */
/* hsl(179, 43%, 62%) */
</style>
