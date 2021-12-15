<template>
<teleport to="head">
      <meta name="description" content="Рано или поздно мы сталкиваемся с судами. Помимо «обязательной» явки в суд, в качестве стороны процесса, вы также можете посетить суд в качестве «слушателя», и узнать каким образом происходит суд…" >
</teleport>
  <main-menu />
</template>

<script>
// @ is an alias to /src
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "Home",
  components: {
    MainMenu,
  },
};
</script>
