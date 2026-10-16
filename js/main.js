import {lessons} from "./lessons.js"
const startButton = document.getElementById("startButton")
const nextCard = document.getElementById("nextCard")
const previousCard = document.getElementById("previousCard")
const heading1 = document.getElementById("title")
let cardNum = 0;
let mistakes = 0;
startButton.disabled = false;
nextCard.disabled = true;
previousCard.disabled = true;

//This calculates the stars a user is awarded based on the number of mistakes made on a lesson quiz
function calculateStars(){
    if (mistakes === 0){
        return 3;
    } else if (mistakes === 1){
        return 2;
    } else {
        return 1;
    }
}



// This function renders the cards for each lesson on the screen in the app element
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
        nextCard.disabled = true;
        const questionText = document.createElement("p");
        questionText.classList.add("card-text");
        questionText.textContent = card.question;
        const choicesDiv = document.createElement("div");
        choicesDiv.classList.add("choices");
        const feedbackDiv = document.createElement("div");
        feedbackDiv.hidden = true;
        feedbackDiv.classList.add("feedback");
        card.choices.forEach((choice, i) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("choice");

            //adds an eventlistener to each choice button so it is clickable/interactive
            button.addEventListener("click", () => {
                if (i === card.answer) {
                    button.classList.add("choice--correct");
                    feedbackDiv.hidden = false;
                    feedbackDiv.textContent = card.explanation;
                    nextCard.disabled = false;
                    choicesDiv.querySelectorAll("button").forEach((choiceButton) => {
                        choiceButton.disabled = true;
                    });

                } else { 
                    button.classList.add("choice--wrong");
                    feedbackDiv.textContent = "Not quite, try again";
                    feedbackDiv.hidden = false;
                    button.disabled = true;
                    mistakes++; //still need to add mistakes
                }

            });
            choicesDiv.appendChild(button);
        });
        app.appendChild(questionText);
        app.appendChild(choicesDiv);
        app.appendChild(feedbackDiv);
    }

    //displays stars in summary
    if (card.type === "summary") {
        const cardSummary = document.createElement("p");
        cardSummary.classList.add("card-text");
        cardSummary.textContent = "⭐".repeat(calculateStars()); // "".repeat(n) function repeats the inputted string n times
        app.appendChild(cardSummary);
    }




}



startButton.addEventListener("click", () => {
    heading1.textContent = lessons[0].title;
    renderCard(lessons[0].cards[cardNum]);
    // Start button is disabled after clicked even once
    startButton.disabled = true;
    mistakes = 0;
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