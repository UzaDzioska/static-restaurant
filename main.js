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
modalBtn2.addEventListener('click', openModal);
modalBtn3.addEventListener('click', openModal);
modalBtn4.addEventListener('click', openModal);
modalBtn5.addEventListener('click', openModal);
modalBtn6.addEventListener('click', openModal);
modalBtn7.addEventListener('click', openModal);
modalBtn8.addEventListener('click', openModal);
modalBtn9.addEventListener('click', openModal);
modalBtn10.addEventListener('click', openModal);
modalBtn11.addEventListener('click', openModal);
modalBtn12.addEventListener('click', openModal);
modalBtn13.addEventListener('click', openModal);
modalBtn14.addEventListener('click', openModal);
modalBtn15.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal1.style.display = 'block';
    modal2.style.display = 'block';
    modal3.style.display = 'block';
    modal4.style.display = 'block';
    modal5.style.display = 'block';
    modal6.style.display = 'block';
    modal7.style.display = 'block';
    modal8.style.display = 'block';
    modal9.style.display = 'block';
    modal10.style.display = 'block';
    modal11.style.display = 'block';
    modal12.style.display = 'block';
    modal13.style.display = 'block';
    modal14.style.display = 'block';
    modal15.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';
    modal7.style.display = 'none';
    modal8.style.display = 'none';
    modal9.style.display = 'none';
    modal10.style.display = 'none';
    modal11.style.display = 'none';
    modal12.style.display = 'none';
    modal13.style.display = 'none';
    modal14.style.display = 'none';
    modal15.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal1){
    modal1.style.display = 'none';
  }
    if(e.target == modal2){
    modal2.style.display = 'none';
    }
    if(e.target == modal3){
    modal3.style.display = 'none';
    }
    if(e.target == modal4){
    modal4.style.display = 'none';
    }
    if(e.target == modal5){
    modal5.style.display = 'none';
    }
    if(e.target == modal6){
    modal6.style.display = 'none';
    }
    if(e.target == modal7){
    modal7.style.display = 'none';
    }
    if(e.target == modal8){
    modal8.style.display = 'none';
    }
    if(e.target == modal9){
    modal9.style.display = 'none';
    }
    if(e.target == modal10){
    modal10.style.display = 'none';
    }
    if(e.target == modal11){
    modal11.style.display = 'none';
    }
    if(e.target == modal12){
    modal12.style.display = 'none';
    }
    if(e.target == modal13){
    modal13.style.display = 'none';
    }
    if(e.target == modal14){
    modal14.style.display = 'none';
    }
    if(e.target == modal15){
    modal15.style.display = 'none';
  }
}