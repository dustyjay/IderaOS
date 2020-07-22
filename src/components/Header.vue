<template>
  <header class="header">
    <nav class="header-nav">
      <router-link :to="{ name: 'home' }">
        <img class="header-logo" :src="logo" alt="IderaOS" />
      </router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import whiteLogo from '@/assets/img/logo-white.svg'
import darkLogo from '@/assets/img/logo.svg'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['isLandingPage']),
    logo() {
      return this.isLandingPage ? whiteLogo : darkLogo
    }
  }
}
</script>
