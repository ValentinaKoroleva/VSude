<template>
  <div class="about">
    <!-- <div class="logo-header">
      <img src="../assets/logo.png" alt="logo" />
    </div> -->
    <div class="articleBody">
      <p>
        Рано или поздно мы сталкиваемся с государственными органами, в том числе
        судами. Перед вами может встать необходимость обжаловать решение об
        увольнении, взыскать долг или вас могут пригласить в суд в качестве
        свидетеля.
      </p>
      <p>
        Российские суды еще не научились разговаривать с посетителями судов
        понятным и доступным языком, из-за чего может сложиться представление о
        судах как запутанной и пугающей системе. Во многом это не так. “Открытый
        суд” ясно расскажет вам, что можно ждать от посещения суда. Какие есть
        права и обязанности.
      </p>
      <p>
        Приложение не оказывает юридические услуги, но отвечает на популярные
        вопросы о том, с чем может столкнуться рядовой посетитель суда.
      </p>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "About",
};
</script>

<style scoped>
.about {
  padding: 5%;
  margin: 5%;
  margin-top: 1%;
  background: white;
  z-index: 999;
  display: inline-block;
  height: auto;
  border-radius: 18px;
}
p {
  text-align: left;
}

img {
  width: 10%;
  height: 10%;
}
.logo-header {
  display: flex;
  float: left;
}
</style>