function fetchFromHTML(){
  document.forms.third_panel.box1.value = document.getElementById('tbox').value;
  document.forms.third_panel.box4.value = document.getElementById('tarea').value;

  var rad_sel = document.querySelector('input[name="radgrp"]:checked').value;
  document.forms.third_panel.box2.value = rad_sel;

  var chk_sel ='';
  var checkboxes = document.getElementsByName('chkbx');
  for (var j=0; j<checkboxes.length; j++){
    if (checkboxes[j].checked){
      chk_sel += checkboxes[j].value + ' ';
    }
  }
  document.forms.third_panel.box3.value = chk_sel;

  console.log(document.getElementById('tbox').value);
  console.log(document.getElementById('tarea').value);

}

function saveToLocalStorage(){
  var emailField = document.getElementById('email');
  emailField.setCustomValidity(emailField.value + " is invalid!. Please try again !")

  var contact = {'email': document.getElementById('email').value, 'telephone': document.getElementById('telephone').value,
                 'url': document.getElementById('url').value, 'range': document.getElementById('range').value };
   console.log(JSON.stringify(contact));
   localStorage.setItem('contact', JSON.stringify(contact));
}

function fetchFromLocalStorage(){
  var contact = JSON.parse(localStorage.getItem('contact'));


}




function fetchFromLocalStrorage1(){
  var contact = JSON.parse(localStorage.getItem('contact'));

  rowHead = '<div class="row">'+'<div class="cell">'+'Field'+'</div>'+'<div class="cell">'+'Value'+'</div>'+'</div>'
  rowEmail = '<div class="row">'+'<div class="cell">'+'Email'+'</div>'+'<div class="cell">'+contact['email']+'</div>'+'</div>'
  rowTelephone = '<div class="row">'+'<div class="cell">'+'Telephone'+'</div>'+'<div class="cell">'+contact['telephone']+'</div>'+'</div>'
  rowUrl = '<div class="row">'+'<div class="cell">'+'Url'+'</div>'+'<div class="cell">'+contact['url']+'</div>'+'</div>'
  rowRange = '<div class="row">'+'<div class="cell">'+'Range'+'</div>'+'<div class="cell">'+contact['range']+'</div>'+'</div>'

  varTable = '<div class="table">' + rowHead + rowEmail + rowTelephone + rowUrl + rowRange + '</div>'

  var fetched_data = document.getElementById('fetched_data');
  fetched_data.innerHTML = varTable
}













function popup(){
  document.forms.frm6.box1.value = document.getElementById('tbox').value;
  document.forms.frm6.box4.value = document.getElementById('tarea').value;

  var rad_sel = document.querySelector('input[name="radgrp"]:checked').value;
  document.forms.frm6.box2.value = rad_sel;

  var chk_sel ='';
  var checkboxes = document.getElementsByName('chkbx');
  for (var j=0; j<checkboxes.length; j++){
    if (checkboxes[j].checked){
      chk_sel += checkboxes[j].value + ' ';
    }
  }
  document.forms.frm6.box3.value = chk_sel;

}
