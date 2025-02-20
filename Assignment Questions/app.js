//1 -> Create a new input and button element on the page using JavaScript only. Set the text button to "Click Me"
let btn = document.createElement("button");
let input = document.createElement("input");
let br = document.createElement("br");

btn.innerText = "Click Me";
btn.classList.add("btn"); 

document.querySelector("body").append(btn);
document.querySelector("body").append(br);
document.querySelector("body").append(input);

//2 ->

