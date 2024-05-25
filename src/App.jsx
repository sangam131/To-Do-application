import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

/**
 * App component representing the main application.
 * Contains the structure of the application layout.
 * Renders AddTodo and Todos components.
 */

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            TO-DO Application
          </h1>
          <div className="mb-4">
            <AddTodo />
          </div>
          <div>
            <Todos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
