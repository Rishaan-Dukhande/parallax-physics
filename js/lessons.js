const card1 = {type: "hook", title: "Speed vs. Velocity?", text: "How is velocity different from speed? The world of physics has two different types of variables: scalars and vectors. Even the slightest difference affects how we represent variables!"};
const card2 = {type: "concept", title: "Scalars and Vectors", text: "In physics, variables are either scalars or vectors. Scalars are variables that only have a magnitude. This just means that the variables hold a certain value of a certain measurement. An example of common scalars are time, distance, and speed. On the other hand, vectors are quantities with both magnitude and direction. For example, you could write 20m/s to the right. Another way to represent this is by implying that negative numbers mean to the left. To signify the difference between a scalar and vector, we draw an arrow above vector quantities. Some common examples of vectors include velocity, displacement, and acceleration. "};
const card3 = {type: "check", title: "Check", text: "Identify Vectors", question: "Which variable is an example of a vector?", choices: ["temperature", "distance", "acceleration", "speed"], answer: 2, explanation: "Acceleration is the only quantity with a magnitude AND direction, so it is the only vector. Temperature, distance, and speed all have only magnitudes, which makes all of them scalars."};
const card4 = {type: "summary", title: "Summary", text: "Scalars are measurements with only a magnitude. Vectors have BOTH magnitude and direction!"};


export const lessons = [
    {id: 101, title: "1.1 Scalars and Vectors (1D)", cards: [card1, card2, card3, card4]},
]



