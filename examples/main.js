import Vue from 'vue';
import Lodash from 'lodash';

import App from './App.vue';
import router from './router';
import components from '../packages';

Vue.config.productionTip = false;

Vue.use(components);
Vue.prototype.$_ = Lodash;

new Vue({router, render: h => h(App)}).$mount('#app');
