// src/components/TaskItem.tsx

import React from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
}

interface TaskItemProps {
  task: Task;
  toggleStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleStatus, deleteTask }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm">
      <div className="flex flex-col">
        <h3 className="text-lg text-gray-800 font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-700">{task.description}</p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => toggleStatus(task.id)}
          className={`py-1 px-3 rounded-md text-white ${task.status === 'pending' ? 'bg-yellow-500' : 'bg-green-500'}`}
        >
          {task.status === 'pending' ? 'Complete' : 'Undo'}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="py-1 px-3 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
