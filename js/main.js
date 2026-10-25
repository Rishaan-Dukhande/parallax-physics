import {lessons} from "./lessons.js"
import {saveStars, loadProgress} from "./progress.js"
import {drawScene, hitCount} from "./simulator.js"

const homeButton = document.getElementById("homeButton")
const nextCard = document.getElementById("nextCard")
const previousCard = document.getElementById("previousCard")
const heading1 = document.getElementById("title")
const launchButton = document.getElementById("launchButton");
const nextQuestionButton = document.createElement("button");
nextQuestionButton.classList.add("btn-primary");
nextQuestionButton.textContent = "Next Question";
const app = document.getElementById("app");

let questions = [];
//for boss battle
let hitsAtStart = 0;
let bossHealth = 10;
let lives = 3;
let streak = 0;
//for lessons + boss
let cardNum = 0;
let mistakes = 0;
let checkAnswered = false;
let currLesson = lessons[1]; //Number can be changed anytime (does not have to be 0)
launchButton.disabled = true;
homeButton.disabled = false;
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

//This shows the feedback and enables the next Card when the user clicks the correct answer
function showAnswered(card, choicesDiv, feedbackDiv){
    choicesDiv.querySelectorAll("button")[card.answer].classList.add("choice--correct");
    choicesDiv.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });
    feedbackDiv.hidden = false;
    feedbackDiv.textContent = card.explanation;
    nextCard.disabled = false;
    checkAnswered = true;
}

//This shows the feedback and enables the next Card when the user clicks the correct answer
function showBossAnswer(card, choicesDiv, feedbackDiv){
    choicesDiv.querySelectorAll("button")[card.answer].classList.add("choice--correct");
    choicesDiv.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
    });
    feedbackDiv.hidden = false;
    feedbackDiv.textContent = card.explanation;

}


// This function renders the cards for each lesson on the screen in the app element
function renderCard(card) {
    homeButton.disabled = false; //enables home Button when not on home screen
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
    nextCard.disabled = (cardNum === currLesson.cards.length - 1);
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
                    showAnswered(card, choicesDiv, feedbackDiv);

                } else { 
                    button.classList.add("choice--wrong");
                    feedbackDiv.textContent = "Not quite, try again";
                    feedbackDiv.hidden = false;
                    button.disabled = true;
                    mistakes++; 
                }

            });
            choicesDiv.appendChild(button);
        });
        app.appendChild(questionText);
        app.appendChild(choicesDiv);
        app.appendChild(feedbackDiv);

        if (checkAnswered === true) showAnswered(card, choicesDiv, feedbackDiv);
    }

    //displays stars in summary
    if (card.type === "summary") {
        let stars = calculateStars();
        const cardSummary = document.createElement("p");
        cardSummary.classList.add("card-text");
        cardSummary.textContent = "⭐".repeat(stars); // "".repeat(n) function repeats the inputted string n times
        app.appendChild(cardSummary);
        saveStars(currLesson.id, stars); 
        homeButton.disabled = false;
        previousCard.disabled = true;
    }




}

// This function renders the questions for the boss battle
function showBossQuestion(card) {
    homeButton.disabled = false; //enables home Button when not on home screen
    launchButton.disabled = true;
    //Creating a span
    const span = document.createElement("span");
    span.classList.add("card-tag");

    const playerData = document.createElement("span");
    playerData.classList.add("card-tag");
    playerData.textContent = "Lives: " + lives + "  Streak: " + streak + "  Boss Health: " + bossHealth;

    const h2 = document.createElement("h2");
    h2.classList.add("card-title"); // adds card-title class from css to the heading2 element
    
    const p = document.createElement("p");
    p.classList.add("card-text");
    
    span.textContent = card.type;
    h2.textContent = card.title;
    p.textContent = card.text;
    app.replaceChildren();
    app.appendChild(playerData);
    app.appendChild(span);
    app.appendChild(h2); //header2 comes before the paragraph/card description
    app.appendChild(p);

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
                showBossAnswer(card, choicesDiv, feedbackDiv);
                streak++;
                if (streak >= 3) {
                    streak = 0;
                    lives++;
                }
                launchButton.disabled = false;

                app.appendChild(nextQuestionButton);

            } else { 
                button.classList.add("choice--wrong");
                feedbackDiv.textContent = "Incorrect. -1 life";
                feedbackDiv.hidden = false;
                button.disabled = true;
                lives--;
                streak = 0;
                launchButton.disabled = true;

                if (lives === 0) {
                    displayDefeat();
                }
            }
            playerData.textContent = "Lives: " + lives + "  Streak: " + streak + "  Boss Health: " + bossHealth;
        });
        choicesDiv.appendChild(button);
    });
    app.appendChild(questionText);
    app.appendChild(choicesDiv);
    app.appendChild(feedbackDiv);
}

