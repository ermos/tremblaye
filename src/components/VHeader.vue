<script setup>

import VButton from "./VButton.vue";
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="/static/logo.png" alt="Logo de Tremblaye" />
        Tremblaye.
      </div>
      <nav class="header__nav">
        <router-link to="/">La société</router-link>
        <router-link to="/">Transport</router-link>
        <router-link to="/">Location</router-link>
        <router-link to="/">Logistique</router-link>
        <router-link to="/">Emballage</router-link>
      </nav>
      <v-button>Contact us</v-button>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid rgba(var(--main-color), 0.1);
  color: rgb(var(--main-color));
  max-height: var(--header-size);

  &__content {
    width: 100%;
    max-width: var(--interface-size);
    margin: auto;
    padding: var(--spacing-little);
    display: flex;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    padding: var(--spacing-little);

    img {
      height: 30px;
    }
  }

  &__nav {
    flex: 1;
    display: flex;
    padding: var(--spacing-small) var(--spacing-little);

    a {
      color: inherit;
      text-decoration: none;
      padding: var(--spacing-small) var(--spacing-little);
    }
  }
}
</style>