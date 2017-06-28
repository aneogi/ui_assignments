function saveToLocalStrorage(){
  var emailField = document.getElementById('email');
  emailField.setCustomValidity(emailField.value + " is invalid!. Please try again !")

  var contact = {'email': document.getElementById('email').value, 'telephone': document.getElementById('telephone').value,
                 'url': document.getElementById('url').value, 'range': document.getElementById('range').value
               };
   console.console.log(JSON.stringify(contact));
   localStorage.setItem('contact', JSON.stringify(contact));

}
