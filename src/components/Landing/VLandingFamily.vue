<script setup>

</script>

<template>
  <section class="landing-section landing-family">
    <div class="landing-family__content typo">
      <h2 class="title">Family First...</h2>
      <p>
        The Tremblaye Group is a family business founded in 1960.
        It is currently managed by Hervé TREMBLAYE.
        It operates in many areas of activity and has two divisions.
      </p>
    </div>
    <img class="landing-family__image" src="/static/family.png" />
  </section>
</template>

<style lang="scss">
.landing-family {
  display: flex;
  justify-content: space-between;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__image {
    margin: var(--spacing-little);
    height: 300px;
  }
}
</style>