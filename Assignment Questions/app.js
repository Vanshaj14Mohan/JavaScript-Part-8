//1 -> Create a new input and button element on the page using JavaScript only. Set the text button to "Click Me"
let btn = document.createElement("button");
let input = document.createElement("input");
let br = document.createElement("br");

btn.innerText = "Click Me";
btn.classList.add(".btn"); 

document.querySelector("body").append(btn);
document.querySelector("body").append(br);
document.querySelector("body").append(input);

//2 -> Add the following attributes to the element 
// : Change placeholder value of input to "username"
// : Change the id of the button to "btn"
btn.setAttribute("id","btn")
input.setAttribute("placeholder", "username");

//3 -> Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
btn = document.querySelector(".btn");
//done above.