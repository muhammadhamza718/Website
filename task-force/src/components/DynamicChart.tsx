"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CounterCard from "@/components/CounterCard";
import TaskManager from "@/components/TaskManager";

const Dashboard = () => {
  const [] = useState([
    { id: 1, message: "New user registered!" },
    { id: 2, message: "Server memory usage is high!" },
    { id: 3, message: "System backup completed successfully." },
  ]);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded-lg bg-white text-gray-800 w-64"
        />
      </header>

      {/* Widgets Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {/* Counter Widgets */}
        <CounterCard
          title="Total Users"
          count={1245}
          icon="👤"
          bgColor="bg-blue-500"
        />
        <CounterCard
          title="Active Sessions"
          count={312}
          icon="💻"
          bgColor="bg-green-500"
        />
        <CounterCard
          title="Pending Tasks"
          count={42}
          icon="📝"
          bgColor="bg-yellow-500"
        />

        {/* Task Manager */}
        <div className="md:col-span-2">
          <TaskManager />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
