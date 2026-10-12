import {lessons} from "./lessons.js"
const startButton = document.getElementById("startButton")
const heading1 = document.getElementById("title")

function renderCard(card) {
    const app = document.getElementById("app");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = card.title;
    p.textContent = card.text;
    app.replaceChildren();
    app.appendChild(h2); //header2 comes before the paragraph/card description
    app.appendChild(p);
}

let cardNum = 0;
startButton.addEventListener("click", () => {
    heading1.textContent = lessons[0].title;
    while(cardNum < cards.length){
        renderCard(lessons[0].cards[cardNum]);
        cardNum++;
    }
    cardNum = 0;

});