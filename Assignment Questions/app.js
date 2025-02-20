//1 -> Create a new input and button element on the page using JavaScript only. Set the text button to "Click Me"
let button = document.createElement("button");
let input = document.createElement("input");
let br = document.createElement("br");
button.classList.add("btn"); 

button.innerText = "Click Me";


document.querySelector("body").append(button);
document.querySelector("body").append(br);
document.querySelector("body").append(input);

//2 -> Add the following attributes to the element 
// : Change placeholder value of input to "username"
// : Change the id of the button to "btn"
button.setAttribute("id","btn")
input.setAttribute("placeholder", "username");

//3 -> Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
btn = document.querySelector(".btn");
//done above.

//4 -> Create an h1 element on the page and it's text to "DOM Practice" underlined. Change it's color to purple.
h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.classList.add("h1");

document.body.appendChild(h1);

//5 -> Create a p tag on the page and set it's text to "Assignment Set" where set is bold.
p = document.createElement("p");
p.innerHTML = "Assignment <b>Set</b>";

// p.innerHTML = "<b>set</b>";

document.body.appendChild(p);
