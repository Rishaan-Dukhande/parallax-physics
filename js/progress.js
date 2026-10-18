//This is where all lesson progress and user statistics will be stored


//returns saved progress
export function loadProgress(){
    if (localStorage.getItem("parallax-progress") === null){
        return {};
    } else {
        return JSON.parse(localStorage.getItem("parallax-progress"));
    }
}

export function saveStars(lessonID, stars){
    let progress = loadProgress();
    if (progress[lessonID] === undefined){
        progress[lessonID] = stars;
    } else {
        progress[lessonID] = Math.max(progress[lessonID], stars);
    }
    localStorage.setItem("parallax-progress", JSON.stringify(progress));
}