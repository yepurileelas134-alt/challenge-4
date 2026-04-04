function TaskItem({ task, toggleTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.title}
    </div>
  );
}

export default TaskItem;