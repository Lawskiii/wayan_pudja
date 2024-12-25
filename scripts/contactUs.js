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

