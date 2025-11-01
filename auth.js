import {auth} from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js';

const msg = document.getElementById('message');
console.log('auth.js loaded, msg element:', msg);

window.signupuser = function () {
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 console.log('Attempting signup with email:', email);
 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
 msg.textContent = "signup successful";
 console.log('user' , userCredential.user);
 })
 .catch((error) => {
   console.error('Signup error:', error.code, error.message);
   msg.textContent = `Signup failed: ${error.message}`;
 });
};

window.loginuser = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log('Attempting login with email:', email);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential)=> {
    msg.textContent = "login successful";
    console.log('user',userCredential.user);
    window.location.href ='Shop.html';
  })
  .catch((error)=> {
    console.error('Login error:', error.code, error.message);
    msg.textContent = `Login failed: ${error.message}`;
  })
}