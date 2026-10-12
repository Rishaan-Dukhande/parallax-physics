import {lessons} from "./lessons.js"
const startButton = document.getElementById("startButton")
const nextCard = document.getElementById("nextCard")
const previousCard = document.getElementById("previousCard")
const heading1 = document.getElementById("title")
let cardNum = 0;
startButton.disabled = false;
nextCard.disabled = true;
previousCard.disabled = true;

function renderCard(card) {
    const app = document.getElementById("app");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = card.title;
    p.textContent = card.text;
    app.replaceChildren();
    app.appendChild(h2); //header2 comes before the paragraph/card description
    app.appendChild(p);

    //Controls button disabling
    nextCard.disabled = (cardNum === lessons[0].cards.length - 1);
    previousCard.disabled = (cardNum <= 0);

}


startButton.addEventListener("click", () => {
    heading1.textContent = lessons[0].title;
    renderCard(lessons[0].cards[cardNum]);
    startButton.disabled = true;
    nextCard.disabled = false;
    previousCard.disabled = true;

});

nextCard.addEventListener("click", () => {
    if(cardNum < lessons[0].cards.length - 1){
        cardNum++;
    } 
    
    renderCard(lessons[0].cards[cardNum]);
});

previousCard.addEventListener("click", () => {
    if(cardNum > 0){
        cardNum--;
    }
    renderCard(lessons[0].cards[cardNum]);
});