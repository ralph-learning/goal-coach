import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCy05ErOf6pyZMtCWSEen1oV-vk5uP8le8",
    authDomain: "goalcoach-fb622.firebaseapp.com",
    databaseURL: "https://goalcoach-fb622.firebaseio.com",
    projectId: "goalcoach-fb622",
    storageBucket: "goalcoach-fb622.appspot.com",
    messagingSenderId: "1095532825716"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');