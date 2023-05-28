import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, getDocs,
  addDoc, deleteDoc, doc
    
}from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMrLhBphGhCRThDLyxAehuvCU0jaSSSEE",
    authDomain: "recepiesite.firebaseapp.com",
    projectId: "recepiesite",
    storageBucket: "recepiesite.appspot.com",
    messagingSenderId: "92588369240",
    appId: "1:92588369240:web:45805f8d714cb24db0712d",
    measurementId: "G-XECJ1DWYHG"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

  // collection ref
const colRef = collection(db, 'Recipe')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })

// adding docs
/* const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    title: addBookForm.title.value,
    description: addBookForm.description.value,
  })
  .then(() => {
    addBookForm.reset()
  })
})

// deleting docs
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, 'Recipe', deleteBookForm.id.value)

  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset()
    })
})

*/

ReactDOM.render(<App />, document.getElementById('root'));