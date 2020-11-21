var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img1").setAttribute("src", "images/dicee" + randomNumber1 + ".svg");

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector(".img2").setAttribute("src", "images/dicee" + randomNumber2 + ".svg");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "☝️ Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "✌️ Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "🤞 Draw!";
}

