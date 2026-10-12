const card1 = {type: "hook", title: "Start with only the X-axis", text: "Remember problems from 3rd grade on the number line? Let's explore the relationship between common variables such as position, velocity, and acceleration on a simplified diagram"};
const card2 = {type: "concept", title: "Velocity in one dimension", text: "Motion in one dimension only has two directions. Since we are using the x-axis, it is left or right. A negative velocity means traveling left and a positive velocity is traveling right."};
const card3 = {type: "check", title: "Check", text: "Later", question: "How many directions do we worry about in 1-D?", choices: ["A", "B", "C", "D"], answer: 0};
const card4 = {type: "summary", title: "Summary", text: "1-dimensional motion has only two directions. Now let's tranisiton to kinematic equations that help us calculate velocity, acceleration, and position"};


export const lessons = [
    {id: 1, title: "Motion in 1D", cards: [card1, card2, card3, card4]},
]



