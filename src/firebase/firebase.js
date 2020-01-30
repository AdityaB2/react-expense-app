import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId:  process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

 firebase.initializeApp(firebaseConfig);

 const database= firebase.database();
export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());  //key indicates id
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });






// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 15000,
//   createdAt: 782985152
// });







// database.ref('notes').push({
//   title: 'Course Project',
//   body: 'React, Node, Java'
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })


// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });




// 	database.ref().set({
// 	name: 'Aditya Ranjan',
// 	age: 21,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software developer',
// 		comapny: 'Google'
// 	},
// 	location: {
// 		city: 'Patna',
// 		country: 'India'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((error) => {
// 	console.log('This failed ',error);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Hyderabad'
// });




// database.ref().update({
// 	name: 'Aditya'
// });

// database.ref().update({
// 	job: 'Manager',
// 	'location/city': 'Patna'
// });






// 	// database.ref('age').set(21);
// 	// database.ref('location/city').set('Gaya');

// 	database.ref('attributes').set({
// 		height: 170,
// 		weight: 70
// 	}).then(() => {
// 		console.log('Attributes are added');
// 	}).catch((e) => {
// 		console.log('This is also failed',e);
// 	});


 
// database.ref('isSingle')
// .remove()
// .then(() => {
// 	console.log('Data was removed');
// }).catch((e) => {
// 	console.log('Did not remove data', e);
// });



//database.ref().set(null);