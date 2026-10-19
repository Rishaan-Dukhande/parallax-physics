const canvas = document.getElementById("myCanvas");
const pen = canvas.getContext("2d");
pen.fillStyle = "white";
const launchButton = document.createElement("button");

//variables that are constant in projectile motion
const gravity = 9.8;
const scale = 10; //10px per meter
const ground = 300; //ground is at y = 450px
const initalPosition = 100;

//variables that change or are set by the user
let t = 0;
let speed = 0;
let angle = 0;

pen.beginPath() //used for creating a new, unconnected path
pen.fillRect(initalPosition, ground, canvas.width, 2);
pen.arc(initalPosition, ground - 8, 8, 0, 2*Math.PI, true);
pen.fill();

function calculateNewPosition(){

}



launchButton.addEventListener("click", () => {
    


}

)

