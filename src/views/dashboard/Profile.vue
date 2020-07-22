<template>
  <div class="profile">
    <div class="profile__image">
      <img src="@/assets/img/logo.svg" alt="Profile Image" />
    </div>
    <div class="profile__content">
      <h1 class="title">
        Hi Daniel,
      </h1>
      <br />
      <p class="title__sub">Welcome to your profile page</p>
      <br />
      <br />
      <div class="auth__info">
        <router-link :to="{ name: 'logout' }">
          Logout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    itemData: {
      username: '',
      password: ''
    },
    errors: {}
  })
}
</script>
