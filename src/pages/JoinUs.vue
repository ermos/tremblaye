<script setup>

import VButton from "../components/VButton.vue";
import VInput from "../components/VInput.vue";
import VForm from "../components/VForm.vue";
import VLandingServicePole from "../components/Landing/VLandingServicePole.vue";
import VJoinUsWhy from "../components/JoinUs/VJoinUsWhy.vue";
import VHeroes from "../components/VHeroes.vue";
</script>

<template>
  <div class="content">
    <v-heroes title="Join us !" image='url("/static/heroes_1.jpg")'>
      Want to do a rewarding job that gives meaning to your life?
      Participate in globalization by joining our teams and work at the heart of the action.
    </v-heroes>

    <section class="join-us">
      <div class="join-us__speechs">
        <div class="join-us__speech">
          <img
              class="join-us__avatar"
              alt="ANDERSON Kate"
              src="https://media.licdn.com/dms/image/C4D03AQFDurT44S7DYw/profile-displayphoto-shrink_800_800/0/1516783697767?e=1687392000&v=beta&t=zCSnYvO54xO8k6WzmOTc29TOgOMUEGRNQX8Tl7r1kOo"
          />
          <p>« We are committed to putting people at the centre of our concerns in order to promote your well-being »</p>
          <span class="join-us__author">Kate Anderson, Director of Human Resources</span>
        </div>
        <div class="join-us__speech">
          <img
              class="join-us__avatar"
              alt="CLARK Tyler"
              src="https://media.licdn.com/dms/image/C5603AQGdP3pcY9ECMw/profile-displayphoto-shrink_200_200/0/1580158569053?e=1687392000&v=beta&t=uCp45WBW8hhmm1HDqb1855scDODtTeX7CLE3G8oR9WY"
          />
          <p>« Our role is to help you develop your skills »</p>
          <span class="join-us__author">Tyler Clark, Instructor</span>
        </div>
      </div>
      <v-form class="join-us__form">
        <h2 class="join-us__form-title">Contact us</h2>
        <v-input type="text" placeholder="First name" />
        <v-input type="text" placeholder="Last name" />
        <v-input type="email" placeholder="Email" />
        <v-input type="tel" placeholder="Phone number" />
        <v-button class="full">Recontact me</v-button>
      </v-form>
    </section>
    <v-join-us-why />
  </div>
</template>

<style lang="scss">
.join-us {
  max-width: var(--interface-size);
  width: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-large) 0;

  &__speechs {
    flex: 1;
    padding: var(--spacing-medium);
  }

  &__form {
    flex: 1;

    &-title {
      font-weight: 700;
      font-size: 4rem;
      text-transform: uppercase;
      padding: var(--spacing-little);
    }
  }

  &__speech {
    padding: var(--spacing-medium);
    text-align: center;
    line-height: 1.4;
  }

  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 9999px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &__author {
    font-weight: bold;
  }
}
</style>