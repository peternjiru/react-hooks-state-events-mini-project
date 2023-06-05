import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleTaskAdd(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleTaskRemove(taskText) {
    setTasks(tasks.filter((item) => item.text !== taskText));
  }

  const taskArray = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((cat) => cat !== "All")}
        onTaskFormSubmit={handleTaskAdd}
      />
      <TaskList tasks={taskArray} onTaskRemove={handleTaskRemove} />
    </div>
  );
}

export default App;
