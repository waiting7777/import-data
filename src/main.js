// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstraoVue from 'bootstrap-vue'
import './assets/styles/main.scss';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(BootstraoVue)
  Vue.component('Layout', DefaultLayout)
}
