<script setup>

</script>

<template>
  <section class="landing-section landing-transport typo">
    <div class="landing-transport__sub">
      <img class="landing-transport__image" src="/static/transport.png" />
      <div class="landing-transport__content">
        <h2 class="title">The road pole</h2>
        <p>
          The road division accounts for 70% of our turnover and focuses solely
          on the transport of goods through our trucks.
        </p>
      </div>
    </div>
    <p>
      We hire vehicles with drivers for companies that want to outsource their transport service.
      We offer various activities: auxiliary crane, dumpster, carrier.
      We also have on-demand transportation for one-time transportation needs from some companies.
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