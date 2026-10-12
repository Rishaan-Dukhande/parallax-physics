import {lessons} from "./lessons.js"
const startButton = document.getElementById("startButton")
const heading1 = document.getElementById("title")

function renderCard(card) {
    const app = document.getElementById("app");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = card.title;
    p.textContent = card.text;
    app.appendChild(h2); //header2 comes before the paragraph/card description
    app.appendChild(p);
}

startButton.addEventListener("click", () => {
    heading1.textContent = lessons[0].title;
    renderCard(lessons[0].cards[0]);

});