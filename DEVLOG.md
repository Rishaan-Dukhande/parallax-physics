   # Parallax DEVLOG
   ## AI Usage Policy
   I write all application code myself. I use Claude (chat workspace) as a mentor for
   explanations and code review. Any AI-suggested code I use is logged below.
   An earlier prototype was built with AI code generation; this is a full rewrite.

   ## Oct 1, 2026 — Session 1
   Built: registered for Congressional App Challenge (CAC from now on), scaffolded Next.js app
   Learned: use nano to open a file and touch to create it.
   AI used: none
   Next: write README spec (Day 2)
 
   ## Oct 2, 2026, - Day 2
   Built: I did not create anything for the project. Instead, I delegated this time to do the react tutorial on react.dev and learn the fundamentals of React.
   Learned: I reviewed how components work, using java inside markup, adding styles with CSS, displaying data, and using lists
   AI used: I did not use any AI during this session. This session was based on pure learning and knowledge retainment
   Next Steps: Finish the react tutorial, picking up from updating the screen with UseState. Then I will transition into doing the Tic-Tac-Toe tutorial to test my React fundamentals

   ## Oct 5-6, 2026 - Days 3 & 4
   Built: I created the tic-tac-toe project on react's tutorial page to better get a sense of how react works.
   Learned: I learned how to render using reacts => notation, including () => functionName so that the function only runs once
   AI used: I did not use AI during this session. This session was based on react's tutorial.
   Next Steps: Start the Parallax project using vscode.

   ## Oct 10, 2026 - Day 5
   Built: I created the structure for the project, including main.js, lessons.js, index.html, and style.css. 
   Tasks:
      1. I first set the background color to a spacy background
      2. I then added a start button to take the user from the home parallax screen to a lesson screen
      3. I created code for the first lesson and 4 cards to store different parts of the lesson (not working yet)
   AI used: I used Claude to check my code and explain some concepts, including syntax for js as I mainly use java and python.
   Next Steps: Finish the code to render the lessons cards on the screen to simulate a lesson.
   ## Oct 11, 2026 - Day 6
   Built: Full lesson going through all cards
   Learned: In main.js, you need to use the keywords "let" or "const" to declare a variable.
   AI used: I used Claude to check my code and explain the following concepts:
      1. syntax of a function
      2. Function for clearing screen


   ## Oct 12, 2026 - Day 7
   Learned: You can disable buttons using .disabled property
   AI used: I used Claude to check my code
      a. This was very helpful for testing edge cases such as the button being enabled when it should be disabled

   ## Oct 13, 2026 - Day 8
   Learned: I learned how to incorporate CSS into HTML and javascript code!
   Tasks: 
      1. Today, I used google Stitch to make a stylesheet in css for me to use as a brandkit for my app. I want to focus my time on structure, so I decided to use AI to benefit the asthetics of my app.
      2. I added the classes to all the elements in the app so far, including the buttons, body, title!
      3. To add classes in HTML, just type it inside a tag <>. To add classes in javaScript, you have to use object.classList.add("class");

   ## Oct 14, 2026 - Day 9
   Today, I created the offical first lesson of parallax. The first lesson follows the AP Physics 1 college ciriculum. This startes with the Kinematics Unit. The first topic covered in the unit is Scalars and Vectors.
   Learned: 
      1. Today I learned that we use the === operator to check if both the datatype and value of two variables being compared is the exact same.
      2. I also learned that when creating elements in a .js file, you can name elements anything, such as questionText instead of "p". It is important to do this so that the compiler/program does not crash because only one const element can have the same name.
      3. I learned that there is a hidden property that works on elements such as div. This is just like how disabled works on buttons!
      4. I learned the syntax of a for each loop: element.forEach((element, index) => {});
   AI usage: After writing my first draft of the lesson code and checking the mini-quiz inside the first lesson, I had multiple errors. I used AI to explain the errors, which are documented in the key learning above. Additionally, I used AI to verify the code and test the app itself with its capabilities.

   Next steps: Finish the mini quiz and potentially add stars for the lesson score. This will unlock new lessons in the future and determine whether a lesson needs to be re-done.

   ## Oct 15, 2026 - Day 10
   Today, I finished the mini-quiz in the first lesson. I have included colors to indicate wrong and write answers (that comes from the css) and I created 4 buttons that are clickable and display the answer choices.

   Additionally, I added stars to the lesson to act as the lesson score. This depends on their score on the lesson quiz.

   AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic. I always try to write code myself, but learn the concept I am struggling with after using AI.

   Key Learnings:
      1. When I gave the buttons the choice--correct or choice--wrong class, they now had a class and a property of disabled. The property for disabled buttons in css is button:disabled, which is more specific than just the .choice-correct class. This makes the css default to the rules in the button:disabled property, which dims the opacity. To fix this, I hand coded a third class that works with both properties to keep the buttons fully highlighted in a color to indicate wrong and right.
      2. You can use the "".repeat(n) function to repeat any string in the quotation marks n times in a row.
      3. Remember: It is easy to get confused with spelling. the property is .disabled (past tense). This should also be used in correct ways. It is important to think when something should or shouldn't be disabled (common mistake today).

   Next Steps: Now that I have developed one whole lesson, I will use the same code to develop a total of 5 lessons to cover Unit 1: Kinematics of the AP Physics 1 ciriculum. Then, I will create a home screen. If I have time, I will make the first ever deploy to vercel and see the app in action!

   ## Oct 16, 2026 - Day 11,

   Today I created a helper method called showAnswered. This helper method show the feedback and enables the next button after the user presses the right answer. It is a nice function because I can use it in multiple areas of the code without rewriting every single line.

   AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic.

   Limitations/Future Challenges: The current code only works if all the lessons only have one quiz-card. This occurs becuase the variable checkAnswered only stores true or false, which only stores information for one card.I will have to create a boolean list later on to manage lessons with more than 1 card.

   Next Steps: I did not have much time today, so I will do the 1st vercel deploy tommorow.

  ## Oct 17, 2026 - Day 12,

  Today, I first deployed the app on vercel! Then, I created progress.js; This file has a function to loadProgress() and saveStars(). Finally, I added function calls to main.js to use the functions in the functionality of the app.

   AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic and test my code. In this specific session, I had a lot of obstacles, especially with learning new javascript functions and syntax. There were 6 attempts just to solve the progress.js page, and AI helped me understand javascript better, as shown in the key learnings below.

  Key Learnings:
      1. You need to use the "export" keyword so that a function in one page can be used by other files
      2. In javaScript, you don't have to manually create tables/lists like how you use the "new" keyword in java. If you say scores["math"] = 60 and math does not exist, then it will create a new row called "math" in the table and assign the value of 60 to the key.
      3. Through 6 attempts, I learned a lot of Java Script syntax features:
         a. A dot is used to get an attribute in javascript, something that belongs to an object. However, tables in javascript use brackets just like lists: table[]; 
         b. You can save a whole table using .setItem(key, value). Remember that the value has to be a string. We can use .stringify(obj) for this.
         c. Javascript has two error words: null and undefined. Null happens from an intentionally missing object. For example, when an object has been declared but is empty. Undefined, by contrast, is used when the object has never been created and their is no instance of it.
         d. Extra JavaScript functions are as follows:
            i. stringify --> turn an object into a string
            ii. parse --> turn a string back into an object
            iii. setItem --> changes the item in a table
            iv. getItem --> gets the item currently in a table
      4. If you need to import multiple things from the same page/file, you can use a comma in the import instead of using multiple lines.

   Next Steps: I am going to create an interactive projectile simulator! 

   ## Oct 18, 2026 - Day 13,

   Today, I build a projectile motion simulator for a user to intuitively understand how a projectile works by moving it. To do this, I created two functions: calculateNewPosition(t) calculates the new x,y position the projectile should be at using the kinematic equations. mapCanvas(time) calls the calculate function to take the x,y coordinates and change them so that it works for the canvas's different grid. 

   AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic and test my code. In this specific session, I had to learn how to draw on a screen using javaScript. I used AI to teach me the concept, then I coded everything by myself and asked for feedback on the code to improve it.

   Key Learnings:
      1.2 One important concept is that the canvas starts (0,0) from the top left corner of the grid, so subtracting y actually makes an object/line move upward.

      2. I learned to use the function beginPath() to create a new drawing object. Without using beginPath(), an drawing connects a the previous drawing to the new drawing with a line. Additionally, the fill() function needs to be used to actually draw a point.

      3. I learned that css uses different punctuation for different rules:
      selector (plain word) - looks for elements whose tag is "selector"
      .selector - looks for elements whose classes list contain the word "selector"
      #selector - looks for the element whose ID is "selector"
      :selector - does the css action only while it is in the state "selector"

      4. You can test with console.log. To open it on a website/app screen, you can use CMD + OPT + J.

      Next Steps: I am going to finally make the animation by callin gthe mapCanvas function multiple times. The time will be 60 frames per second.


