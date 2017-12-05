import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBk9tOUMT--MSfBvLmNk-tuRefF0tyBVWQ",
    authDomain: "add-posting-vue.firebaseapp.com",
    databaseURL: "https://add-posting-vue.firebaseio.com",
    projectId: "add-posting-vue",
    storageBucket: "add-posting-vue.appspot.com",
    messagingSenderId: "679285916738"
}
firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
