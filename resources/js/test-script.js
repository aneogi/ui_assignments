function saveToLocalStorage(){
  var emailField = document.getElementById('email');
  emailField.setCustomValidity(emailField.value + " is invalid!. Please try again !")

  var contact = {'email': document.getElementById('email').value, 'telephone': document.getElementById('telephone').value,
                 'url': document.getElementById('url').value, 'range': document.getElementById('range').value
               };
   console.log(JSON.stringify(contact));
   localStorage.setItem('contact', JSON.stringify(contact));
}

function fetchFromLocalStrorage(){
  var contact = JSON.parse(localStorage.getItem('contact'));

  rowHead = '<div class="row">'+'<div class="cell">'+'Field'+'</div>'+'<div class="cell">'+'Value'+'</div>'+'</div>'
  rowEmail = '<div class="row">'+'<div class="cell">'+'Email'+'</div>'+'<div class="cell">'+contact['email']+'</div>'+'</div>'
  rowTelephone = '<div class="row">'+'<div class="cell">'+'Telephone'+'</div>'+'<div class="cell">'+contact['telephone']+'</div>'+'</div>'
  rowUrl = '<div class="row">'+'<div class="cell">'+'Url'+'</div>'+'<div class="cell">'+contact['url']+'</div>'+'</div>'
  rowRange = '<div class="row">'+'<div class="cell">'+'Range'+'</div>'+'<div class="cell">'+contact['range']+'</div>'+'</div>'

  varTable = '<div class="table">' + rowHead + rowEmail + rowTelephone + rowUrl + rowRange + '</div>'

  var form7 = document.getElementById('frm7');
  form7.innerHTML = varTable
}
