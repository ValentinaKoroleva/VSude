<template>
  <heading />
  <search />
  <side-menu />
  <confirm />
  <nav class="navbar fixed-bottom navbar-expand navbar-light bg-light">
    <div class="container-fluid d-flex flex-nowrap">
      <ul class="navbar-nav d-flex flex-fill">
        <li class="nav-item flex-fill">
          <router-link class="nav-link" aria-current="page" to="/">
            <figure class="figure">
              <img
                :src="icons.home.active"
                class="figure-img img-fluid rounded"
                alt="Main"
              />
              <figcaption style="color: #74c7c5">Главная</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <router-link class="nav-link" to="/questionList/generalquestions">
            <figure class="figure">
              <img
                :src="icons.general.passive"
                class="figure-img img-fluid rounded"
                alt="GeneralQuestions"
              />
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
                alt="Entrance"
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
                alt="Inside"
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
                alt="InCourtRoom"
              />
              <figcaption>В зале суда</figcaption>
            </figure>
          </router-link>
        </li>
        <li class="nav-item flex-fill">
          <a
            class="nav-link"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"
          >
            <figure class="figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="margin-bottom: 0.5rem; line-height: 1"
                fill="#BABEBA"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                />
              </svg>
              <figcaption style="d-flex align-self-end">Еще</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <not-found v-if="notFound"></not-found>
  <router-view v-else />
  <div class="bottomLine"></div>
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import Search from "./components/Search.vue";
import NotFound from "./views/NotFound.vue";
import Confirm from "./components/Confirm.vue";
import Heading from "./components/Heading.vue";
export default {
  // name:'App',
  components: {
    Search,
    SideMenu,
    NotFound,
    Confirm,
    Heading,
  },
  data() {
    return {
      notFound: false,
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
        // more: {
        // active: require("./assets/icons/three-dots.svg"),
        // passive: require("./assets/icons/three-dots.svg"),
        // },
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
          if (vm.icons[vm.href2icon[h]] != undefined) {
            element.querySelector("img").src =
              vm.icons[vm.href2icon[h]].passive;
          }
          caption.style.color = "#BABABE";
        });
        let imgTo = document
          .querySelector("[href='" + to.href + "']")
          .querySelector("img");
        imgTo.src = this.icons[this.href2icon[to.href]].active;
        captionTo.style.color = "#74C7C5";
      } else {
        let hrefOthers = document.querySelectorAll(".nav-link");
        let vm = this;
        hrefOthers.forEach((element) => {
          let h = element.getAttribute("href");
          let caption = element.querySelector("figcaption");
          if (vm.icons[vm.href2icon[h]] != undefined) {
            element.querySelector("img").src =
              vm.icons[vm.href2icon[h]].passive;
          }
          caption.style.color = "#BABABE";
        });
      }
      if (to.fullPath.match(/article/gi)) {
        this.topMenuShow = false;
      }

      document.title = to.meta.title || "Внутри суда";
    },
  },
  methods: {
    changeColor() {
      console.log(document.querySelector(".bi-three-dots"));
      if (document.querySelector(".bi-three-dots").style.fill != "#BABABE") {
        document
          .querySelector(".bi-three-dots")
          .setAttribute("style", "fill:#BABABE!important");
      } else {
        document
          .querySelector(".bi-three-dots")
          .setAttribute("style", "fill:#74C4C7!important");
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
  font-family: Helvetica !important;
  font-size: calc(12px + 0.5vw) !important;
}
#app {
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

#nav a.active {
  fill: #42b983 !important;
}

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
