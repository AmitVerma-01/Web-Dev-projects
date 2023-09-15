var image1=Math.floor(Math.random() * 6) + 1;

var randomImageSource="images/dice" + image1 + ".png";

var im=document.querySelectorAll("img")[0];

im.setAttribute("src", randomImageSource);

var image2=Math.floor(Math.random() * 6 ) + 1;

var randomImageSource1="images/dice"+ image2 + ".png";

var im2=document.querySelectorAll("img")[1];

im2.setAttribute("src",randomImageSource1);

if(image1>image2){
    document.querySelector("h1").innerHTML="&#129409; Player 1 Wins!";
}
else if(image1<image2){
    document.querySelector("h1").innerHTML=" Player 2 wins! &#129409;";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}