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
  var fetched_data = document.getElementById('fetched_data');

  var indx = 0;
  var rowTable = '<table cellpadding="0" cellspacing="0">';
  rowTable += '<tr><th>'+'Field'+'</th><th>'+'Value'+'</th></tr>';

  $.each(contact,function(key,value){
    if (indx%2 == 0) {
      rowTable += '<tr class="even"><td>'+key+'</td><td>'+value+'</td></tr>';
    }else{
      rowTable += '<tr class="odd"><td>'+key+'</td><td>'+value+'</td></tr>';
    }
    indx +=1;
  });

  rowTable += '</table>';
  fetched_data.innerHTML = rowTable;
}
