<template>
  <section>
    <div class="bg1"></div>
    <div class="bg2"></div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.bg1,
.bg2 {
  width: 100%;
  height: 100%;
  position: absolute;
}
.bg1 {
  z-index: 4;
  background-color: #226dbc;
  -webkit-clip-path: polygon(100% 10%, 100% 100%, 0% 100%, 69% 71%);
  clip-path: polygon(100% 10%, 100% 100%, 0% 100%, 69% 71%);
}
.bg2 {
  z-index: 4;
  background-color: #2a5f98;
  -webkit-clip-path: polygon(100% 29%, 100% 100%, 0% 100%, 75% 77%);
  clip-path: polygon(100% 29%, 100% 100%, 0% 100%, 75% 77%);
}

@media only screen and (max-width: 450px) {
  .bg1,
  .bg2 {
    visibility: hidden;
  }

  #jesus {
    color: tomato !important;
  }
}
</style>
