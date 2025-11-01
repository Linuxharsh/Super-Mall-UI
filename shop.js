import {db} from './firebase.js';
import { collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js';

const msg = document.getElementById('message');
const shoplist = document.getElementById('shop-list');

//adding items into shop
window.addshop = async function() {
 
  const Shopname = document.getElementById('shopname').value;
const category = document.getElementById('category').value;
const floor = document.getElementById('floor').value;
const description = document.getElementById('description').value;

if (!Shopname || !category || !floor) {
  msg.textContent = 'please fill all fields';
  return;
   
}
try {
  await addDoc(collection(db,'shops'), {
    Shopname,
    category,
    floor,
    description,
    created: new Date().toISOString()
  });
  msg.textContent = 'shop added successfully';
  loadshops();
} catch (error) {
  msg.textContent = error.message;
}
}

async function loadshops() {
  shoplist.innerHTML = '';
  const querySnapshot = await getDocs(collection(db,'shops'));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement('div');
    div.className = 'shop-item';
    div.innerHTML =`<strong>${data.Shopname}</strong><br>
    Category: ${data.category}<br>
    Floor: ${data.floor}<br>
    ${data.description || ''}
    `;
    shoplist.appendChild(div);
  });
}loadshops();