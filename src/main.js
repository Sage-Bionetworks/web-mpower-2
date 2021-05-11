// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Store from './components/store'

var store = new Store();

window.queryParams = {};
if (document.location.search) {
    document.location.search.substring(1).split("&").forEach(function(pair) {
        let fragments = pair.split("=");
        window.queryParams[decodeURIComponent(fragments[0])] = decodeURIComponent(fragments[1]);
    });
}
console.debug("queryParams", queryParams);

// polyfill for smooth scrolling behavior
window.__forceSmoothScrollPolyfill__ = true;
require('smoothscroll-polyfill').polyfill();

import VueMDCAdapter from 'vue-mdc-adapter'
import i18n from './i18n'
Vue.use(VueMDCAdapter)

Vue.config.productionTip = true
Vue.mixin( {
  beforeCreate() {
    const options = this.$options
    if ( options.store )
      this.$store = options.store
    else if ( options.parent && options.parent.$store )
      this.$store = options.parent.$store
  }
})

Vue.directive('freeze', {
  inserted: function (el) {
    el.addEventListener('touchend', (e) => {
      e.preventDefault()
      if (e.target.nodeName === "A" || e.target.nodeName === "BUTTON") {
        e.target.click()
      }
    })
  }
})

router.beforeEach((to, from, next) => {
  if (from.path === '/study/overview') {
    if (to.meta.step === undefined || to.meta.step === store.getCurrentStep()) {
      next()
    }
  } else {
    next();
  }
});
router.afterEach(((to, from) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
}));

const SCREENS_W_BGS = ["/study/intro", "/study/overview", "/study/retake-quiz", 
  "/study/ineligible", "/study/done"]

router.beforeEach((to, from, next) => {
  document.documentElement.classList.toggle("consent", SCREENS_W_BGS.some((segment) => { 
    return to.path === segment 
  }))
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  i18n,
  template: '<App/>'
})
