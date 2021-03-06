<template>
  <div class="docked-layout">
    <MainNav title="Eligibility" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <section>
      <form class="container" onsubmit="return false" @keypress="advanceOnTab">
        <h3>{{ $t('eligibility-screen.title') }}</h3>

        <div class="question" v-if="step >= 1">
          <span>{{ $t('eligibility-screen.q1.i-am') }} </span>
          <mdc-textfield @blur="advanceTo(2)" v-model="age" type="tel" label="Age"/>
          <span>{{ $t('eligibility-screen.q1.years-old') }}</span>
        </div>

        <div class="question" v-if="step >= 2">
          <span>{{ $t('eligibility-screen.q2.i-live') }} </span>
          <div class="mdc-select">
            <select @change="advanceTo(3)" dense v-model="residence" class="mdc-select__surface">
              <option :key="state" v-for="state in states">{{state}}</option>
            </select>
            <div class="mdc-select__bottom-line"></div>
          </div>
        </div>

        <div class="question" v-if="step >= 3">
          <span>{{ $t('eligibility-screen.q3.i') }} </span>
          <div class="mdc-select">
            <select @change="advanceTo(4)" dense v-model="comfort" class="mdc-select__surface">
              <option>{{ $t('eligibility-screen.q3.select') }}</option>
              <option>{{ $t('eligibility-screen.q3.have-apple') }}</option>
              <option>{{ $t('eligibility-screen.q3.have-android') }}</option>
              <option>{{ $t('eligibility-screen.q3.do-not-have') }}</option>
            </select>
            <div class="mdc-select__bottom-line"></div>
          </div>
          <span>{{ $t('eligibility-screen.q3.smart-phone') }}</span>
        </div>
      </form>
    </section>
    <Footer v-freeze :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled" 
      @back="doBack" @next="doNext" @submit="doSubmit" :do-not-advance-on-submit="true"/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import Footer from './Footer.vue'
import Store from '../store';

const ANDROID_FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSfq73gWXNqufhDQpkKZv20RjDLAHTQiSmdJVHISVd0Hg-wQ-Q/viewform?usp=sf_link';

export default {
  name: 'StudyEligibility',
  components: { MainNav, Footer },
  data() {
    return {
      step: 1,
      totalSteps: 3,
      residence: 'Select',
      comfort: 'Select',
      states: [this.$t('eligibility-screen.q2.select'), this.$t('eligibility-screen.q2.in-US'), this.$t('eligibility-screen.q2.in-Canada'), this.$t('eligibility-screen.q2.in-Netherlands'), this.$t('eligibility-screen.q2.outside-eligible-area')],
      age: ''
    }
  },
  computed: {
    nextEnabled() {
      let age = parseInt(this.age);
      if (this.step === 1 && age) {
        return true
      } else if (this.step === 2 && this.residence !== 'Select') {
        return true
      } else if (this.step >= 3 && this.comfort !== 'Select') {
        return true
      }
      return false
    }
  },
  methods: {
    advanceTo(thisStep) {
      if (thisStep > this.step) {
        this.step = thisStep;
      }
    },
    advanceOnTab(event) {
      if (event.keyCode === 13) {
        this.step += 1;
      }
    },
    doBack() {
      this.step -= 1;
    },
    doNext() {
      this.step += 1;
    },
    doSubmit() {
      var validResidence = (this.residence !== this.$t('eligibility-screen.q2.outside-eligible-area'));
      var validComfort = (this.comfort !== this.$t('eligibility-screen.q3.do-not-have'))
      var validAge = this.age >= 18;

      if (!validAge || !validResidence || !validComfort ) {
        this.$router.push('/study/ineligible')
      } else {
        this.$store.setCurrentStep(Store.ELIGIBILITY_DONE)
        this.$router.push('/study/overview')
      }
    }
  }
}
</script>

<style scoped>
.mdc-textfield-wrapper {
  min-width: 8rem;
}
h3 {
  text-align: center;
  margin-bottom: 2rem;
}
.question {
  display: flex;
  margin-bottom: 1.5rem;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 1.5rem;
}
  .question > * {
    margin: 0 .25rem;
    white-space: nowrap;
  }
select {
  background-color: transparent;
}
@media screen and (max-width: 50em) {
  .question {
    margin-right: -1rem;
    margin-left: -1rem;
  }
  .mdc-select {
    height: 2rem;
  }
  .mdc-textfield-wrapper {
    height: 3rem;
  }
}
</style>
