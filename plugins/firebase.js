import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCBjn2D8RcInsYPU7ic4bw2ypSO8eUrT8k",
        authDomain: "weeknizator.firebaseapp.com",
        databaseURL: "https://weeknizator.firebaseio.com",
        projectId: "weeknizator",
        storageBucket: "",
        messagingSenderId: "351828902837",
        appId: "1:351828902837:web:13ba03dfe495440b"
    };
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
export {fireDb}