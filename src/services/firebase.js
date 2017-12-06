import firebase from 'firebase'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

var config = {
  apiKey: 'AIzaSyBk9tOUMT--MSfBvLmNk-tuRefF0tyBVWQ',
  authDomain: 'add-posting-vue.firebaseapp.com',
  databaseURL: 'https://add-posting-vue.firebaseio.com',
  projectId: 'add-posting-vue',
  storageBucket: 'add-posting-vue.appspot.com',
  messagingSenderId: '679285916738'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
