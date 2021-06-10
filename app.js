let y;
let x;
let rangDiv = document.getElementById("rangDiv");
let myRange = document.getElementById("myRange");
function myFunction() {
  var elmnt = document.getElementById("myDIV");
  x = elmnt.scrollLeft;
  y = elmnt.scrollTop;
  myRange.value = y;
}
