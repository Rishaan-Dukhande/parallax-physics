//This is where all lesson progress and user statistics will be stored


//returns saved progress
function loadProgress(){
    if (localStorage.getItem("parallax-progress") === null){
        return {};
    } else {
        return JSON.parse("parallax-progress");
    }
}

function saveStars(lessonID, stars){
    loadProgress();
    lessonID = Math.max(lessonID, stars);
    JSON.stringify(lessonID);
}