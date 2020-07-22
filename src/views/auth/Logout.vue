<template>
  <div class="auth">
    Logging out...
  </div>
</template>

<script>
export default {
  name: 'Logout',
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: 'home' })
    }, 2000)
  }
}
</script>
