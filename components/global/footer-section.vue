<template>
  <v-footer app style="z-index: 43 !important" color="rgba(255, 0, 0, 0)">
    <v-spacer></v-spacer>
    <span class="caption">
      &copy; {{ new Date().getFullYear() }} - designed by
      <a
        id="jesus"
        href="https://github.com/jEstevezRod"
        style="color: white;text-decoration:none"
      >Jesus Estevez</a>
    </span>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scoped>
@media only screen and (max-width: 450px) {
  #jesus {
    color: tomato !important;
  }
}
</style>
