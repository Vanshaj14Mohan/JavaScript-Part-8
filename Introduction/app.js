let oldImg = document.getElementsByClassName("oldImg")

for(let i =0; i<oldImg.length; i++){
    oldImg[i].src = "assets/spiderman_img.png"
    // console.dir(oldImg[i]);
    // console.dir(oldImg[i].src);
    console.dir(`Value of image number ${i} is changed`);
}