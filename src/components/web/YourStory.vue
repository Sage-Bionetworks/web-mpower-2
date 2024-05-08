<template>
  <div class="docked-layout">
    <div class="alert alert-primary" role="alert" style="text-align: center; padding: 30px 10px;">
      The mPower Parkinson’s Disease study is closed for enrollment. Thank you for your interest and contributions. The study is no longer accepting new participants.
    </div>
    <MainNav/>
    <section class="smooth-scroller" style="padding-top: 0">
      <section style="height: 30vw; min-height: 15rem; background: linear-gradient(#5A478F, #47337D)">
        <div style="
          height: 30vw; 
          min-height: 15rem;
          background-image: url(/static/images/about%20the%20study.svg);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat">
        </div>
      </section>

      <section>
        <div class="container">
          <h2>Living with Parkinson’s Disease</h2>
          <p>We understand that living with Parkinson’s Disease (PD) can be unsettling due to the uncertain nature of the disease.  Unlike many other conditions, symptoms and the way they change over time are different for each person. Due to the irregular and unique progression of PD, you don’t always know when your symptoms will evolve and how disease will impact your life over time. </p>
        </div>
      </section>

      <section>
        <div class="image container">
          <div class="image">
            <BridgeImage style="margin-bottom: -6px" src="/static/images/about%20the%20study.svg"/>
          </div>
          <div class="text" style="padding-top: 1rem">
            <h3>Understand your PD</h3>
            <p>Although your path is uncertain, seeing patterns over time may lead to a better understanding of your PD. Tracking your medication and other factors (e.g. stress, exercise) may provide insight into your symptoms and your ability to complete activities.  Understanding this may provide insights into your day to day health and lifestyle.</p>
          </div>
        </div>
      </section>

      <section>
        <div class="image container">
          <div class="image">
            <BridgeImage style="padding-top: 1.5rem" src="/static/images/tell%20your%20story.svg"/>
          </div>
          <div class="text">
            <h3>Telling your story</h3>
            <p>Through the mPower app, you can tell your story of living with PD. It’s a tool to understand your symptoms, factors, and how these relate to your medication. You also can see your changes over time on physical and cognitive activities. This can help you talk about your story with doctors and caregivers. It is about you and how you live with PD.</p>
          </div>
        </div>
      </section>

      <section>
        <div class="image container">
          <div class="image">
            <BridgeImage style="transform: scale(0.7); padding-bottom: 1rem" src="/static/images/create your story.svg"/>
          </div>
          <div class="text">
            <p>The mPower Parkinson’s Disease study is closed for enrollment. Thank you for your interest and contributions. The study is no longer accepting new participants.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
  </div>
</template>

<script>
import MainNav from './MainNav.vue';
import Footer from './Footer.vue';

export default {
  name: 'YourStory',
  components: { MainNav, Footer },
}
</script>

<style scoped>
</style>
