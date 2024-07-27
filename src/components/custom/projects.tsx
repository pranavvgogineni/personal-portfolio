"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string[];
  skills: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, description, skills, link }) => (
  <div className="w-full sm:w-80 m-4 flex flex-col">
    <BackgroundGradient className="flex flex-col justify-between h-full rounded-[22px] p-4 sm:p-10 bg-gray-900 dark:bg-zinc-900">
      <div>
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{title}</p>
        <p className="text-sm text-white dark:text-neutral-400">{date}</p>
        <div className="text-sm text-white dark:text-neutral-400 mt-2">
          <ul className="list-disc ml-5">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="text-sm text-white dark:text-neutral-400 mt-2">
          <strong>Skills:</strong> {skills}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Click here to view
          </a>
        )}
      </div>
    </BackgroundGradient>
  </div>
);

const Projects: React.FC = () => {
  const projectDetails = [
    {
      title: "LearnInAFlash",
      date: "July 2024 - Present",
      description: [
        "LearnInAFlash is a personalized flashcard website designed to aid in efficient learning and retention of information.",
        "Customizable Flashcards: Users can create, edit, and organize their own sets of flashcards with ease.",
        "Learn Mode: An adaptive learning feature that tracks progress and prioritizes cards based on user performance, ensuring efficient study sessions.",
        "This is the main project I am currently working on, and I am excited to see how far I can get with it!",
        "Status: In Progress"
      ],
      skills: "NextJS, TypeScript, TailwindCSS, Supabase",
      link: "",
    },
    {
      title: "SweetBeasts",
      date: "June 2024 - Present",
      description: [
        "Custom e-commerce platform for SweetBeasts, a company creating plushies, raising awareness about animal endangerment and promoting the health benefits of fruits",
        "Designed a user-friendly UI, enhancing interactivity and ensuring seamless navigation",
        "Implemented cart functionality, allowing users to efficiently manage their cart",
        "Integrated Stripe API for secure payment processing, ensuring user data protection",
        "Status: Finalizing deployment"
      ],
      skills: "NextJS, TypeScript, TailwindCSS, Stripe API, Prisma, PostgreSQL, React Query, Resend",
      link: "https://sweetbeasts-demo.vishrut.tech/",
    },
    {
      title: "SweetBeasts Admin",
      date: "June 2024 - Present",
      description: [
        "Role-Based Authentication and Authorization: Implemented using Auth.js, featuring two-factor authentication and email verification to secure user access.",
        "Robust CMS: Utilizes Next.js server actions for real-time product creation and editing, ensuring instant updates on the client-side.",
        "Performance Dashboard and Customer Service Portal: Tools for monitoring business metrics and providing efficient customer support.",
        "Status: Almost ready for deployment"
      ],
      skills: "NextJS, TypeScript, TailwindCSS, Prisma, PostgreSQL, React Query, Resend",
      link: "",
    },
  ];

  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-slate-950 text-black p-8">
      <div>
        <h2 className="text-3xl font-bold text-white text-center">Projects</h2>
        <div className="flex flex-wrap justify-center mt-4">
          {projectDetails.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
