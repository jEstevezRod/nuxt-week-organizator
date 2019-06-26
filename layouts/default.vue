<template>
  <v-app light fill-height>
    <backgrounds/>
    <v-content fill-height>
      <v-container fluid fill-height style="z-index: 3 !important">
        <router-view></router-view>
      </v-container>
    </v-content>
    <footer-section/>
  </v-app>
</template>

<script>
import FooterSection from '~/components/global/footer-section'
import Backgrounds from '~/components/global/backgrounds'

export default {
  components: { FooterSection, Backgrounds }
}
</script>

