<template>
  <div>
    <MainNav title="Install The App" :back-to-overview="true" :show-help="true" :show-steps="true"/>
    <div class="container">
      <p>Thank you! Please enter your mobile phone number and select your phone type to receive your download link for the mPower app:</p>

      <div style="text-align: center; margin-top: 2rem">
        <vue-tel-input
          v-model="phoneValue"
          :defaultCountry="defaultCountry"
          :onlyCountries="countryCodes"
          @country-changed="onCountryChange"></vue-tel-input>
      </div>
      <p style="text-align: center; margin-top: 3rem">Pick one depending on your mobile phone:</p>
      <div class="buttons">
        <a @click="apple">
          <BridgeImage src="/static/images/App_Store_Badge.svg" :style="{opacity: hasNumber}"/>
        </a>
        <a @click="google">
          <BridgeImage src="/static/images/Android_Google_Play.svg" :style="{opacity: hasNumber}"/>
        </a>
      </div>
    </div>
    <mdc-snackbar ref="snackbar"/>
  </div>
</template>

<script>
import MainNav from './MainNav.vue'
import store from '../store'
import axios from 'axios';
import { VueTelInput } from 'vue-tel-input'

export default {
  name: 'StudyRegistration',
  components: { MainNav, VueTelInput },
  data() {
    return {
      phoneValue: '',
      countryCodes: ['CA','US','NL'],
      defaultCountry: this.$t('registration-screen.default-region-code'),
      selectedRegionCode: '',
    }
  },
  computed: {
    hasNumber: function() {
      return ( this.phoneValue && this.phoneValue.replace(/\D/g,'').length >= 10 ) ? 1 : .5
    },
  },
  methods: {
    onCountryChange: function (countryObject) {
      this.selectedRegionCode = countryObject.iso2
    },

    apple: function(event) {
      if (this.hasNumber === 1) {
        event.target.style.opacity = .6;
        this.post('iPhone OS')
      }
    },
    google: function(event) {
      if (this.hasNumber === 1) {
        event.target.style.opacity = .6;
        this.post('Android')
      }
    },
    post: function(osName) {
      var snackbar = this.$refs.snackbar
      var phoneFormatted = this.phoneValue.replace(/[^\d]/g,'')
      this.$store.setPhone(this.phoneValue)
      axios.post('https://webservices.sagebridge.org/v3/itp', {
        studyId: 'sage-mpower-2',
        phone: {number: phoneFormatted, regionCode: this.selectedRegionCode},
        subpopGuid: 'sage-mpower-2',
        osName: osName,
        consentSignature: {
          name: this.$store.getName(),
          scope: this.$store.getSharingScope()
        }
      }).then(() => {
        this.$router.push("/study/done")
      }).catch(function(error) {
        if (error.response && error.response.data && error.response.data.message) {
          snackbar.show(error.response.data)
        } else {
          snackbar.show(error)
        }
      })
    }
  }
}
</script>

<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.container {
  padding-top: 5rem;
}
.buttons {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}
.buttons img {
  width: calc(6rem + 2vw);
  cursor: pointer;
}
.vue-tel-input {
  height: 2rem;
  font: 400 16px 'Lato';
}

</style>