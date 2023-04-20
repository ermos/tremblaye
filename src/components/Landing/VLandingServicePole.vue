<script setup>

</script>

<template>
  <section class="landing-section landing-packaging typo">
    <div class="landing-packaging__sub">
      <div class="landing-packaging__content">
        <h2 class="title">The service pole</h2>
        <p>
          The service division, as its name indicates, provides services for different companies.
          These activities are related to the transportation of goods.
        </p>
      </div>
      <img class="landing-packaging__image" src="/static/packaging.png" />
    </div>
    <p>
      We do logistics with five sites where we realize industrial part storage as well as e-commerce.
      We take care of preparing packages for shipping for the end customer who has placed an order on the internet.
      We also make custom wooden crates for specific and voluminous products.
      These packages can be several metres long and can carry very fragile products.
      In addition, we sell everything you need to transport your goods: adhesive tapes, stretch films,
      plastic bags, pallets, cartons and protections.
      We also have another activity where we sell and rent suction lifting tools to facilitate the movement
      of panels and windows during construction. Finally, we sell CampinGaz products (barbecue, cooler, etc.)
      to campsites and large and medium-sized surfaces throughout the west of France.
    </p>
  </section>
</template>

<style lang="scss">
.landing-packaging {
  &__sub {
    display: flex;
    justify-content: space-between;
  }

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