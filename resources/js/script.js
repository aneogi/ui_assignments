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
