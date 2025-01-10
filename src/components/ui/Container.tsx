import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Container = ({
  children,
  className = "",
  animate = true,
  maxWidth = "xl",
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const Wrapper = animate ? motion.div : "div";

  return (
    <Wrapper
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
      variants={containerVariants}
      className={`
        mx-auto
        px-4 sm:px-6 lg:px-8
        ${maxWidthClasses[maxWidth]}
        ${className}
      `}
    >
      {children}
    </Wrapper>
  );
};

export const Section = ({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={`
        py-12 sm:py-16 lg:py-20
        ${className}
      `}
    >
      {children}
    </section>
  );
};

export default Container;
