import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "I'm Even Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/assets/crypto.png",
  },
  {
    id: 2,
    title: "Euphoria – Ecommerce (Apparels) Website Template",
    description:
      "I'm Even Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/assets/euphoria.png",
  },
  {
    id: 3,
    title: "Blog Website Template",
    description:
      "I'm Even Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/assets/crypto.png",
  },
];

const Projects = () => {
  return (
    <section className="projects bg-black text-white px-4 py-10">
      <div className="text-2xl flex justify-center items-center mb-6">
        My<div className=" px-2 font-bold">Projects</div>
      </div>
      <div className="space-y-12 ">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <div className="md:w-1/2 w-full">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={700}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 w-full md:text-left">
              <h3 className="text-4xl font-bold mb-4">
                {String(index + 1).padStart(2, "0")}
              </h3>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-500 mb-4 text-lg">
                {project.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary hover:underline"
              >
                <div className="mr-2" />
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8335 9.16671L17.6668 2.33337"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3335 5.66663V1.66663H14.3335"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
