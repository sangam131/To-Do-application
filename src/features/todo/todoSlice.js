import { createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * This todoSlice.js file will add, remove, toggle the task
 * And save the task to the local storage.
 */

// Load tasks from local storage if available, or use a default task
const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    { id: 1, text: "Hello world", completed: false },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Action to add a new todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      localStorage.setItem("todos", JSON.stringify(state.todos));
      state.todos.push(todo);
    },

    // Action to remove a todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    // Action to toggle the completion status of a todo
    toggleComplete: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
