<template>
  <div class="landing">
    <section class="landing__hero">
      <h1 class="title">
        Automating sales and delivery in Africa
      </h1>
      <br />
      <p class="title__sub">
        IderaOS helps African Entrepreneurs and businesses sell to anyone,
        anywhere.
        <br />
        Start, manage and grow your business with an ecosystem that supports you
        from first sale to full scale
      </p>
      <div class="landing__buttons">
        <router-link
          tag="button"
          :to="{ name: 'register' }"
          class="btn btn__white--outline"
        >
          Get Started
        </router-link>
        <router-link
          tag="button"
          :to="{ name: 'login' }"
          class="btn btn__white"
        >
          Login
        </router-link>
      </div>
    </section>
    <!-- <section class="landing__image">
      <img src="@/assets/img/hero.png" alt="Landing Images" />
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
