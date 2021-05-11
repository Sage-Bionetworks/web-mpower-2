<template>
  <div class="docked-layout">
    <MainNav/>
    <section class="smooth-scroller">
      <section></section>
      <section>
        <div class="container">
          <h2>About the study</h2>

          <p>mPower is a free, 2 year mobile research study developed by Sage Bionetworks (nonprofit), with the goal of understanding the progression of Parkinson’s Disease that appears to be unique to individuals.</p>
  
          <p>Unlike many other conditions, Parkinson’s Disease can be uncertain and change over time for each person. mPower allows you to understand your unique story of Parkinson’s Disease. Through physical and cognitive activities, symptom, medication, and trigger tracking, you can learn your symptoms, factors, and how these relate to your medications. These insights allow both you and the Sage Bionetworks team to understand your unique patterns over time. This understanding allows for better conversations with your doctors and caregivers, insight into your day to day health and lifestyle, and potential to make a difference in the lives of people who are affected by Parkinson’s Disease. </p>
  
          <p>You do not need to have Parkinson’s Disease to join this study. If you are 18 years old or older, live in the U.S. and have a personal mobile phone, then you can join mPower and make a difference in helping us to better understand Parkinson’s Disease. </p>

          <p>See more details in the <router-link to="/consent">study information sheet</router-link></p>
        </div>
      </section>
      
      <section>
        <div class="wide-carousel">
          <div class="left">
              <div @click="carouselStep = 1" :class="{active: carouselStep === 1}">
                <div>Step 1</div>
                <div>Eligibility & consent</div>
              </div>
              <div @click="carouselStep = 2" :class="{active: carouselStep === 2}">
                <div>Step 2</div>
                <div>Download the App</div>
              </div>
              <div @click="carouselStep = 3" :class="{active: carouselStep === 3}">
                <div>Step 3</div>
                <div>Perform PD activities</div>
              </div>
              <div @click="carouselStep = 4" :class="{active: carouselStep === 4}">
                <div>Step 4</div>
                <div>Track your health</div>
              </div>
          </div>
          <div class="center">
            <BridgeImage v-if="carouselStep === 1" src="/static/images/eligibility%20and%20consent.svg"/>
            <BridgeImage v-if="carouselStep === 2" src="/static/images/download%20the%20app.svg"/>
            <BridgeImage v-if="carouselStep === 3" src="/static/images/perform%20pd%20activities.svg"/>
            <BridgeImage v-if="carouselStep === 4" src="/static/images/track%20your%20health.svg"/>
          </div>
          <div class="right">
            <h3>How the study works</h3>
            <div v-if="carouselStep === 1">
              <p>Eligibility & consent</p>
              <p>Once you have received confirmation of your eligibility, we will ask you to do an informed consent process which only takes about 20 minutes.</p>
            </div>
            <div v-if="carouselStep === 2">
              <p>Download the app</p>
              <p>After consenting, you will enter your mobile number to receive a link to download the mPower app for free from <!--either--> the <a href="https://itunes.apple.com/us/app/parkinson-mpower-2/id1375781575?ls=1&mt=8">iOS App Store</a><!-- or the <a href="https://play.google.com/store/apps/details?id=org.sagebionetworks.research.mpower">Google Play Store</a>-->. </p>
            </div>
            <div v-if="carouselStep === 3">
              <p>Perform PD activities</p>
              <p>Throughout the 2 year study, you will receive notices and text messages on your phone every 3 months asking you to complete daily activities. These daily activities will be done in 2 week bursts and will include exercises such as finger tapping, cognitive games and a one time 20 minute health survey. </p>
            </div>
            <div v-if="carouselStep === 4">
              <p>Track your health</p>
              <p>Tracking your medication and other factors (e.g. stress, exercise) may provide insight into your symptoms and your activity results. As you use mPower, you can view your past activity to gain insights into your day to day health and lifestyle.</p>
            </div>
          </div>
        </div>
        <div class="narrow-carousel">
          <h3>How the study works</h3>
          <carousel :per-page="1">
            <slide>
              <div class="slide">
                <BridgeImage style="height: 12rem" src="/static/images/eligibility%20and%20consent.svg"/>
                <p style="margin-bottom:0">Eligibility & consent</p>
                <p style="margin-top: 0; font-size:smaller">Once you have received confirmation of your eligibility, we will ask you to do an informed consent process which only takes about 20 minutes.</p>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <BridgeImage style="height: 12rem" src="/static/images/download%20the%20app.svg"/>
                <p style="margin-bottom:0">Download the app</p>
                <p style="margin-top: 0; font-size:smaller">After consenting, you will enter your mobile number to receive a link to download the mPower app for free from <!--either--> the <a href="https://itunes.apple.com/us/app/parkinson-mpower-2/id1375781575?ls=1&mt=8">iOS App Store</a><!-- or the <a href="https://play.google.com/store/apps/details?id=org.sagebionetworks.research.mpower">Google Play Store</a>-->. </p>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <BridgeImage style="height: 12rem" src="/static/images/perform%20pd%20activities.svg"/>
                <p style="margin-bottom:0">Perform PD activities</p>
                <p style="margin-top: 0; font-size:smaller">Throughout the 2 year study, you will be notified every 3 months asking you to complete activities in 2 week bursts. These daily activities will include exercises such as finger tapping, cognitive games, and a one time health survey. </p>
              </div>
            </slide>
            <slide>
              <div class="slide">
                <BridgeImage style="height: 12rem" src="/static/images/track%20your%20health.svg"/>
                <p style="margin-bottom:0">Track your health</p>
                <p style="margin-top: 0; font-size:smaller">Tracking your medication and other factors (e.g. stress, exercise) may provide insight into your symptoms and your activity results. As you use mPower, you can view your past activity to gain insights into your day to day health and lifestyle.</p>
              </div>
            </slide>
          </carousel>
        </div>
      </section>

      <section>
        <div class="image container">
          <div class="image">
            <BridgeImage style="margin-bottom: -6px" src="/static/images/scientists%20make%20discoveries.svg"/>
          </div>
          <div class="text">
            <h3>Scientists make discoveries</h3>
            <p>When you use the app you contribute to research on PD. By combining information from many people who are using the app, researchers expect to find patterns. The information you provide through the mPower app gets encrypted on the phone to protect your privacy. As you participate over time, you help create a powerful dataset that may lead to a scientific breakthrough and to new ways to help people with PD improve their well being. You do not need to have PD to participate. We will ask you to participate for 2 weeks every three months. The study will last 2 years but you can participate as long as you like.</p>
          </div>
        </div>
      </section>
      <section>
        <div class="image container">
          <div class="image">
            <BridgeImage style="transform: scale(0.7); padding-bottom: 1rem" 
              src="/static/images/create your story.svg"/>
          </div>
          <div class="text">
            <h3>Create your story</h3>
            <p>In just a minute you can see if you are eligible to participate in the mPower study. Find out now!</p>
            <p><router-link class="join-button" to="/study/intro">Join</router-link></p>
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
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'About',
  components: { MainNav, Footer, Carousel, Slide },
  data() {
    return {
      carouselStep: 1
    }
  }
}
</script>

