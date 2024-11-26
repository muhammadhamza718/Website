"use client"; 
// Ensure client-side rendering
import "@/styles/components/page.modules.css";
import React, { useState } from 'react';
import TaskItem from '../../components/TaskItem'; // Import TaskItem from components folder

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high'; // New priority feature
  dueDate: string | null; // New due date feature
}

export default function TaskManagement() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [dueDate, setDueDate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a task
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status: 'pending',
      priority,
      dueDate,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle('');
    setDescription('');
    setPriority('low');
    setDueDate(null);
  };

  // Function to toggle task status
  const toggleStatus = (id: string) => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === id
        ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
        : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete a task
  const deleteTask = (id: string) => {
    const updatedTasks: Task[] = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to filter tasks by search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center pt-24 animate-fadeInUp">
      <h1 className="text-4xl font-bold mb-8">Task Management</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-3/4 p-4 mb-6 mx-auto text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      {/* Add Task Form */}
      <form onSubmit={addTask} className="space-y-6 mb-8 bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-4 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            placeholder="Enter Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-4 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {/* Priority Selector */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="w-full p-4 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          {/* Due Date Picker */}
          <input
            type="date"
            value={dueDate || ''}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-4 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all"
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-6 w-full max-w-lg mx-auto">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleStatus={toggleStatus}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
