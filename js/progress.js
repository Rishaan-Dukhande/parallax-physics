//This is where all lesson progress and user statistics will be stored


//returns saved progress
function loadProgress(){
    if (localStorage.getItem("parallax-progress") === null){
        return {};
    } else {
        return JSON.parse(localStorage.getItem("parallax-progress"));
    }
}

function saveStars(lessonID, stars){
    progress = loadProgress();
    lessonID = Math.max(progress, stars);
    JSON.stringify(lessonID);
    localStorage.setItem(localStorage.getItem(progress), lessonID);
    JSON.parse(lessonID);
}