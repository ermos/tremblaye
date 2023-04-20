<script setup>

</script>

<template>
  <section class="landing-section join-us-why typo">
    <div class="join-us-why__sub">
      <img class="join-us-why__image" src="/static/transport.png" />
      <div class="join-us-why__content">
        <h2 class="title">Why us ?</h2>
        <p>
          We recruit candidates who want to develop their skills.
          We are open to taking beginners because at Tremblaye,
          we consider that knowing how to be is the essential element.
          The know-how we can pass on to you.
        </p>
      </div>
    </div>
    <p>
      We take care of our employees by offering them a mutual insurance that is 90% supported by the employer,
      as well as restaurant tickets or a lunchbox for your lunches.
      In addition, we offer an incentive and participation bonus to reward our employees for
      their efforts and contribution to our collective success. Your manager will be at your side
      to support you throughout your career and help you develop within the company.
      We also have a works council in place to offer you benefits such as social events,
      discounts on leisure activities and more.
    </p>
    <p>
      The recruitment process consists of a telephone interview with our recruitment manager,
      followed by an in-person interview with your future manager.
      Once you have joined our team, we will put in place a personalized
      onboarding to help you become familiar with your new role and work environment.
    </p>
    <p>
      We look forward to welcoming you in our company and supporting you in your professional development.
    </p>
  </section>
</template>

<style lang="scss">
.join-us-why {
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