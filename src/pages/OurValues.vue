<script setup>

import VHeroes from "../components/VHeroes.vue";
</script>

<template>
  <div class="content">
    <v-heroes title="Our values" image='url("/static/heroes_2.jpg")'>
      All these values contribute to our corporate culture.
      They are essential for the well-being of our employees. That is our priority.
    </v-heroes>
  </div>
  <div class="our-values">
    <div>
      <div class="value">
        <div class="value__letter" :style="{ backgroundColor: '#01B0F1' }">E</div>
        <div class="value__content">
          <h2 class="value__title">Engagement</h2>
          <p>We are committed to providing quality service to our customers</p>
        </div>
      </div>
      <div class="value">
        <div class="value__letter" :style="{ backgroundColor: '#f6b24b' }">S</div>
        <div class="value__content">
          <h2 class="value__title">Savoir-faire</h2>
          <p>It is important to demonstrate good know-how across all our businessess</p>
        </div>
      </div>
      <div class="value">
        <div class="value__letter" :style="{ backgroundColor: '#283561' }">P</div>
        <div class="value__content">
          <h2 class="value__title">Partage</h2>
          <p>Sharing between each employee is an essential element</p>
        </div>
      </div>
      <div class="value">
        <div class="value__letter" :style="{ backgroundColor: '#E8E351' }">R</div>
        <div class="value__content">
          <h2 class="value__title">Respect</h2>
          <p>Showing respect for each employee is our priority</p>
        </div>
      </div>
      <div class="value">
        <div class="value__letter" :style="{ backgroundColor: '#eb7473' }">I</div>
        <div class="value__content">
          <h2 class="value__title">Intégrité</h2>
          <p>Integrity is a fundamental part of Tremblaye</p>
        </div>
      </div>
      <div class="value">
        <div class="value__letter" :style="{ backgroundColor: '#afc96a' }">T</div>
        <div class="value__content">
          <h2 class="value__title">Transmission</h2>
          <p>We value the transfer of skills within the company</p>
        </div>
      </div>
    </div>
    <div style="display: flex;align-items: center;justify-content: center;flex:1;">
      <img src="/static/cadre_tremblaye.png" />
    </div>
  </div>
</template>

<style lang="scss">
.our-values {
  max-width: var(--interface-size);
  width: 100%;
  margin: auto;
  padding: var(--spacing-large);
  display: flex;
}

.value {
  display: flex;
  align-items: center;

  &__letter {
    padding: var(--spacing-medium);
    background-color: red;
    color: #fff;
    font-weight: 700;
    font-size: 5rem;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    margin-left: var(--spacing-medium);
  }

  &__title {
    font-weight: 700;
    font-size: 3rem;
    color: rgb(var(--sub-color-dark));
  }
}
</style>