// let oldImg = document.getElementsByClassName("oldImg")
// for(let i =0; i<oldImg.length; i++){
//     oldImg[i].src = "assets/spiderman_img.png"
//     // console.dir(oldImg[i]);
//     // console.dir(oldImg[i].src);
//     console.dir(`Value of image number ${i} is changed`);
// }
//eg selecting all paragraph tag 
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a")); //for all anchor tags in div

let links = document.querySelectorAll(".box a"); //printing color for all anchor tags present in .box

// for(link of links){ using for of loop better way
//     link.style.color = "Red";
// }

for(let i = 0; i<links.length; i++){
    links[i].style.color = "Purple";
}