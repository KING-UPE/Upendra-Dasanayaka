"use client";

import Link from "next/link";
import { FaFacebook, FaLocationArrow, FaYoutube } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterText } from "@/components/ui/typewriter-effect"; 
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { useState, useEffect, useRef, useMemo } from "react";

export const Hero = () => {
  const roles = useMemo(() => ["web developer", "gamer", "UI designer"], []);
  const [displayedRole, setDisplayedRole] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeedRef = useRef(100);

  const socialLinks = [
    { name: "GitHub", url: links.github, icon: <FaGithub /> },
    { name: "LinkedIn", url: links.linkedin, icon: <FaLinkedin /> },
    { name: "Youtube", url: links.youtube, icon: <FaYoutube /> },
    { name: "FaceBook", url: links.facebook, icon: <FaFacebook /> },
    { name: "Instagram", url: links.instagram, icon: <FaInstagram /> },
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
        typingSpeedRef.current = 50;
      } else {
        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
        typingSpeedRef.current = 100;
      }

      if (!isDeleting && displayedRole === currentRole) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(type, 300);
      } else {
        timeout = setTimeout(type, typingSpeedRef.current);
      }
    };

    timeout = setTimeout(type, typingSpeedRef.current);
    return () => clearTimeout(timeout);
  }, [displayedRole, currentRoleIndex, isDeleting, roles]);

  return (
    <div className="h-screen pb-20 pt-36">
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 flex h-full justify-center">
        <div className="flex max-w-[90vw] flex-col items-center justify-center">
          <h2 className="text-center text-base uppercase tracking-widest text-blue-100 md:text-lg animate-fade-in-up">
            Hello There!
          </h2>

          <TypewriterText
            name={links.ownerName}
            roles={["Web Developer", "Gamer", "UI designer"]}
            nameColor="text-emerald-500 dark:text-emerald-400"
            roleColor="text-purple-900 dark:text-purple-500"
            cursorColor="text-white dark:text-white"
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={1500}
          />

          <p className="mb-4 mt-2 text-center text-sm md:text-base lg:text-lg">
            A Person who loves to create and design beautiful things.
          </p>

          <div className="mb-6 flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-neutral-600 transition-all hover:scale-110 hover:text-purple-500 dark:text-neutral-300 dark:hover:text-purple-400"
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <Link href="#about" className="md:mt-4">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};