## Understanding State management in Next Js

State management is the core of any modern web application, as it determines what data is displayed on the screen during the app usage session while the user interacts with it.


### How does a State work?

A state is a JavaScript object that holds the current status of the data. You can think of it as a light switch that can have either “on” or “off” states. Now, transfer the same principle to the React ecosystem and imagine the use of the light and dark mode toggle.

### Understanding Next.js file structure

Because Next.js is a framework, it follows a specific file structure. To review different ways to store the states, we first need to understand how the Next.js file system is built.

If you run npx create-next-app project-name in your terminal, it will create a fully working Next.js application that consists of four main blocks: root level, then the pages, public, and styles folders in it.

For managing states, we will only use pages and the two files inside it: _app and index.js. The first is the root file for the entire application, where all the globally accessed components are configured. The latter is the base route file for the Home component.

There is also an api folder inside the pages folder that is built in and how Next.js handles the creation of API endpoints, allowing them to receive requests and send responses. We will work with this folder toward the end of the tutorial.

### Using the useState Hook for state management in Next.js

One of the most common ways to manage state is with the useState Hook. We will build an application that lets you increase the score by clicking the button.

### Using the useReducer Hook

The useReducer Hook works similarly to the reduce method for arrays. We pass a reducer function and an initial value. The reducer receives the current state and an action and returns the new state.

First, we import the useReducer Hook itself. We pass in the reducer function and the initial state. The Hook then returns an array of the current state and the dispatch function.

## The Prop Drilling Technique for State Management in next js

In more advanced applications, you will not work with states directly in a single file. You will most likely divide the code into different components, so it is easier to scale and maintain the app.

As soon as there are multiple components, the state needs to be passed from the parent level to the children. This technique is called prop drilling, and it can be multiple levels deep.