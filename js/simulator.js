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
let angle = 0; //in degrees

pen.beginPath() //used for creating a new, unconnected path
pen.fillRect(0, ground, canvas.width, 2);
pen.arc(8, ground - 8, 8, 0, 2*Math.PI, true);
pen.fill();

function calculateNewPosition(t){
    let radians = angle / 180 * Math.PI;
    let x = speed * Math.cos(radians);
    let y = speed * Math.sin(radians) * t - g * t * t;
    return [x,y];
}


launchButton.addEventListener("click", () => {
    


}

)

speed = 20;
angle = 45;
console.log(calculateNewPosition(9.2))