<style scoped>
.wide-carousel {
  max-width: 40rem; 
  display: flex; 
  margin: 2rem auto; 
  align-items: center;
}
.wide-carousel .left {
  width: 25%; 
  font-size: .8rem;
  padding-left: 2rem;
}
  .left > div {
    border-top: 2px solid #E3E1E1;
    padding: .5rem 0;
    cursor: pointer;
  }
  .left > div.active {
    font-weight: bold;
  }
  .left > div:last-child {
    border-bottom: 2px solid #E3E1E1;
  }
.wide-carousel .center {
  width: 25%;
}
.wide-carousel .right {
    width: 50%; 
    padding: 2rem;
}
.wide-carousel .right p {
    line-height: 1.3;
}
.wide-carousel img, .narrow-carousel img {
  height: 20rem;
}
  .right > div p:first-child {
    margin-top: .75rem; 
    color: #5A478F;
  }
.narrow-carousel {
  display: none;
}
h3 {
  color:#5A478F;
}
@media screen and (max-width: 30em) {
  .wide-carousel {
    display: none;
  }
  .narrow-carousel {
    display: block;
  }
  .narrow-carousel h3 {
    text-align: center;
    padding: 1rem 0 .5rem 0;
  }
  .slide p {
    margin: 1rem 1rem 0 1rem;
  }
  .slide p:nth-child(2) {
    color: #5A478F;
  }
}
</style>