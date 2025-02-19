// Q-1
let quesOne = document.createElement("p");
quesOne.innerText = "Hey, I'm red";
document.querySelector("body").append(quesOne);

quesOne.classList.add("red");

// Q-2
h3 = document.createElement("h3");
h3.innerText = "Hi, I am blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

// Q-3
div = document.createElement("div");
h1 = document.createElement("h1");
p = document.createElement("p");

h1.innerText = "I'm in a div";
p.innerText = "I'm in a div too";

div.append(h1);
div.append(p);

div.classList.add("div");
document.querySelector("body").append(div);