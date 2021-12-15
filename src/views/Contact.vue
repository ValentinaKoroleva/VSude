<template>
  <teleport to="head">
    <meta name="description" content="Гражданский контроль Контактный телефон: 8(812)309-26-69 Почта для связи: citwatchspb@gmail.com Юридическая служба:jurist@citwatch.org https://citwatch.org" />
  </teleport>
  <div class="about d-flex justify-content-center">
    <!-- <div class="logo-header">
      <img src="../assets/logo.png" alt="logo" />
    </div> -->
    <div class="articleBody">
      <h1>Гражданский контроль*</h1>
      <p class="contentHeader">
        <i class="bi bi-telephone-fill"></i> Контактный телефон:
      </p>
      <p class="content">
        <a href="tel:+78123092669">8 (812) 309-26-69</a>
      </p>
      <p class="contentHeader">
        <i class="bi bi-envelope-open"></i> Почта для связи:
      </p>
      <p class="content">
        <a href="mailto:citwatchspb@gmail.com">citwatchspb@gmail.com</a>
      </p>
      <p class="contentHeader">
        <i class="bi bi-envelope-open-fill"></i> Юридическая служба:
      </p>
      <p class="content">
        <a href="mailto:jurist@citwatch.org">jurist@citwatch.org</a>
      </p>
      <p class="contentHeader"><i class="bi bi-people"></i> Сайт:</p>
      <p class="content">
        <a href="https://citwatch.org/">https://citwatch.org/</a>
      </p>
      <p class="contentHeader">
        * 30.12.2014 распоряжением Министерства юстиции РФ СПб ОО "Гражданский
        контроль" был включен в реестр некоммерческих организаций, «выполняющих
        функции иностранного агента»
      </p>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: left;
}
.articleTitle {
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 2em;
  text-align: left;
  /* margin-bottom: 5vh; */
  text-decoration-style: solid !important;
}
.content {
  /* align-self:center */
  /* margin-left: 20% */
}
.contentHeader {
}
.articleBody {
  padding-right: 10%;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 10%;
  border: 1px solid #74c7c5;
  border-radius: 18px;
  background-color: white;
}
.about {
  padding: 5%;
  margin: 5%;
  margin-top: 0%;
  padding-top: 0%;
  background: white;
  z-index: 999;
  display: inline-block;
  height: auto;
  border-radius: 18px;
  width: 90%;
  background-color: #e9f7f9;
}
.bi {
  margin: 1% !important;
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