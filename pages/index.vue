<template>
  <v-layout row wrap align-center style="z-index:10 !important; overflow-x: hidden;">
    <v-flex xs12 sm6 text-xs-center>
      <logo-section/>
      <div class="mt-5">
        <login v-if="logged" @notLogged="changeForm"/>
        <register v-if="!logged" @notRegistered="changeForm"/>
      </div>
    </v-flex>
    <v-flex xs12 sm6 text-xs-center>
      <corporative-image/>
    </v-flex>
  </v-layout>
</template>

<script>
import Login from '~/components/home/login'
import LogoSection from '~/components/home/logo'
import CorporativeImage from '~/components/home/corporative-image'
import Register from '~/components/home/register'

export default {
  components: { Login, LogoSection, CorporativeImage, Register },
  data() {
    return {
      logged: true
    }
  },
  methods: {
    changeForm(val) {
      console.log(val)
      this.logged = val
    }
  }
}
</script>