## Oct 19, 2026 - Day 14,

Today, I created the drawFrame() function, which will be used to draw every frame for the simulator. The frames will increment 60 fps, so time will increment by 1/60 every time drawFrame() is run. In human perception, this makes the object look like its moving when it is really teleporting really fast!

AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic and test my code. In this specific session, I had to learn how different calls of the same function in java --- whether to use () or no parentheses. I used AI to teach me the concept, then I coded everything by myself and asked for feedback on the code to improve it.

Key Learnings:

   1. In javaScript, when a function is called with parentheses: drawFrame(), it runs immediately. When a function is just called by its name, it runs when another function tells it to: requestAnimationFrame(drawFrame) (no parentheses)!
   2. I forgot to use the fill() function again. fill() is important because it actually "paints" the drawing.

## Oct 20, 2026 - Day 15,

Today, I tackled the drawFrame() function and calling it with requestAnimationFrame(). This issue was persistant in multiple attempts of solving it.


AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic and test my code. I used AI to teach me the concept, then I coded everything by myself and asked for feedback on the code to improve it.

Key Learnings:
   1. I got confused that y increases to make a drawing go downwards. This caused me to write the falling logic incorrectly. I switched the case where falling = true with falling = false.
   2. After making the falling variable, I wasn't using it in any way. The falling variable also needed to be used in the eventHandler for the launch button to make sure that multiple cycles of drawFrame() weren't running at the same time:
      a. When drawFrame() is run several times, it causes the speed to increase by n times as much if n represents the number of times you click the launch button
   To fix this, I used the falling variable in the EventHandler. I decided that it is easier to just not do anything if the button is in mid-flight and the user wants to re-launch the ball/projectile.

