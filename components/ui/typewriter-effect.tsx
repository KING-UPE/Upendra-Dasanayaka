"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  name: string;
  roles: string[];
  nameColor?: string;
  roleColor?: string;
  cursorColor?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText = ({
  name,
  roles,
  nameColor = "text-purple-600 dark:text-purple-400",
  roleColor = "text-purple-600 dark:text-purple-400",
  cursorColor = "text-purple-600 dark:text-purple-400",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: TypewriterTextProps) => {
  const [displayedRole, setDisplayedRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let timeout: NodeJS.Timeout;
    const currentRole = roles[currentIndex];
    
    const type = () => {
      if (isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
      }

      if (!isDeleting && displayedRole === currentRole) {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(type, 500);
      } else {
        timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    timeout = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedRole, currentIndex, isDeleting, isMounted, roles]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      {/* Desktop View (single line) */}
      <div className="hidden sm:block whitespace-nowrap">
        <span className="font-bold text-black dark:text-white">I'm </span>
        <span className={`font-bold ${nameColor}`}>{name}</span>
        <span className="font-bold text-black dark:text-white">, a </span>
        <span className={`font-bold ${roleColor}`}>
          {displayedRole}
          {!isDeleting && (
            <span className={`animate-pulse ${cursorColor}`}>|</span>
          )}
        </span>
      </div>

      {/* Mobile View (two lines) */}
      <div className="sm:hidden flex flex-col items-center">
        <div className="whitespace-nowrap">
          <span className="font-bold text-black dark:text-white">I'm </span>
          <span className={`font-bold ${nameColor}`}>{name}</span>
          <span className="font-bold text-black dark:text-white">,</span>
        </div>
        <div className="whitespace-nowrap">
          <span className="font-bold text-black dark:text-white">a </span>
          <span className={`font-bold ${roleColor}`}>
            {displayedRole}
            {!isDeleting && (
              <span className={`animate-pulse ${cursorColor}`}>|</span>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
};