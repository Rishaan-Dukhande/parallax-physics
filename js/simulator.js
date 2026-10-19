const canvas = document.getElementById("myCanvas");
const pen = canvas.getContext("2d");
pen.fillStyle = "white";
const launchButton = document.createElement("button");

//variables that are constant in projectile motion
const g = 9.8; //gravity
const scale = 10; //10px per meter
const ground = 300; //ground is at y = 450px


//variables that change or are set by the user
let t = 0; //time
let speed = 0;
let angle = 0;

pen.beginPath() //used for creating a new, unconnected path
pen.fillRect(0, ground, canvas.width, 2);
pen.arc(8, ground - 8, 8, 0, 2*Math.PI, true);
pen.fill();

function calculateNewPosition(previousX, previousY){
    t++;
    let x = previousX + 10;
    vy = speed * Math.sin(angle) - gt;
    let y = previousY + vy; 
    return [x,y];
}



launchButton.addEventListener("click", () => {
    


}

)

