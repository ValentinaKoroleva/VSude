<template>
  <div id="nav">
    <router-link to="/">Судебный мониторинг</router-link> |
    <router-link to="/online">Суды в сети</router-link> |
    <router-link to="/entrance">Вход в суд</router-link> |
    <router-link to="/before">До начала заседания</router-link> |
    <router-link to="/incourt">В суде</router-link> |
    <router-link to="/about">О нас</router-link>
  </div>
  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
