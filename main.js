// Get modal element
let modal1 = document.getElementById('simpleModal1');
let modal2 = document.getElementById('simpleModal2');
let modal3 = document.getElementById('simpleModal3');
let modal4 = document.getElementById('simpleModal4');
let modal5 = document.getElementById('simpleModal5');
let modal6 = document.getElementById('simpleModal6');
let modal7 = document.getElementById('simpleModal7');
let modal8 = document.getElementById('simpleModal8');
let modal9 = document.getElementById('simpleModal9');
let modal10 = document.getElementById('simpleModal10');
let modal11 = document.getElementById('simpleModal11');
let modal12 = document.getElementById('simpleModal12');
let modal13 = document.getElementById('simpleModal13');
let modal14 = document.getElementById('simpleModal14');
let modal15 = document.getElementById('simpleModal15');

// Get open modal button
let modalBtn1 = document.getElementById('modalBtn1');
let modalBtn2 = document.getElementById('modalBtn2');
let modalBtn3 = document.getElementById('modalBtn3');
let modalBtn4 = document.getElementById('modalBtn4');
let modalBtn5 = document.getElementById('modalBtn5');
let modalBtn6 = document.getElementById('modalBtn6');
let modalBtn7 = document.getElementById('modalBtn7');
let modalBtn8 = document.getElementById('modalBtn8');
let modalBtn9 = document.getElementById('modalBtn9');
let modalBtn10 = document.getElementById('modalBtn10');
let modalBtn11 = document.getElementById('modalBtn11');
let modalBtn12 = document.getElementById('modalBtn12');
let modalBtn13 = document.getElementById('modalBtn13');
let modalBtn14 = document.getElementById('modalBtn14');
let modalBtn15 = document.getElementById('modalBtn15');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn1.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}