<script setup>

import VButton from "./VButton.vue";
import {onBeforeUnmount, onMounted, reactive} from "vue";

const data = reactive({
  isActive: false
})

onMounted(() => document.addEventListener("scroll", handleScroll, true));
onBeforeUnmount(() => document.removeEventListener("scroll", handleScroll, true));

function handleScroll() {
  data.isActive = window.scrollY >= 30;
}
</script>

<template>
  <header class="header" :class="{ 'active': data.isActive }">
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
  transition: ease-in-out all 200ms;

  &.active {
    color: rgb(var(--sub-color));
    background-color: rgb(var(--main-color));
    box-shadow: 0 0 20px rgba(var(--sub-color), 0.3);
  }

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