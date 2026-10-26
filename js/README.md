# 🌌 Parallax
Parallax is a physics tutor for students interested in learning the AP Physics 1 curriculum. The app uses a gamified approach, including a simulator to learn projectile motion and a boss battle at the end of the unit, to make physics an enjoyable science class. The app currently has the first unit of AP Physics 1: Kinematics.

**Play it now:** https://parallax-physics.vercel.app/

**Demo video:** [![Watch the Parallax demo](https://img.youtube.com/vi/TFTet9wMoyI/maxresdefault.jpg)](https://www.youtube.com/watch?v=TFTet9wMoyI)

![Galaxy map](images/CompletedBoss.png)

![Incomplete Galaxy](images/IncompleteGalaxy.png)

## Why I built it
I am a student interested in the STEM field. One class I hope to take is AP Physics C. In order to prepare for AP Physics C, I decided to take the AP Physics 1 course. A major gap I noticed in learning AP Physics 1 is the passive lessons from traditional textbooks and online courses. I often find myself reading long textbook chapters or watching several videos, leaving myself bored with physics. I know that physics can involve simulations and labs, so I wanted to focus on the fun aspects of physics while still letting students prepare for the AP Physics 1 exam efficiently.

## Features
- **Galaxy map:** All of the lessons, including the final boss battle, are organized into a galaxy map. The map is shaped in a parabola shape, like a projectile's path.
- **5 lessons:** Each lesson is structured with multiple cards: a hook, concept, check questions, and a lesson summary. Some lessons have more concept and check cards than others. Students earn stars depending on the number of mistakes they make on the check cards. A student can earn a minimum of 1 star and a maximum of 3 stars on a completed lesson. 
- **Progression and high scores:** Once the user completes a lesson and returns to the home screen, their highest number of stars for that lesson is displayed below the lesson button. This encourages students to redo lessons and review concepts in order to get a perfect star score. The lesson then unlocks the next lesson and lights up the path to it.
- **Projectile simulator:** Once a student unlocks lesson 1.5, they gain access to the simulator for projectile motion. They can use the simulator to experiment with different angles and speeds of a projectile to see how it affects the path the projectile takes.
- **Boss battle:** The boss battle unlocks after all 5 lessons are completed. Each correct answer earns one shot at the boss, and the student has to set the speed and angle of the projectile to hit the boss. A player defeats the boss when it is hit 10 times. The player can also have a highscore on the boss by answering questions 3 in a row and avoiding mistakes!
- **Saved progress:** The user's stars are saved in their device's browser. It will continue to stay saved as long as the user uses the exact same device. (This is also a next step!)

![Boss battle](images/BossBattle.png)

![Lesson 1.5 Simulation](images/Simulator.png)

## How to play
1. First, click on lesson 1.1
2. Complete the lesson by reading the hook and concept cards and completing the check questions. At the end, you can get a max of 3 stars if you make no mistakes. This will unlock the next lessons one at a time.
3. Beat all 5 lessons in unit 1 to unlock the unit 1 boss!
4. In the boss battle, you will start with 3 lives. You will lose a life per wrong answer. To earn an extra life, answer 3 questions correct in a row. Each correct answer earns one shot at the boss. Change the speed and angle of the projectile using the sliders and then fire. If you hit the boss 10 times, you WIN!
5. Competition: After completing the boss battle, you earn a trophy for every life you have left. I finished with 5. Let me know if you can beat it!

## How the simulator works
The simulator.js has a function called calculateNewPosition. This function uses the actual kinematic equations to find the projectile's x and y coordinates. The program then uses mapCanvas() to map the coordinates outputted by calculateNewPosition to coordinates the canvas element on the app can use to actually display the projectile.

## Run it locally
If you do not want to use the vercel app, but run the app locally on your device, follow the steps below:
1. Clone this "parallax-physics" repository
2. Open the folder in an IDE (Preferably VS Code because it is the platform I used)
3. Open index.html and then click "Open with Live Server" in the bottom right of the IDE.

## Built with
- Languages: HTML, CSS, and JavaScript
- Browser tools: Canvas API, SVG, and localStorage
- IDE: VS Code, Live Server
- Hosting platform: Vercel
- Repository: GitHub


## Project structure
| File | What it does |
|---|---|
| `index.html` | This controls the page layout and basic elements |
| `js/main.js` | This controls the lessons, boss battle, and galaxy |
| `js/simulator.js` | This file is behind the simulator in lessons 1.5 and boss battle. This includes the physics calcultions and the animation |
| `js/lessons.js` | This file contains all the lesson cards including content and checks |
| `js/progress.js` | This file saves the lesson stars into localStorage |
| `style.css` | This file gives the app its pleasing aesthetic |

## Biggest challenge
The biggest challenge I faced was completing the animation for the projectile motion simulator. My first attempt was to use a for loop that incremented time by 1 every time to keep the ball moving. But when it ran, the ball teleported to the end of the screen. I learned that JavaScript has a function called requestAnimationFrame which continues making a chain until requestAnimationFrame is not called. When I called requestAnimationFrame(drawFrame());, the page crashed with the error "Maximum call stack size exceeded" because drawFrame called itself instantly, forever. I learned that functions can be called in one of two ways: with parentheses, which run them instantly, or without parentheses, so another function calls them only at a certain time. Next, when I pressed the "fire" button two times, the speed doubled, because there was no condition to stop the chain after the projectile hit the ground. To fix this, I only allowed a call for the next frame when the ball was flying.

## AI use
Throughout the project, I wrote the app's JavaScript and HTML myself, with exceptions listed below. When I stumbled upon an obstacle, I attempted to solve it for 5 minutes. If the obstacle was persistent, I would explain my approach to AI and ask for suggestions on how to continue. I also had AI review and test my code. For time purposes, I had AI draft the lesson content for lessons 1.3 to 1.5. I wrote lessons 1.1 and 1.2. I generated the style.css file using Google Stitch and used AI to make a few additional classes in CSS, including changing the dimensions of app elements based on the device a student is using. AI also ran automated browser tests to find bugs and edge cases in the app.

Every use of AI is logged day by day in [DEVLOG.md](DEVLOG.md).

## What's next
- 7 Units - AP Physics 1 has a total of 8 units. There are 7 units left to complete the app. I will incorporate different simulations and boss battles for each unit.
- Accounts - I will use Supabase so a student can use the app on multiple devices and compete with friends.
- I want to add an AI tutor that focuses on giving hints and encouraging a student to critically think. The AI tutor will be prompted not to give the students answers. This will make the app versatile and usable by all types of learners.

## Author
Hi, I am Rishaan Dukhande. I built Parallax as a hobby project, which I am submitting for the 2026 Congressional App Challenge and Hack Club Stardance.