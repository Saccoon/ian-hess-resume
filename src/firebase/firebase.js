import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBipyFd0J9uqSuPhismZB7KIr42h0d_Ahs",
  authDomain: "accmonitoring-7b431.firebaseapp.com",
  databaseURL: "https://accmonitoring-7b431.firebaseio.com",
  projectId: "accmonitoring-7b431",
  storageBucket: "accmonitoring-7b431.appspot.com",
  messagingSenderId: 1052343808102,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth
};