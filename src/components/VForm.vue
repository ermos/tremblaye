<script setup>

</script>

<template>
  <form class="v-form">
    <slot />
  </form>
</template>

<style lang="scss">
.v-form {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-little);
}
</style>