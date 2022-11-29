// Color flipper On button click the background changes color, as well as the text which displays the colorcode

let colorButton= document.querySelector("#colorBtn");
let page2H1= document.querySelector("#btnId");

colorButton.addEventListener("click",myFunction);

page2H1.addEventListener("click",hideFunction);

function myFunction(){
    let randomHex= Math.floor(Math.random()*16777215).toString(16);
    colorButton.innerHTML ="Woah did it change?";
    document.body.style.backgroundColor = "#"+randomHex}
// A color changing button 

function bingFunction() {
    var x = document.getElementById("containerA");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }