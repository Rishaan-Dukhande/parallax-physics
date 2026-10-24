const canvas = document.getElementById("myCanvas");
const pen = canvas.getContext("2d");
pen.fillStyle = "white";
const launchButton = document.getElementById("launchButton");
const speedSlider = document.getElementById("speedSlider");
const angleSlider = document.getElementById("angleSlider");
const speedLabel = document.getElementById("speedLabel");
const angleLabel = document.getElementById("angleLabel");
const app = document.getElementById("app");

//variables that are constant in projectile motion
const g = 9.8; //gravity
const scale = 10; //10px per meter
const ground = 300; //ground is at y = 450px
const launchX = 8;
const radius = 8;
const launchY = ground - radius;

//boss target
let targetX = 300;

//variables that change or are set by the user
let t = 0; //time
let speed = 20;
let angle = 45; //in degrees
let falling = false;

//inital pen place
pen.beginPath() //used for creating a new, unconnected path
pen.fillRect(0, ground, canvas.width, 2);
pen.arc(launchX, launchY, radius, 0, 2*Math.PI, true);
pen.fill();

function calculateNewPosition(t){
    let radians = angle / 180 * Math.PI;
    let x = speed * Math.cos(radians) * t;
    let y = speed * Math.sin(radians) * t - g * t * t / 2;
    return [x,y];
}

function mapCanvas(time){
    let physicsCoord = calculateNewPosition(time);
    let canvasX = physicsCoord[0] * scale + launchX;
    let canvasY = launchY - physicsCoord[1] * scale;
    return [canvasX, canvasY];
}

function drawFrame(){
    //erase current screen
    pen.clearRect(0, 0, canvas.width, canvas.height);
    
    if (app.classList.contains("boss-mode")) drawBoss();
    let coord = mapCanvas(t);
    //draw new screen
    if (coord[1] > launchY) {
        coord[1] = launchY;
        falling = false;
        angleSlider.disabled = false;
        speedSlider.disabled = false; 
    } else {
        falling = true;
        angleSlider.disabled = true;
        speedSlider.disabled = true;
    }

    if (falling) {
        t += 1/60; //adds 1/60 because frame rate is 60fps
        requestAnimationFrame(drawFrame); //This takes the drawFunction and runs it again
        //for above, a for loop should not be used because the motion will just be a teleportation back to front
    
    }
    pen.beginPath();
    pen.fillRect(0, ground, canvas.width, 2); //paints ground
    pen.arc(coord[0], coord[1], radius, 0, 2*Math.PI, true);
    pen.fill();
    

}


launchButton.addEventListener("click", () => {
    if (!falling){
        t=0;
        drawFrame();
    }
});

//tester code
/*
console.log(mapCanvas(2));
for (let i = 0; i < 4; i+=0.2){
    let coord = mapCanvas(i);
    pen.beginPath();
    pen.arc(coord[0], coord[1], 3, 0, 2*Math.PI, true);
    pen.fill();
}
    */

speedSlider.addEventListener("input", () =>{
    speed = Number(speedSlider.value);
    speedLabel.textContent = "Speed: " + speed + "m/s";
});

angleSlider.addEventListener("input", () =>{
    angle = Number(angleSlider.value);
    angleLabel.textContent = "Angle: " + angle + "˚";
});

//this function draws the boss
function drawBoss(){
    pen.font = "40px sans-serif";
    pen.textAlign = "center";
    pen.fillText("👾", targetX, 290)
}

export function drawScene(){
    //erase current screen
    pen.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();

    //draw ground
    pen.fillRect(0, ground, canvas.width, 2); //paints ground
    //draw ball
    pen.arc(launchX, launchY, radius, 0, 2*Math.PI, true);
    pen.fill();

    if (app.classList.contains("boss-mode")) drawBoss();
    
}