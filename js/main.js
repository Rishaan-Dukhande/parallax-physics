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

    //Creating a span
    const span = document.createElement("span");
    span.classList.add("card-tag");

    const h2 = document.createElement("h2");
    h2.classList.add("card-title"); // adds card-title class from css to the heading2 element
    const p = document.createElement("p");
    p.classList.add("card-text");
    span.textContent = card.type;
    h2.textContent = card.title;
    p.textContent = card.text;
    app.replaceChildren();
    app.appendChild(span);
    app.appendChild(h2); //header2 comes before the paragraph/card description
    app.appendChild(p);

    //Controls button disabling
    nextCard.disabled = (cardNum === lessons[0].cards.length - 1);
    previousCard.disabled = (cardNum <= 0);

    if (card.type === "check"){
        const questionText = document.createElement("p");
        questionText.classList.add("card-text");
        questionText.textContent = card.question;
        const choicesDiv = document.createElement("div");
        choicesDiv.classList.add("choices");
        card.choices.forEach((choice, i) => {
            const button = document.createElement("button");
            button.classList.add("choice");
            button.textContent = choice;
            div.appendChild(button);
        });
        const feedbackDiv = document.createElement("div");
        feedbackDiv.classList.add("feedback");
        card.choices.forEach((choice, i) => {
            if (i === card.answer) {
                //
            }
        })
        app.appendChild(choicesDiv);
        app.appendChild(feedbackDiv);
    }
}



startButton.addEventListener("click", () => {
    heading1.textContent = lessons[0].title;
    renderCard(lessons[0].cards[cardNum]);
    // Start button is disabled after clicked even once
    startButton.disabled = true;

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