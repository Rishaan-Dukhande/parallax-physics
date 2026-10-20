const canvas = document.getElementById("myCanvas");
const pen = canvas.getContext("2d");
pen.fillStyle = "white";
const launchButton = document.createElement("button");

//variables that are constant in projectile motion
const g = 9.8; //gravity
const scale = 10; //10px per meter
const ground = 300; //ground is at y = 450px
const launchX = 8;
const radius = 8;
const launchY = ground - radius;

//variables that change or are set by the user
let t = 0; //time
let speed = 0;
let angle = 0; //in degrees

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
    t += 1/60; //adds 1/60 because frame rate is 60fps
    let coord = mapCanvas(t);
    //draw new screen
    pen.beginPath();
    pen.arc(coord[0], coord[1], radius, 0, 2*Math.PI, true);
    //call function again
    requestAnimationFrame(drawFrame()); //This takes the drawFunction and runs it again
    //for above, a for loop should not be used because the motion will just be a teleportation back to front

}
launchButton.addEventListener("click", () => {
    


}

)

//tester code
speed = 20;
angle = 60;
drawFrame();
console.log(mapCanvas(2));
for (let i = 0; i < 4; i+=0.2){
    let coord = mapCanvas(i);
    pen.beginPath();
    pen.arc(coord[0], coord[1], 3, 0, 2*Math.PI, true);
    pen.fill();
}

