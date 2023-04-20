<script setup>
import VHeader from "./components/VHeader.vue";
import VFooter from "./components/VFooter.vue";
</script>

<template>
  <v-header />
  <router-view class="content" />
  <v-footer />
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
