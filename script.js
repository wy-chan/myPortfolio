
var currentSlide = 0;

function moveRight(i, max) {
  document.getElementsByClassName("slide")[i].getElementsByClassName("slide-box")[currentSlide].style.opacity = "0.3";
  currentSlide += 1; 

  showSlide(i, max);
  console.log(i,max);
}
function moveLeft(i, max) {
  document.getElementsByClassName("slide")[i].getElementsByClassName("slide-box")[currentSlide].style.opacity = "0.3";
  currentSlide -= 1; 

  showSlide(i, max);
}

function showSlide(i, max) {
let shift = currentSlide * -300;

switch(currentSlide){
    case parseInt(max): 
    document.getElementsByClassName("slide-right")[i].disabled = true;
    document.getElementsByClassName("slide")[i].style.transform =  "translate("+shift+"px)";
    break;
    case 0: 
    document.getElementsByClassName("slide-left")[i].disabled = true;
    document.getElementsByClassName("slide")[i].style.transform =  "translate("+shift+"px)";
    break;
    default:
    document.getElementsByClassName("slide-right")[i].disabled = false;
    document.getElementsByClassName("slide-left")[i].disabled = false;
    document.getElementsByClassName("slide")[i].style.transform =  "translate("+shift+"px)";
}
    document.getElementsByClassName("slide")[i].getElementsByClassName("slide-box")[currentSlide].style.opacity = "1";
}
