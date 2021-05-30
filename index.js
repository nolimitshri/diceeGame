var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImgNow = "images/" + randomImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgNow);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins"
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins"
} else {
    document.querySelector("h1").innerHTML = "Its a Tie"
}