//this function shows the defeat screen if the user runs out of lives
function displayDefeat(){
    app.replaceChildren();
    const defeatTitle = document.createElement("h1");
    defeatTitle.textContent = "DEFEATED"
    const defeatExplanation = document.createElement("span");
    defeatExplanation.textContent = "You lost all your lives. You dealt " + (10-bossHealth) + " damage to the boss";

    app.appendChild(defeatTitle);
    app.appendChild(defeatExplanation);
    const endBoss = document.getElementById("homeButton");
    endBoss.textContent = "End Battle";
}

//this function shows the victory screen if the user defeats the boss
function displayVictory(){
    app.replaceChildren();
    const victoryTitle = document.createElement("h1");
    victoryTitle.textContent = "VICTORY!"
    const victoryExplanation = document.createElement("span");
    victoryExplanation.textContent = "Congratulations! You have defeated the Unit 1 Boss with " + lives + " lives left. You have shown your excellence with kinematics!";

    app.appendChild(victoryTitle);
    app.appendChild(victoryExplanation);
    const returnHome = document.getElementById("homeButton");
    returnHome.textContent = "Return Home";
}

homeButton.addEventListener("click", () => {
    showHome();
    heading1.textContent = "PARALLAX"
    homeButton.disabled = true;
    nextCard.disabled = true;
    previousCard.disabled = true;
    app.classList.remove("boss-mode");
    //draws Scene after boss is removed
    drawScene();
});

nextCard.addEventListener("click", () => {
    if(cardNum < currLesson.cards.length - 1){
        cardNum++;
    } 
    
    renderCard(currLesson.cards[cardNum]);
});

previousCard.addEventListener("click", () => {
    if(cardNum > 0){
        cardNum--;
    }
    renderCard(currLesson.cards[cardNum]);
});

// ========= Home Screen ==========
function showHome(){
    app.replaceChildren();
    homeButton.textContent = "Home";
    launchButton.disabled = false;
    const lessonConstellation = document.createElement("div");
    lessonConstellation.classList.add("map");
    let foundCurrent = false;
    let positions = [{x: 15, y:60}, {x: 30, y:30}, {x: 45, y:16}, {x: 60, y:19}, {x: 75, y:38}, {x: 90, y:74}];

    const bossButton = document.createElement("button");
    bossButton.textContent = "👾";
    bossButton.classList.add("node");
    bossButton.classList.add("node-boss");
    bossButton.disabled = true;
    bossButton.style.left = positions[5].x + "%";
    bossButton.style.top = positions[5].y + "%";

    lessonConstellation.appendChild(bossButton);

    lessons.forEach((lesson, i) => {
        const lessonButton = document.createElement("button");
        lessonButton.classList.add("node");
        lessonConstellation.appendChild(lessonButton);

        lessonButton.style.left = positions[i].x + "%";
        lessonButton.style.top = positions[i].y + "%";
        lessonButton.title = lesson.title;
        
        let lessonProgress = loadProgress();
        if (lessonProgress[lesson.id] === undefined){
            lessonButton.textContent = lesson.title.split(" ")[0]; //", Status: Not started yet"
            if (foundCurrent === false) {
                lessonButton.classList.add("node--current");
            } else {
                lessonButton.classList.add("node--locked");
                lessonButton.disabled = true;
            }
            foundCurrent = true;

        } else {
            lessonButton.textContent = lesson.title.split(" ")[0]; // ", Status: " + "⭐".repeat(lessonProgress[lesson.id]);
            lessonButton.classList.add("node--done");

        }

        lessonButton.addEventListener("click", () => {
            currLesson = lesson;
            cardNum = 0;
            mistakes = 0;
            checkAnswered = false;

            //same as previous start button
            heading1.textContent = currLesson.title;
            renderCard(currLesson.cards[cardNum]);
        });
        lessonConstellation.append(lessonButton);

    });

    if (foundCurrent === false) bossButton.disabled = false;


    bossButton.addEventListener("click", () => {
        launchButton.disabled = true;
        app.classList.add("boss-mode");
        drawScene();
        hitsAtStart = hitCount;
        questions = [];
        bossHealth = 10;
        lives = 3;
        streak = 0;
        lessons.forEach((lesson) => {
            lesson.cards.forEach((card) => {
                if (card.type === "check") {
                    questions.push(card);
                }
            });
        });
        showBossQuestion(questions[Math.floor(Math.random()*questions.length)]);
    });

    app.appendChild(lessonConstellation);
}
//disables launch Button if the user is in the boss battle
launchButton.addEventListener("click", () => {
    if (app.classList.contains("boss-mode")) {
        launchButton.disabled = true;
    }
});

nextQuestionButton.addEventListener("click", () => {
    bossHealth = 10 - (hitCount - hitsAtStart);
    if (bossHealth <= 0) {
        displayVictory();
    } else {
        drawScene();
        showBossQuestion(questions[Math.floor(Math.random()*questions.length)]);
    }
});

showHome();
homeButton.disabled = true;