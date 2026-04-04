import { useState } from "react";

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={() => { addTask(title); setTitle(""); }}>
        Add
      </button>
    </div>
  );
}

export default TaskInput;