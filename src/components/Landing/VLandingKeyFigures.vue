<script setup>

</script>

<template>
<section class="landing-key-figures">
  <div class="landing-section landing-key-figures__content">
<!--    <h2 class="landing-key-figures__title">-->
<!--      Tremblaye in a few numbers-->
<!--    </h2>-->
    <div class="landing-key-figures__items">
      <div class="landing-key-figures__item">
        <span class="landing-key-figures__item-value">400</span>
        collaborators
      </div>
      <div class="landing-key-figures__item">
        <span class="landing-key-figures__item-value">900</span>
        grey cards
      </div>
      <div class="landing-key-figures__item">
        <span class="landing-key-figures__item-value">40 000 km2</span>
        storage space
      </div>
      <div class="landing-key-figures__item">
        <span class="landing-key-figures__item-value">40M</span>
        revenues
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss">
.landing-key-figures {
  background-color: rgba(var(--main-color-dark-1), 0.5);
  margin: var(--spacing-large) 0;

  &__content {

  }

  &__title {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 700;
    color: rgb(var(--sub-color-dark));
    text-align: center;
    padding: var(--spacing-little);
  }

  &__items {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: var(--spacing-little);
  }

  &__item {
    padding: var(--spacing-little);
    text-align: center;

    &-value {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 3rem;
    }
  }
}
</style>