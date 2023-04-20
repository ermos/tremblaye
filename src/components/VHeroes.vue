<script setup>
const props = defineProps({
  title: {
    type: String
  },
  image: {
    type: String
  }
})
</script>

<template>
  <div class="heroes" :style="{ backgroundImage: props.image }">
    <div class="heroes__content">
      <h1 class="heroes__title">{{ props.title }}</h1>
      <p class="heroes__sub">
        <slot />
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.heroes {
  width: 100%;
  height: 400px;
  padding-top: var(--header-size);
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #fff;

  &__content {
    padding: var(--spacing-medium);
    max-width: var(--interface-size);
    width: 100%;
    margin: auto;
  }

  &__title {
    font-size: 6rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__sub {
    margin-top: var(--spacing-medium);
    max-width: calc(var(--interface-size) / 2);
    line-height: 1.4;
  }
}
</style>