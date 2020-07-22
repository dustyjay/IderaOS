<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Header: () => import('./components/Header')
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
