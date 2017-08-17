<template>
  <div class="page-overview">
  
    <div class="text-left text-md-center"> You would be a great fit for the mPower study! </div>
    <br>
    <div class="lead text-left text-md-center">
      We'd just like to know a couple more things about you to make sure you're eligible
    </div>
    <br>
    <!--TODO: Make better accesibile elements, currently the page is not navigatable vie keybaord if trying to backtrack on the page-->
    <div class="row">
      <!-- Field input one -->
      <div class="mr-2 col-12 col-sm-auto text-center offset-md-2">
        I am
      </div>
  
      <input v-model.number="age" type="number" pattern="\d*" class=" lead light col-12 col-sm-2 phoneInput" id="ageField" placeholder="enter age" min=0 max=100>
  
      <!-- TODO: Import lodash so that this message does not immediately prompt-->
      <div v-if="isUnderage" class="alert alert-danger col-md-4 offset-md-4" id="ageError" role="alert">
        <strong>Sorry.</strong> Participants must be at least 18 years of age to register.
      </div>
  
      <!--Field input two-->
      <div v-if="isUnderage !== null && !isUnderage" class="text-center col-12 col-sm-auto">
        <label class="form-input-label mr-2" for="placeField" id="live"> I live in </label>
      </div>
      <input v-if="isUnderage !== null && !isUnderage" v-model.number="zipCode" id="placeField" class="text-center lead light col-12 col-md-3 md-input-invalid phoneInput" type="number" pattern="\d*" placeholder="enter 5-digit zip"></input>
    </div>
  
    <div v-if="isPlaceAnswered !== null && !isPlaceAnswered" class="alert lead light alert-danger col-md-4 offset-md-4" role="alert" id="zipError">
      <strong>Sorry.</strong> Zipcodes must contain at least 5 numbers, if there is a mistake please email sagebase.org
    </div>
  
    <!--Field input three-->
    <div class="row" v-if="isPlaceAnswered">
      <div class="text-center col-12 col-sm-auto offset-md-2 mr-2 phoneInput">
        and I feel </div>
      <select class="col-12 col-md-3 custom-select lead light text-center phoneInput" id="comfortable" placeholder="please select one" v-model="selectedOptionForPhone" style="white-spce:nowrap !important; min-height: 60px;">-->
        <!--TODO: Fill in with actual values-->
        <option disabled value=""> Select one</option>
        <option> comfortable </option>
        <option> weary </option>
        <option> uncomfortable </option>
      </select>
  
      <label class="text-center col-sm-auto pl-3"> using my phone </label>
    </div>
    <br>
    <div class="row">
      <br>
      <br>
      <div v-if="isEligible">
        <button v-on:click="clicked" v-bind:class="{dim: !isEligible}" v-focus="isEligible" id="next"> Submit </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Focus} from '@/directives/focus.js'
  import _ from 'lodash'
  export default {
    data () {
      return {
        age: '',
        zipCode: '',
        selectedOptionForPhone: null,
        isUnderage: null,
        isPlaceAnswered: null,
        hasChosenOption: false,
        isEligible: false
      }
    },
    watch: {
      age: function (newAge) {
        this.setIsUnderage()
      },
      zipCode: function (newZip) {
        this.setIsPlaceAnswered()
      },
      selectedOptionForPhone: function (newOption) {
        this.setHasChosenOption()
        this.setIsEligible()
      }
    },
    methods: {
      scrollPage: _.debounce(
        function (arg1) {
          this.$scrollTo(arg1, 750, { easing: 'linear' })
        }
      , 200),
      clicked () {
        if (this.isEligible) {
          this.$router.push('Congratulations') // TODO: Flip to the top of the next page
        }
      },
      setIsUnderage: _.debounce(
        function () {
          if (this.age === '') {
            this.isUnderage = null
          } else {
            this.isUnderage = this.age < 18
          }
          if (!this.isUnderage) {
            this.scrollPage('#live')
          } else {
            this.scrollPage('#ageError')
          }
        }, 500
      ),
      setIsPlaceAnswered: _.debounce(
        function () {
          this.isPlaceAnswered = (this.zipCode !== '' && this.zipCode >= 10000)
          if (this.isPlaceAnswered) {
            this.scrollPage('#comfortable')
          } else {
            this.scrollPage('#zipError')
          }
        }, 500
      ),
      setHasChosenOption: _.debounce(
        function () {
          this.hasChosenOption = (this.selectedOptionForPhone !== '')
        }, 500
      ),
      setIsEligible: _.debounce(
        function () {
          this.isEligible = (!this.isUnderage && this.isPlaceAnswered && this.hasChosenOption)
          if (this.isEligible) {
            this.scrollPage('#next')
          }
        }, 500
      )
    },
    directives: {
      Focus
    }
  }
</script>

<style scoped>
  button:disabled {
    opacity: 0.5;
  }
  /* Work around for diabled button interfering with when the button gets focused in on*/
  .dim {
      opacity: 0.5    
  }
</style>
