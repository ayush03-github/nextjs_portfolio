"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Designed a portfolio website using NextJS and TailwindCSS hosted on Vercel",
    imageUrl: "/assets/projectPortfolio.png",
  },
  {
    id: 2,
    title: "Euphoria – Ecommerce (Apparels) Website Template",
    description:
      "I'm Even Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/assets/projectFreelanceX.png",
  },
  {
    id: 3,
    title: "Blog Website Template",
    description:
      "I'm Even Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/assets/projectSiro.png",
  },
  {
    id: 3,
    title: "Blog Website Template",
    description:
      "I'm Even Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/assets/projectSiro.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section className="projects bg-gray-950 text-white px-4 py-10">
      <div className="text-2xl flex justify-center items-center mb-6">
        My<div className="px-2 font-bold">Projects</div>
      </div>

      {/* Large Selected Image */}
      <div className="flex items-center mb-10 px-16">
        <Image
          src={selectedProject.imageUrl}
          alt={selectedProject.title}
          width={900}
          height={500}
          className="rounded-xl shadow-xl mb-4"
        />
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
          <p className="text-lg text-white">{selectedProject.description}</p>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`cursor-pointer transition-transform duration-300 ${
              project.id === selectedProject.id
                ? "scale-105"
                : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={300}
              height={180}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
