<template>
  <div class="page-overview">
    <div class="row">
      <br>
      <br>
      <p class="pageOne col-md-8 offset-md-2 text-left "> I'm interested in joining the mPower study because I </p>
    </div>
    <!-- center and twice as big, scroll and show the text as highlight-->
    <!-- step 1 1) with icon background, no hyper link -->
    <div class="row">
  
      <!--use case with multiselect boxes-->
      <form class="col-md-8 offset-md-2 text-left">

        <span v-bind:class= "{dim: !(selectedOptionOne === null || selectedOptionOne === 'One')}">
          <input  type="radio" id="one" value="One" v-model="selectedOptionOne">
          <label class="custom-input" for="one">have parkinsons</label>
          <br>
        </span>

        <span v-bind:class= "{dim: !(selectedOptionOne === null || selectedOptionOne === 'Two')}">
          <input   type="radio" id="two" value="Two" v-model="selectedOptionOne">
          <label class="custom-input" for="two">have another movement disorder</label></label>
          <br>
        </span>

        <span v-bind:class= "{dim: !(selectedOptionOne === null || selectedOptionOne === 'Three')}">
          <input  type="radio" id="three" value="Three" v-model="selectedOptionOne" >
          <label class="custom-input" for="three">would like to be a control subject</label>
          <br>
        </span>

      </form>

      <br class="visible-md-up">
      <br class="visible-md-up">
      <p v-if="isInterested" class="col-md-8 offset-md-2 pl-2 pl-md-0"> and I would be willing to try </p>
      <div class=" col-md-8 offset-md-2" id="selectTwo" v-if="isInterested">

        <div v-bind:class= "{dim: !(selectedOptionTwo === null || selectedOptionTwo === 'One')}">
          <input type="radio" id="one" value="One" v-model="selectedOptionTwo">
          <label class="custom-input" for="one"> this study</label>
          <br>
        </div>

        <span v-bind:class= "{dim: !(selectedOptionTwo === null || selectedOptionTwo === 'Two')}">
          <input  type="radio" id="two" value="Two" v-model="selectedOptionTwo">
          <label class="custom-input" for="two"> parts of this study</label></label>
          <br>
        </span>

      </div>

    </div>
    <div class="row">
    <button class="text-center" type="submit" v-if="isEligible" v-focus="isEligible" id="next" v-on:click="clicked"> Next </button>
    </div>
  </div>
</template>

<script>
import { Focus } from '@/directives/focus.js'
import _ from 'lodash'
import Multiselect from 'vue-multiselect'

export default {
  name: 'subjectInterest',
  data () {
    return {
      selectedOptionOne: null,
      selectedOptionTwo: '',
      isInterested: false,
      isWilling: false,
      isEligible: false,
      value: [
        { name: 'Vue.js' }
      ],
      options: [
        { name: 'have parkinsons' },
        { name: 'have another movement disorder' },
        { name: 'would like to be a control subject' }
      ]
    }
  },
  watch: {
    selectedOptionOne: function (newOption) {
      this.setIsInterested()
    },
    selectedOptionTwo: function (newOption) {
      this.setIsWilling()
    },
    isWilling: function (newValue) {
      this.setIsEligible()
    }
  },
  methods: {
    clicked () {
      if (this.isEligible) {
        this.$router.push('Eligibility')
      }
    },
    setIsInterested: _.debounce(
      function () {
        this.isInterested = (this.selectedOptionOne.length > 0)
      },
      500),
    setIsWilling: _.debounce(
      function () {
        this.isWilling = (this.isInterested && this.selectedOptionTwo !== '')
      },
      500),
    setIsEligible: _.debounce(
      function () {
        this.isEligible = (this.isWilling && this.isInterested)
      }, 250
    )
  },
  directives: {
    Focus
  },
  components: {
    Multiselect
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
button:disabled {
  opacity: 0.5;
}

.dim {
  opacity: 0.5
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
  opacity: 0
}
</style>
