import React from "react";
import { motion } from "framer-motion";

interface CounterCardProps {
  title: string;
  count: number;
  icon: string;
  bgColor: string;
}

const CounterCard: React.FC<CounterCardProps> = ({ title, count, icon, bgColor }) => (
  <motion.div
    className={`p-6 rounded-lg shadow-md ${bgColor} text-white flex items-center justify-between`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    <div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-4xl font-semibold mt-2">{count}</p>
    </div>
    <div className="text-5xl">{icon}</div>
  </motion.div>
);

export default CounterCard;
