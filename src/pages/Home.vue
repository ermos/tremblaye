<script setup>

import VLandingBanner from "../components/Landing/VLandingBanner.vue";
import VLandingFamily from "../components/Landing/VLandingFamily.vue";
import VLandingKeyFigures from "../components/Landing/VLandingKeyFigures.vue";
import VLandingRoadPole from "../components/Landing/VLandingRoadPole.vue";
import VLandingServicePole from "../components/Landing/VLandingServicePole.vue";
</script>

<template>
  <div class="home">
    <v-landing-banner />
    <v-landing-family />
    <v-landing-key-figures />
    <v-landing-road-pole />
    <v-landing-service-pole />
  </div>
</template>

<style lang="scss">
.home {
}

.landing {
  &-section {
    max-width: var(--interface-size);
    margin: auto;
    padding: var(--spacing-large) var(--spacing-little);
  }
}
</style>