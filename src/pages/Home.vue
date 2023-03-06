<script setup>

</script>

<template>
  <div class="home">
    <div class="landing-banner__wrapper">
      <div class="landing-banner">
        <div class="landing-banner__content">
          <h2 class="landing-banner__title">Get ready for a wider<br>expansion of your business</h2>
        </div>
        <video autoplay muted loop class="landing-banner__video">
          <source src="/static/landing-banner.mp4" type="video/webm">
        </video>
      </div>
      <div class="landing-banner__cards">
        <div class="landing-banner__card">
          <div class="landing-banner__card-image">
            <img src="/static/transport.svg" />
          </div>
          <span class="landing-banner__card-text">
            Transport<br>Service
          </span>
        </div>
        <div class="landing-banner__card">
          <div class="landing-banner__card-image">
            <img src="/static/logistics.svg" />
          </div>
          <span class="landing-banner__card-text">
            Logicstics<br>Service
          </span>
        </div>
        <div class="landing-banner__card">
          <div class="landing-banner__card-image">
            <img src="/static/packaging.svg" />
          </div>
          <span class="landing-banner__card-text">
            Packaging<br>Service
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home {
}

.landing-banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    position: relative;
  }

  &__content {
    position: relative;
    z-index: 2;
    color: #fff;
    text-transform: uppercase;
    width: 100%;
    max-width: var(--interface-size);
    margin: auto;
    padding: var(--spacing-medium);
  }

  &__title {
    text-align: center;
    font-size: 6rem;
    font-weight: 700;
  }

  &__video {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100vh;
    opacity: 0.5;
    pointer-events: none;
  }

  &__cards {
    position: absolute;
    z-index: 2;
    bottom: calc(-80px - var(--spacing-medium));
    width: 100%;
    max-width: var(--interface-size);
    left: 50%;
    margin-left: calc(-1 * (var(--interface-size) / 2));
    display: flex;
  }

  &__card {
    flex: 1;
    height: 160px;
    background-color: rgb(var(--main-color));
    box-shadow: 0 0 20px rgba(var(--sub-color), 0.3);
    margin: var(--spacing-medium);
    padding: var(--spacing-little);
    display: flex;
    align-items: center;
  }

  &__card-image {
    padding: var(--spacing-medium);
    background-color: rgb(var(--neutral-color));
    margin: var(--spacing-little);

    img {
      height: 80px;
    }
  }

  &__card-text {
    margin: var(--spacing-little);
    color: rgb(var(--sub-color-dark));
    font-size: 2.5rem;
    line-height: 1.5;
    font-weight: 700;
  }
}
</style>