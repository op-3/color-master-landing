import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card = ({
  title,
  subtitle,
  children,
  className = "",
  onClick,
  hover = true,
}: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-lg 
        overflow-hidden
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </motion.div>
  );
};

export default Card;
