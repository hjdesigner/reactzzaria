import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCvSCUrNh5gK46414T9llzVE08yU_hII70',
  authDomain: 'reactzzaria-10c3b.firebaseapp.com',
  databaseURL: 'https://reactzzaria-10c3b.firebaseio.com',
  projectId: 'reactzzaria-10c3b',
  storageBucket: 'reactzzaria-10c3b.appspot.com',
  messagingSenderId: '565150912644'
}

firebase.initializeApp(config)

export default firebase
