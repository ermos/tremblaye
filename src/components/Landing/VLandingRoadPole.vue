<script setup>

</script>

<template>
  <section class="landing-section landing-transport typo">
    <div class="landing-transport__sub">
      <img class="landing-transport__image" src="/static/transport.png" />
      <div class="landing-transport__content">
        <h2 class="title">The road pole</h2>
        <p>
          The Tremblaye Group is a family business founded in 1960.
          It is currently managed by Hervé TREMBLAYE.
          It operates in many areas of activity and has two divisions.
        </p>
      </div>
    </div>
    <p>
      We have five logistics sites where we realize industrial part storage as well as e-commerce. We take care of preparing packages for shipping for the end customer who has placed an order on the internet.
      -  Industrial packaging: We make custom wooden crates for specific and large products. These packages can be several metres long and can carry very fragile products.
      -     Packaging trade: We sell everything you need to transport your goods: adhesive tapes, stretch films, plastic bags, pallets, cartons and protections.
      -     CETEOVAC: We sell and rent vacuum lifting tools to facilitate the movement of panels and windows during construction.
      -     CampinGaz: We sell CampinGaz products (barbecue, cooler, etc.) to campsites and large and medium-sized surfaces throughout western France.
    </p>
  </section>
</template>

<style lang="scss">
.landing-transport {
  &__sub {
    display: flex;
    justify-content: space-between;
    text-align: right;
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