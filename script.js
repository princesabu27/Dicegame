var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var imgElements = document.getElementsByTagName("img");
var h1Element = document.getElementsByTagName("h1")[0];
var linkElement = document.getElementsByTagName("link")[1];

imgElements[0].setAttribute("src", `images/dice${randomNumber1}.png`);
imgElements[1].setAttribute("src", `images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  h1Element.innerHTML = "Draw !";
  linkElement.setAttribute("href", `images/dice${randomNumber1}.png`);
} else if (randomNumber1 > randomNumber2) {
  h1Element.innerHTML = "&#128681 Player 1 wins";
  linkElement.setAttribute("href", `image/dice${randomNumber1}.png`);
} else {
  h1Element.innerHTML = "Player 2 wins &#128681";
  linkElement.setAttribute("href", `images/dice${randomNumber2}.png`);
}
