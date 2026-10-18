//This is where all lesson progress and user statistics will be stored

let progress = JSON.parse(localStorage.getItem("parallax-progress"));


//returns saved progress
export function loadProgress(){
    if (localStorage.getItem("parallax-progress") === null){
        return {};
    } else {
        return JSON.parse(localStorage.getItem("parallax-progress"));
    }
}

export function saveStars(lessonID, stars){
    progress = loadProgress();
    localStorage.setItem("parallax-progress", Math.max(progress[stars], stars));
}