"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CounterCard from "@/components/CounterCard";
import dynamic from "next/dynamic";
import "@/styles/components/page.modules.css";

// Dynamically import client-only components
const StudyTips = dynamic(() => import("@/components/StudyTips"), { ssr: false });
const AchievementList = dynamic(() => import("@/components/AchievementList"), { ssr: false });
const TaskManager = dynamic(() => import("@/components/TaskManager"), { ssr: false });

const LearningDashboard = () => {
  const [achievements] = useState([
    { id: 1, message: "Completed React Course" },
    { id: 2, message: "Achieved 10 hours of study this week" },
    { id: 3, message: "Scored 95% in JavaScript quiz" },
  ]);

  const [isMounted, setIsMounted] = useState(false);

  // Ensure client-side only logic for motion layout
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="p-6 pt-20 space-y-6 text-white">
      {/* Header */}
      <header className="flex justify-between items-center bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 p-4 rounded-lg shadow-md animate-fadeInUp">
        <h1 className="text-3xl font-bold text-white">Learning Dashboard</h1>
        <input
          type="text"
          placeholder="Search courses..."
          className="p-2 rounded-lg bg-white text-gray-800 w-64"
        />
      </header>

      {/* Widgets Grid */}
      {isMounted && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {/* Counter Widgets */}
          <CounterCard
            title="Courses Completed"
            count={8}
            icon="🎓"
            bgColor="bg-indigo-500"
          />
          <CounterCard
            title="Courses in Progress"
            count={3}
            icon="📚"
            bgColor="bg-blue-500"
          />
          <CounterCard
            title="Time Spent Learning"
            count={42}
            icon="⏳"
            bgColor="bg-purple-500"
          />

          {/* Study Tips */}
          <div className="md:col-span-2 lg:col-span-1">
            <StudyTips />
          </div>

          {/* Achievements */}
          <div className="md:col-span-2">
            <AchievementList achievements={achievements} />
          </div>

          {/* Task Manager */}
          <div className="md:col-span-2">
            <TaskManager />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LearningDashboard;
