import Vue from "vue"
import Plugin from "./viewport/toast/plugin"
import App from "./App.vue"

Vue.config.productionTip = false
Vue.use(Plugin)

new Vue({
  render: h => h(App)
}).$mount("#app")