## Oct 21, 2026 - Day 16,

Today, I finished the simulator by adding speed and angle sliders. This allows the user to control different projectile motions. Next, I used a variable to replace all the lesson[0] calls in main.js so that the lesson structure is compatible with multiple lessons in the future.

AI usage: used AI to help me understand concepts when I got stuck for over 5 minutes on a topic and test my code. I used AI to teach me the concept, then I coded everything by myself and asked for feedback on the code to improve it.

Key Learnings:
   1. Sliders are <input type="range"> There are two events possible to use in an event listener (of a slider):
      a. "input" - a live update. The event triggers continously while a slider is being dragged
      b. "change" - only triggers and runs the event listener when you let go of the element (slider). This prevents changing while you are holding the slider
   
   2. Sliders don't have a closing tag. They don't have </input>. This means that textContent can't be used on sliders because they are not containers. Therfore, there has to be a new variable to act as the label for the slider element (or any input element for that matter).

   3. Span vs. Div:
   Span is inline, div begins on the next line

   4. Inner workings of requestAnimationFrame() - when this function is called, it let's the function end and immediately return to where it was called. It then continues until it reaches the end of the code in the file. The requestAnimationFrame() just tells the compiler to call the function again AFTER everything ran.

   his was important because it was the reason the disabling of the sliders was not working. To fix it, I added the enabling and disabling of buttons directly in the drawFrame() function.

Next Steps: Write content for next lessons.

## Oct 22, 2026 - Day 17,

