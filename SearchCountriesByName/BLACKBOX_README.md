## README.md

This repository contains the code for the following tutorial:

[How to Create a Simple To-Do List App with React](https://www.freecodecamp.org/news/how-to-create-a-simple-to-do-list-app-with-react/)

## Getting Started

To get started, clone the repository to your local machine:

```
git clone https://github.com/freecodecamp/react-todo-list.git
```

Once you have cloned the repository, open the project in your code editor.

## Installing Dependencies

To install the dependencies, run the following command in your terminal:

```
npm install
```

## Running the App

To run the app, run the following command in your terminal:

```
npm start
```

The app will be served on port 3000. You can open it in your browser by visiting http://localhost:3000.

## Code Explanation

The code for the app is located in the `src` directory. The main file is `App.js`, which contains the React component for the app.

The `App` component consists of a `TodoList` component and a `AddTodo` component. The `TodoList` component renders a list of todos, and the `AddTodo` component allows users to add new todos.

The `TodoList` component is defined in the `TodoList.js` file. This component uses the `useState` hook to track the state of the todos, such as the list of todos and whether the todos are completed or not.

The `AddTodo` component is defined in the `AddTodo.js` file. This component uses the `useState` hook to track the state of the new todo, such as the title and description of the todo.

The `App` component also uses the `useEffect` hook to listen for changes to the todos. When the todos change, the `App` component re-renders to reflect the changes.

## Conclusion

This tutorial has shown you how to create a simple to-do list app with React. You can learn more about React by visiting the [React documentation](https://reactjs.org/docs/getting-started.html).