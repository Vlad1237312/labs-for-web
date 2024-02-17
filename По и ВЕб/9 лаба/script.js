let sum = 0;
function addValue(value) {
  sum += value;
}
function getResult() {
  alert("Сумма нажатых цифр: " + sum);
  sum = 0;
}
let element1 = document.querySelector("td:nth-child(1)");
let element2 = document.querySelector("td:nth-child(2)");
let element3 = document.querySelector("td:nth-child(3)");
let element4 = document.querySelector("td:nth-child(4)");
let element5 = document.querySelector("td:nth-child(5)");
let element6 = document.querySelector("td:nth-child(6)");
element1.addEventListener("mouseover", function(){
  element1.classList.add("cl2");
});
element1.addEventListener("mouseout", function(){
  element1.classList.remove("cl2");
  element1.classList.add("cl5");
});
element2.addEventListener("dblclick", function(){
  element2.classList.add("cl3");
});
element3.addEventListener("click", function(){
  element3.classList.add("cl4");
});
element4.addEventListener("mouseover", function(){
  element4.style.color = "yellow";
});
element4.addEventListener("mouseout", function(){
  element4.style.color = "black";
});
element5.addEventListener("dblclick", function(){
  element5.style.backgroundColor = "yellow";
});
element6.addEventListener("click", function(){
  element6.style.fontStyle = "italic";
});
let greeting = prompt("Введите ваше имя");
if(greeting){
  alert("Привет, " + greeting + "!");
}else{
  alert("Привет, незнакомец!");
}
let text = document.querySelector("body > p");
text.addEventListener("mouseover", function(){
  text.style.display = "none";
});
text.addEventListener("mouseout", function(){
  text.style.display = "block";
});
function hideText() {
  document.getElementById("text").classList.add("hide");
}
function showText() {
  document.getElementById("text").classList.remove("hide");
}