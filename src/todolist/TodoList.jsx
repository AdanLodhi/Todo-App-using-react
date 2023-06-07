import { useState } from "react";
import "./todo.css";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learn Node ",
    },
    {
      id: 2,
      title: " Learn React ",
    },
    {
      id: 3,
      title: "Learn Express ",
    },
    {
      id: 4,
      title: "Learn Mongo ",
    },
  ]);

  const addTask = () => {
    const title = prompt("Enter the task title");
    const newTask = { id: items.length + 1, title };
    const newItems = [...items, newTask];
    setItems(newItems);
  };

  return (
    <div>
      <div className="bar">
        <h2 className="heading">website todo</h2>
      </div>
      <div className="todo-list shadow-Ig">
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </div>
      <button className="todo-add-btn rounded-md" onClick={addTask}>
        +New Task
      </button>
    </div>
  );
};
