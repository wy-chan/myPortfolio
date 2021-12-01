
var currentSlide = [0];

/*Adjust the length of currentSlide array*/
function addSlides(){
  var slideNumber = document.getElementsByClassName("slide").length;
  for(i=1;i<slideNumber;i++){
    currentSlide.push(0);
  }
}
/*Reload tile box animation at top section*/
function reloadTileBox(){
  e1 = document.getElementById("Tile-box-box1");
  e2 = document.getElementById("Tile-box-box2");
  e1.classList.remove("Tile-box_anim1");
  void e1.offsetWidth;
  e1.classList.add("Tile-box_anim1");
  e2.classList.remove("Tile-box_anim2");
  void e2.offsetWidth;
  e2.classList.add("Tile-box_anim2");
}

/*Left right buttons*/
function moveRight(i, max, boxWidth) {
  document.getElementsByClassName("slide")[i].getElementsByClassName("slide-box")[currentSlide[i]].style.opacity = "0.3";
  currentSlide[i] += 1; 

  showSlide(i, max, boxWidth);

}
function moveLeft(i, max, boxWidth) {
  document.getElementsByClassName("slide")[i].getElementsByClassName("slide-box")[currentSlide[i]].style.opacity = "0.3";
  currentSlide[i] -= 1; 

  showSlide(i, max, boxWidth);
}

function showSlide(i, max, boxWidth) {
let shift = currentSlide[i] * -boxWidth;
 
switch(currentSlide[i]){
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
    document.getElementsByClassName("slide")[i].getElementsByClassName("slide-box")[currentSlide[i]].style.opacity = "1";
}
