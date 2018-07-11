import Vue from 'vue'
import Router from 'vue-router'
import webCss from '@/assets/web.css'

import YourStory from '@/components/web/YourStory'

const About = () => import(/* webpackChunkName: "primary" */ '@/components/web/About')
const Team = () => import(/* webpackChunkName: "primary" */ '@/components/web/Team')
const Consent = () => import(/* webpackChunkName: "primary" */ '@/components/web/Consent')
const Uninstalled = () => import(/* webpackChunkName: "primary" */ '@/components/web/Uninstalled')
/*
import About from '@/components/web/About'
import Team from '@/components/web/Team'
import Consent from '@/components/web/Consent'
import Uninstalled from '@/components/web/Uninstalled'
*/
const PrivacyPolicy = () => import(/* webpackChunkName: "secondary" */ '@/components/web/PrivacyPolicy')
const TermsOfService = () => import(/* webpackChunkName: "secondary" */ '@/components/web/TermsOfService')
const FAQ = () => import(/* webpackChunkName: "secondary" */ '@/components/web/FAQ')
const Contact = () => import(/* webpackChunkName: "secondary" */ '@/components/web/Contact')

/* I love Vue router. Lazy loading the onboarding screens is this simple. */
const StudyOverview = () => import(/* webpackChunkName: "study" */ '@/components/study/Overview')
const StudyEligibility = () => import(/* webpackChunkName: "study" */ '@/components/study/Eligibility')
const StudyConsent = () => import(/* webpackChunkName: "study" */ '@/components/study/Consent')
const StudyQuiz = () => import(/* webpackChunkName: "study" */ '@/components/study/Quiz')
const StudySign = () => import(/* webpackChunkName: "study" */ '@/components/study/Sign')
const StudyRegistration = () => import(/* webpackChunkName: "study" */ '@/components/study/Registration')
const StudyHelp = () => import(/* webpackChunkName: "study" */ '@/components/study/StudyHelp')
const StudyRetakeQuiz = () => import(/* webpackChunkName: "study" */ '@/components/study/StudyRetakeQuiz')
const StudyIneligible = () => import(/* webpackChunkName: "study" */ '@/components/study/Ineligible')
const StudyDone = () => import(/* webpackChunkName: "study" */ '@/components/study/Done')
const StudyIntroduction = () => import(/* webpackChunkName: "study" */ '@/components/study/Introduction')

import BridgeImage from '@/components/BridgeImage';

Vue.use(Router)
Vue.component('BridgeImage', BridgeImage)

export default new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {path: '/', redirect: '/your-story'},
    {path: '/your-story', component: YourStory},
    {path: '/about', component: About},
    {path: '/team', component: Team},
    {path: '/consent', component: Consent},
    {path: '/app/*', component: Uninstalled},

    // Secondary pages
    {path: '/privacy-policy', component: PrivacyPolicy},
    {path: '/license', component: TermsOfService},
    {path: '/faq', component: FAQ},
    {path: '/contact', component: Contact},

    {path: '/study/intro', component: StudyIntroduction},
    {path: '/study/overview', component: StudyOverview},
    {path: '/study/eligibility', meta: {step: 0}, component: StudyEligibility},
    {path: '/study/consent', meta: {step: 1}, component: StudyConsent},
    {path: '/study/quiz', meta: {step: 2}, component: StudyQuiz},
    {path: '/study/sign', meta: {step: 3}, component: StudySign},
    {path: '/study/registration', meta: {step: 4}, component: StudyRegistration},

    {path: '/study/retake-quiz', component: StudyRetakeQuiz},
    {path: '/study/ineligible', component: StudyIneligible},
    {path: '/study/done', component: StudyDone},
    
    {path: '/study/help', component: StudyHelp}
  ]
})
