emailjs.init('3CeqvMs5Vza9itCfc');

var parms = {
  firstName: document.getElementById('firstName-js').value,
  lastname: document.getElementById('lastName-js').value,
  emailAddress: document.getElementById('emailAddress-js').value,
  phoneNumber: document.getElementById('phoneNumber-js').value,
  messages: document.getElementById('messages-js').value,
}

let contactForm = document.getElementById('form-js');
let serviceId = "service_crtvn4l";
let templateId = "template_kphst87";

function sendMessages(){
  contactForm.addEventListener('submit', function(event){
    event.preventDefault();
  })
  
  emailjs.send(serviceId, templateId, parms)
  .then(res =>{
    alert('sent');
  })
  .catch(err =>{
    console.error('Error:', err);
    alert('failed to sent email');
  });
}

