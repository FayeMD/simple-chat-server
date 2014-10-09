document.addEventListener("keyup",function(event){userdata(event);},false);

function userdata(event) {
  var userInput = event;

  if (userInput.keyCode === 13) { 
  var msg = document.getElementById("text_box").value;
console.log(msg);
var x = document.createElement("P");
var t = document.createTextNode(msg);
x.appendChild(t);
document.getElementById("msg_area").appendChild(x);
document.getElementById("text_box").value = "";
  }

}


