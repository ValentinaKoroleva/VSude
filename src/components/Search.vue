<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLeft"
        aria-controls="offcanvasLeft"
      >
        <i class="bi bi-list"></i>
      </button>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-success custom-search"
          type="submit"
          aria-placeholder="Search"
        >
          <i class="bi bi-search"></i>
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
form {
  width: 90%;
  border-radius: 18px;
  margin: 1%;
}
.custom-search {
  color: #b1b1b7;
  background: #ece9e9;
  border: #474747;
}
.custom-search:hover {
  color: #b1b1b7;
  background: #ece9e9;
  border: #686767;
}
</style>