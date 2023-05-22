# Stateful-Components-Counter

In this project you will practice
stateful components in React.
In this project, we'll create a
simple counter component that
increments and decrements
a value using state.

Step 1: Project Setup

Set up a new React project using
Create React App or your
preferred method. Open the
main component file (App.js) 
and remove the default content.

Step 2: Create the Counter Component

Create a new file called Counter.js.
Inside this file, import React and the
useState hook from the 'react' package.
Define a functional component called
Counter and export it as the default export.

Step 3: Implement Counter Rendering

Inside the Counter component, declare
a state variable called count using
the useState hook. Initialize it with
a default value of 0.
Render the following JSX structure
inside the Counter component's
return statement:
Use the <h2> element to display
a heading like "Counter".
Use the <p> element to display the 
current count value, e.g., "Count: 0".
Add two buttons, one for 
incrementing the count and
the other for decrementing it.

Step 4: Integrate the Counter Component

Go back to the main component
file (App.js). Import the Counter
component at the top of the file.
Inside the App component's return
statement, render the following
JSX structure:
Use the <h1> element to display
a heading like "Stateful Counter".
Render the Counter component.
  
Step 5: Test the Counter
  
Start the development server by 
running the appropriate command 
(npm start, etc.). Open your
application in the browser and
verify that the counter component
is displayed correctly. You should 
see the heading, current count value,
and buttons for incrementing and
decrementing the count.

Step 6: Apply CSS Styling
  
To style the counter component,
you have a few options:
Add inline styles directly in the
Counter component file using
the style attribute.
Create a separate CSS file and
import it into the Counter component file.
Apply styles to the elements within
the Counter component to improve
the visual appearance. You can
modify the font, colors, button styles,
or add any other desired styling.

Step 7: Add Limit to the Counter
  
In the Counter component, declare a 
constant variable called MAX_VALUE
and set it to the maximum count
value allowed (e.g., 10).
Update the increment and decrement
functions to include conditional
statements. These statements
should check if the count is within
the allowed range before updating the state.

Step 8: Test the Updated Counter
  
Restart the development server and
open your application in the
browser again. Verify that the
counter component is still
rendered correctly. Test the
counter by clicking the increment
and decrement buttons. Observe that
the count value is limited and the 
buttons become disabled when the
count reaches the limit.
  
  
  
