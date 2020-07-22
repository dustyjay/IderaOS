<template>
  <div class="auth">
    <section class="auth-box">
      <div class="auth__title">
        <h1 class="title">Hi Stranger</h1>
        <p class="title__sub">Create an account to get the best</p>
      </div>
      <br />
      <form @submit.prevent="register" class="auth__form">
        <div class="form__group">
          <label for="username" class="form__label">
            Username
            <input
              class="form__input"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              :class="{ error: errors.username }"
              @focus="clearErrors()"
            />
          </label>
          <span class="form__error" v-if="errors.username">
            {{ errors.username }}
          </span>
        </div>
        <div class="form__group">
          <label for="password" class="form__label">
            Password
            <input
              class="form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              :class="{ error: errors.password }"
              @focus="clearErrors()"
            />
          </label>
          <span class="form__error" v-if="errors.password">
            {{ errors.password }}
          </span>
        </div>
        <div class="auth__button">
          <button class="btn btn__primary auth__button">Register</button>
        </div>
      </form>
      <div class="auth__info">
        Already one of us?
        <router-link :to="{ name: 'login' }">
          Login here
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    itemData: {
      username: '',
      password: ''
    },
    errors: {}
  }),
  methods: {
    register() {
      if (this.validateForm()) {
        // Proceed with login
      }
    },
    validateForm() {
      if (!this.itemData.username) {
        this.$set(this.errors, 'username', 'Username is required')
      }
      if (!this.itemData.password) {
        this.$set(this.errors, 'password', 'Password is required')
      }
      if (Object.keys(this.errors).length > 0) {
        return false
      }
      return true
    },
    clearErrors() {
      this.errors = {}
    }
  }
}
</script>
