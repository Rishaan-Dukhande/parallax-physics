//lesson 1.1
const hook101 = {type: "hook", title: "Speed vs. Velocity?", text: "How is velocity different from speed? The world of physics has two different types of variables: scalars and vectors. Even the slightest difference affects how we represent variables!"};
const concept101 = {type: "concept", title: "Scalars and Vectors", text: "In physics, variables are either scalars or vectors. Scalars are variables that only have a magnitude. This just means that the variables hold a certain value of a certain measurement. An example of common scalars are time, distance, and speed. On the other hand, vectors are quantities with both magnitude and direction. For example, you could write 20m/s to the right. Another way to represent this is by implying that negative numbers mean to the left. To signify the difference between a scalar and vector, we draw an arrow above vector quantities. Some common examples of vectors include velocity, displacement, and acceleration. "};
const check101 = {type: "check", title: "Check", text: "Identify Vectors", question: "Which variable is an example of a vector?", choices: ["temperature", "distance", "acceleration", "speed"], answer: 2, explanation: "Acceleration is the only quantity with a magnitude AND direction, so it is the only vector. Temperature, distance, and speed all have only magnitudes, which makes all of them scalars."};
const summary101 = {type: "summary", title: "Summary", text: "Scalars are measurements with only a magnitude. Vectors have BOTH magnitude and direction!"};

//lesson 2.2
const hook102 = {type: "hook", title: "Displacement. Velocity. Acceleration!?", text: "You now know that velocity is speed with direction. But what is displacement? Let's see how distance and speed are related to acceleration and displacement"};
const displacement102 = {type: "concept", title: "Displacement", text: "Displacement is the net change in position. This means the distance you traveled from your starting point to end point overall. Starting and end points are called initial position and final position. This is denoted by xi (pronounced x-initial) and xf (pronounced x-final). Displacement is denoted by ∆x. Since displacement is the total change between the inital and final positions, we can say that ∆x = xf - xi"};
const check102 = {type: "check", title: "Check", text: "Identify Displacement", question: "A bicycle travels 5m to the left, 4m to the right, and then 2m to the left. What is the displacement of the bicycle?", choices: ["-3m", "11m", "-11m", "3m"], answer: 0, explanation: "Displacement is the inital position subtracted from the final position. We can say that the bicycle starts at an inital position of 0m. To calculate the final position, we add distance when the car goes right and subtract distance when the car goes left. Since -5 + 4 + (-2) = -3, the final position is -3. ∆x = xf - xi = -3 - 0 = -3m. This is different from total distance. Total distance is when you add every distance the car traveled together. This would be 5m + 4m + 2m, which would result in an incorrect answer of 11m. "};
const summary102 = {type: "summary", title: "Summary", text: "Scalars are measurements with only a magnitude. Vectors have BOTH magnitude and direction!"};



export const lessons = [
    {id: 101, title: "1.1 Scalars and Vectors (1D)", cards: [hook101, concept101, check101, summary101]},
    {id: 102, title: "1.2 Displacement, Velocity, Acceleration", cards: [hook102, displacement102, check102, summary102]},
]



