"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavigationProps {
  isMobile?: boolean;
}

const Navigation = ({ isMobile = false }: NavigationProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Download", href: "#download" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClasses = `
    relative
    transition-all duration-300 ease-in-out
    hover:text-blue-600 dark:hover:text-blue-400
    ${isMobile ? "block py-3 text-lg" : "inline-flex items-center px-4 py-2"}
  `;

  return (
    <nav
      className={`
      ${isMobile ? "space-y-2" : "flex items-center space-x-4"}
      transition-all duration-300
      ${scrolled ? "backdrop-blur-sm" : ""}
    `}
    >
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            ${baseClasses}
            group
            font-medium
            text-gray-600 dark:text-gray-300
          `}
        >
          <span className="relative">
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all group-hover:w-full" />
          </span>
        </motion.a>
      ))}
    </nav>
  );
};

export default Navigation;
