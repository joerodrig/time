// This is the entry file.
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueClap from 'vue-clap'

import App from './App';
import ListFiles from './ListFiles';
import TimeLog from './TimeLog';
import CreateTimeLog from './CreateTimeLog';

import {initializeGoogleApi} from './lib/goog.js';

Vue.use(VueRouter);
Vue.use(vueClap); // This is to properly handle tap and click events

// Our routing is very simple, so there is no need to extract it into separate file
const router = new VueRouter({
  routes: [
    { path: '', component: ListFiles },
    { path: '/time-log/:sheetId', component: TimeLog },
    { path: '/create-time-log', component: CreateTimeLog },
  ]
});

// We start our Vue application:
router.start(App, '#app');

// And immediately try to initialize Google API, even if Google client is not yet loaded:
initializeGoogleApi();
