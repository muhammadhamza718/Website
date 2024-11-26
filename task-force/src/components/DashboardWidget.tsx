import React from "react";
import { motion } from "framer-motion";

interface DashboardWidgetProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && <p className="text-sm text-gray-400 mb-4">{description}</p>}
      <div>{children}</div>
    </motion.div>
  );
};

export default DashboardWidget;
