// Color flipper On button click the background changes color, as well as the text which displays the colorcode

let colorButton= document.querySelector("#colorBtn");
let page2H1= document.querySelector("#pageId");

colorButton.addEventListener("click",myFunction);

page2H1.addEventListener("click",page2Function);

function myFunction(){
    let randomHex= Math.floor(Math.random()*16777215).toString(16);
    colorButton.innerHTML ="Woah did it change?";
    document.body.style.backgroundColor = "#"+randomHex}
// A color changing button 

// function page2Function(){
//     page2H1.a
// }

