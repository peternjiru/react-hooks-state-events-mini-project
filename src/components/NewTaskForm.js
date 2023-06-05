import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      key: text,
      text: text,
      category: category,
    };

    onTaskFormSubmit(newTask);
    setText("");
    setCategory("Code");
  }

  const categoryList = categories.map((category) => (
    <option key={category} value={category}>{category}</option>
  ));

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleTextChange}
          value={text}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={handleCategoryChange}
          value={category}
        >
          {/* render <option> elements for each category here */}
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
