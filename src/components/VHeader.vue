<script setup>

import VButton from "./VButton.vue";
import {onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import MenuIcon from 'vue-material-design-icons/Menu.vue';

const data = reactive({
  isActive: false,
  isMobileMenu: false,
  isMobileOpen: false,
})

const nav = ref(null)

onMounted(() => {
  document.addEventListener("scroll", handleScroll, true);
  window.addEventListener("resize", handleResize, true);
  handleScroll();
  handleResize();
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", handleScroll, true);
  window.removeEventListener("resize", handleResize, true);
});

function handleScroll() {
  data.isActive = window.scrollY >= 30;
}

function handleResize() {
  closeNav();
  data.isMobileMenu = window.innerWidth < 1200;
}

function openNav() {
  data.isMobileOpen = true;
  document.body.addEventListener("click", closeNav, true);
}

function closeNav(event) {
  if (event && nav.value.contains(event.target)) {
    return;
  }
  data.isMobileOpen = false;
  document.body.removeEventListener("click", closeNav, true);
}
</script>

<template>
  <header class="header" :class="{ 'active': data.isActive }">
    <div class="header__content">
      <MenuIcon class="header__nav-icon" v-if="data.isMobileMenu" @click="openNav"/>
      <div class="header__logo">
        <img src="/static/logo.png" alt="Logo de Tremblaye" />
        Tremblaye.
      </div>
      <nav ref="nav" class="header__nav" :class="{ 'header__nav--mobile': data.isMobileMenu, 'show': data.isMobileOpen }">
        <router-link to="/">La société</router-link>
        <router-link to="/">Transport</router-link>
        <router-link to="/">Location</router-link>
        <router-link to="/">Logistique</router-link>
        <router-link to="/">Emballage</router-link>
        <div v-if="data.isMobileMenu" class="header__nav-footer">
          <v-button>Contact us</v-button>
        </div>
      </nav>
      <v-button v-if="!data.isMobileMenu">Contact us</v-button>
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
    justify-content: space-between;
    height: var(--header-size);
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

    &-icon {
      padding: var(--spacing-little);
      margin: var(--spacing-little);
      cursor: pointer;
      border-radius: 50%;
      transition: background-color ease-in-out 300ms;

      &:hover {
        background-color: rgba(var(--sub-color), 0.1);
      }
    }

    &--mobile {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      max-width: 300px;
      width: 100%;
      color: rgb(var(--sub-color));
      background-color: rgb(var(--main-color));
      box-shadow: 0 0 20px rgba(var(--sub-color), 0.3);
      flex-direction: column;
      font-weight: 700;
      font-size: 2rem;
      padding: var(--spacing-little);
      display: none;

      &.show {
        display: flex;
        animation: ease-in-out mobile-menu-slide-in 300ms;
      }

      a {
        padding: var(--spacing-medium);
        margin: var(--spacing-little);
        transition: ease-in-out all 200ms;

        &:hover {
          background-color: rgb(var(--neutral-color));
          color: rgb(var(--main-color));
        }
      }

      .header__nav-footer {
        margin-top: auto;

        button {
          width: calc(100% - var(--spacing-medium));
        }
      }
    }
  }
}

@keyframes mobile-menu-slide-in {
  0% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>