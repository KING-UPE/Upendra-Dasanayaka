"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import { links } from "@/config";
import { techStack } from "@/data";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";

import { MagicButton } from "./magic-button";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });
const GridGlobe = dynamic(
  () => import("./grid-globe").then((mod) => mod.GridGlobe), 
  { ssr: false }
);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        id === 1 ? "min-h-[500px] md:min-h-[60vh]" : "",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        {/* First box image container - modified for full coverage */}
        {id === 1 ? (
          <div className="absolute inset-0 h-full w-full">
            {img && (
              <Image
                fill
                src={img}
                alt={img}
                className={cn(
                  "object-cover object-top md:object-center",
                  imgClassName
                )}
                priority
              />
            )}
          </div>
        ) : (
          /* Original image container for other boxes */
          <div className="absolute h-full w-full">
            {img && (
              <Image
                width={689}
                height={541}
                src={img}
                alt={img}
                className={cn("object-cover object-center", imgClassName)}
              />
            )}
          </div>
        )}

        {/* Spare image container */}
        <div
          className={cn(
            "absolute right-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {/* Content container with forced bottom alignment for first box */}
        <div
          className={cn(
            "relative flex flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            id === 1 ? "h-full justify-end" : "min-h-40 justify-between",
            titleClassName
          )}
        >
          {/* Description text - only shown if exists */}
          {description && (
            <div className={cn(
              "z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base",
              id === 1 ? "mb-2" : ""
            )}>
              {description}
            </div>
          )}

          {/* Title - always at bottom for first box */}
          <div className={cn(
            "z-10 max-w-96 font-sans font-bold lg:text-3xl",
            id === 1 ? "text-2xl md:text-3xl" : "text-lg",
            id === 6 ? "text-center" : ""
          )}>
            {title}
          </div>

          {/* Special components */}
          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
              <div className="flex flex-col gap-3 lg:gap-8">
                {techStack.stack1.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="rounded-lg bg-[#10132e] px-3 py-4 text-center" />
                {techStack.stack2.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#10132e] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="group relative mt-5">
              <button
                tabIndex={-1}
                className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>
              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};