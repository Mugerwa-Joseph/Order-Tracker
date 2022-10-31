function update() {
  var checked = 0;
  var myBar = document.getElementById("myBar");
  //Reference the Form.
  var progress = document.getElementById("progress");

  //Reference all the CheckBoxes in Table.
  boxes = progress.querySelectorAll("input[type='checkbox']:checked");
 checked = boxes.length

  myBar.style.width = ((checked / 5) * 100) + "%";
  if (checked == 0) {
    alert("Please select CheckBox(es).");
  }
return true;
}

checks = document.querySelectorAll("input[type='checkbox']");
checks.forEach(function(box) {
  box.addEventListener("change", function(e) {
      update()
  });
});
function myFunction() {
  var checkBox = document.getElementById("chkReceived");
  var text = document.getElementById("text");
  
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}


   





