import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyC3xacLxRGz91vvApySvttXRFcQ2v5mVAk",
  authDomain: "vue-calender-16f98.firebaseapp.com",
  databaseURL: "https://vue-calender-16f98.firebaseio.com",
  projectId: "vue-calender-16f98",
  storageBucket: "vue-calender-16f98.appspot.com",
  messagingSenderId: "396162018907",
  appId: "1:396162018907:web:e4776ee3dd128fdaaf197e"
});

export const db= firebase.firestore();

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
