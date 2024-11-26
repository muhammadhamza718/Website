import React, { useState } from "react";
import { motion } from "framer-motion";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Finish dashboard", completed: false },
    { id: "2", title: "Update documentation", completed: true },
    { id: "3", title: "Prepare release notes", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now().toString(), title: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <div className="space-y-4">
        <ul>
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              className={`p-3 rounded-lg flex items-center justify-between ${
                task.completed ? "bg-green-600" : "bg-gray-700"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <span>{task.title}</span>
              <button
                onClick={() => toggleTask(task.id)}
                className="text-sm bg-white text-gray-800 px-2 py-1 rounded"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New Task"
            className="flex-grow p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
