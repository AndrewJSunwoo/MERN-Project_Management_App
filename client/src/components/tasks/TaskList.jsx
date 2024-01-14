import { TaskCard } from "./TaskCard";

export function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}
