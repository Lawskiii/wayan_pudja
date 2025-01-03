emailjs.init('3CeqvMs5Vza9itCfc');

let contactForm = document.getElementById('form-js');
let serviceId = "service_kc1iv4s";
let templateId = "template_kphst87";


contactForm.addEventListener('submit', function(event){
  event.preventDefault();
})

function sendMessages(){
  var parms = {
    firstName: document.getElementById('firstName-js').value,
    lastname: document.getElementById('lastName-js').value,
    emailAddress: document.getElementById('emailAddress-js').value,
    phoneNumber: document.getElementById('phoneNumber-js').value,
    messages: document.getElementById('messages-js').value,
  }
  
  emailjs.send(serviceId, templateId, parms)
  .then(res =>{
    alert('sent');
  })
  .catch(err =>{
    console.error('Error:', err);
    alert('failed to sent email');
  });
}

function test(){
  
  console.log(parms);
}

function showPopUp(){
  console.log('asdf')
  document.querySelector('.contact-container').classList.add('pop-up');
  document.querySelector('.Contact').classList.add('pop-up');

  document.querySelector('body').classList.add('pop-up');
  document.querySelector('.pageContainer').classList.add('pop-up');
}

function removePopUp(){
  document.querySelector('.contact-container').classList.remove('pop-up');
  document.querySelector('.Contact').classList.remove('pop-up');

  document.querySelector('body').classList.remove('pop-up');
  document.querySelector('.pageContainer').classList.remove('pop-up');
}

