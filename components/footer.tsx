"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { MagicButton } from "@/components/ui/magic-button";
import { socialMedia } from "@/data";

export const Footer = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ba149a11-fb99-4d03-b49d-12ab51219301",
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        form.reset();
      } else {
        setResult("Error submitting form. Try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Try again.");
    }
  };

  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="pointer-events-none absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 w-full max-w-md text-white"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="p-3 rounded-md bg-black-200 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="p-3 rounded-md bg-black-200 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows={3}
            required
            placeholder="Enter your message"
            className="p-3 rounded-md bg-black-200 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-500"
          />

          <button type="submit" className="md:mt-4 self-start">
            <MagicButton
              title="Submit Form"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </button>
          
          {result && (
            <span className={`text-sm ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
              {result}
            </span>
          )}
        </form>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link
            href="website.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-purple"
          >
            Upendra
          </Link>
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};