const canvas = document.getElementByID("myCanvas");
const pen = canvas.getContext("2d");
const launchButton = document.createElement("button");

//variables that are constant in projectile motion
const gravity = 9.8;
const scale = 10; //10px per meter
const ground = 450; //ground is at y = 450px
const initalPosition = 40;

//variables that change or are set by the user
let t = 0;
let speed = 0;
let angle = 0;

pen.fillRect(30,400,100,2);
pen.arc(30, 400, 8, 0, 360, true);

launchButton.addEventListener("click", () => {
    


}

)