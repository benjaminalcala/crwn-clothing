import firebase from 'firebase';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('1pFmX8YI3V96v6ReA1Rt').collection('cartItems').doc('JMnhrLgwWnkfUapexFE8')

firestore.doc('/users/1pFmX8YI3V96v6ReA1Rt/cartItems/JMnhrLgwWnkfUapexFE8');

firestore.collection('/users/1pFmX8YI3V96v6ReA1Rt/cartItems')
