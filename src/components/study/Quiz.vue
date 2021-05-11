<template>
  <div class="docked-layout">
    <MainNav title="Quiz" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <section>
      <div class="container">
        <div class="question" v-show="step === 1">
          <label>Question {{step}}</label>
          <h3>{{ $t('quiz-screen.q1.q') }}</h3>

          <RadioButton @change="updateQuizState" name="purpose" value="right">
            {{ $t('quiz-screen.q1.a1') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="purpose" value="wrong1">
            {{ $t('quiz-screen.q1.a2') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="purpose" value="wrong2">
            {{ $t('quiz-screen.q1.a3') }}
          </RadioButton>
        </div>

        <div class="question" v-show="step === 2">
          <label>Question {{step}}</label>
          <h3>{{ $t('quiz-screen.q2.q') }}</h3>

          <RadioButton @change="updateQuizState"  name="anon" value="wrong1">
            {{ $t('quiz-screen.q2.a1') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="anon" value="wrong2">
            {{ $t('quiz-screen.q2.a2') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="anon" value="right">
            {{ $t('quiz-screen.q2.a3') }}
          </RadioButton>
        </div>
        
        <div class="question" v-show="step === 3">
          <label>Question {{step}}</label>
          <h3>{{ $t('quiz-screen.q3.q') }}</h3>

          <RadioButton @change="updateQuizState"  name="deletable" value="wrong1">
            {{ $t('quiz-screen.q3.a1') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="deletable" value="right">
            {{ $t('quiz-screen.q3.a2') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="deletable" value="wrong2">
            {{ $t('quiz-screen.q3.a3') }}
          </RadioButton>
        </div>

        <div class="question" v-show="step === 4">
          <label>Question {{step}}</label>
          <h3>{{ $t('quiz-screen.q4.q') }}</h3>

          <RadioButton @change="updateQuizState"  name="stressful" value="wrong1">
            {{ $t('quiz-screen.q4.a1') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="stressful" value="wrong2">
            {{ $t('quiz-screen.q4.a2') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="stressful" value="right">
            {{ $t('quiz-screen.q4.a3') }}
          </RadioButton>
        </div>

        <div class="question" v-show="step === 5">
          <label>Question {{step}}</label>
          <h3>{{ $t('quiz-screen.q5.q') }}:</h3>

          <RadioButton @change="updateQuizState"  name="pausable" value="right">
            {{ $t('quiz-screen.q5.a1') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="pausable" value="wrong1">
            {{ $t('quiz-screen.q5.a2') }}
          </RadioButton>
          <RadioButton @change="updateQuizState"  name="pausable" value="wrong2">
            {{ $t('quiz-screen.q5.a3') }}
          </RadioButton>
        </div>
      </div>
    </section>
    <Footer :step="step" :total-steps="totalSteps" :next-enabled="nextEnabled"
      v-on:back="doBack" v-on:next="doNext" v-on:submit="doSubmit"/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import Footer from './Footer.vue'
import Store from '../store'
import RadioButton from './RadioButton'

export default {
  name: 'StudyQuiz',
  components: { MainNav, Footer, RadioButton },
  data() {
    return {
      step: 1,
      totalSteps: 5,
      furthestStep: 0,
      answers: {}
    }
  },
  created() {
    this.$store.setCurrentStep(2)
  },
  computed: {
    nextEnabled: function() {
      return this.furthestStep >= this.step
    }
  },
  methods: {
    updateQuizState(name, value) {
      ga('send', 'event', 'Quiz', name, value);
      this.answers[name] = value
      this.furthestStep = this.step
    },
    doBack() {
      if (this.step > 1) {
        this.step -= 1
      }
    },
    doNext() {
      if (this.step < this.totalSteps) {
        this.step += 1
      }      
    },
    doSubmit() {
      let hasErrors = Object.values(this.answers).some((answer) => answer !== 'right')
      if (hasErrors) {
        ga('send', 'event', 'Quiz', 'finished', 'failure');
        this.$store.setAnswers(this.answers)
        this.$router.push('/study/retake-quiz')
      } else {
        ga('send', 'event', 'Quiz', 'finished', 'success');
        this.$store.setCurrentStep(Store.QUIZ_DONE)
        this.$router.push('/study/overview')
      }
    }
  }
}
</script>

<style scoped>
section {
  padding-top: 0;
}
.container {
  padding: 0;
  max-width: 30rem;
}
.question {
  padding: 1.5rem 1.5rem .5rem 1.5rem;
}
.question > label {
  color: #6c7a89;
  font-size: .7rem;
  margin-bottom: 1rem;
  display: block;
}
.question > h3 {
  color: #3b4a63;
  margin-bottom: 1rem;
}
.radio-holder {
  display: block;
}
.success, .failure {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
  .success h4, .failure h4 {
    font-size: 1.2rem;
    margin: .5rem 0;
  }
  .success div, .failure div {
    max-width: 30rem;
    margin: 0 auto; 
    padding: 0rem 1.5rem;
  }
  .success p, .failure p {
    line-height: 1.1;
  }
  .success {
    background-color: #f0faf6;
  }
    .success h4 {
      color: #63D49E;
    }
    .success button {
       font-size: 1.3rem; 
       background-color: #5A478F; 
       color: white; 
       border-radius: 100px; 
       padding: .25rem 2rem;
       margin-top: -1rem;
       margin-bottom: 1rem;
       font-weight: bold;
    }
  .failure {
    background-color: #fef0f1;
  }
    .failure h4 {
      color: #EE6070;
    }
</style>
