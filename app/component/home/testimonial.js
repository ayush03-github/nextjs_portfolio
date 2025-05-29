import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Evren Shah",
      role: "Designer",
      image: "/assets/pfp1.png",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 2,
      name: "Flora Sheen",
      role: "Designer",
      image: "/assets/pfp2.png",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      bgColor: "bg-black",
      textColor: "text-white",
    },
    {
      id: 3,
      name: "Evren Shah",
      role: "Designer",
      image: "/assets/pfp1.png",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <section className="px-6 py-12 bg-white">
      <div className="text-2xl flex justify-center items-center mb-6">
        My<div className=" px-2 font-bold">Testimonial</div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:px-14 md:py-10 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`rounded-lg p-10 shadow-2xl ${testimonial.bgColor} ${testimonial.textColor} flex flex-col items-center`}
          >
            <div className="h-20 w-20 rounded-3xl overflow-hidden mb-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <p className="text-center text-md pb-6">{testimonial.text}</p>

            <div className="text-center">
              <h5
                className={`font-bold text-lg py-6 border-t-2 ${
                  index % 2 === 1 ? "border-white" : "border-black"
                }`}
              >
                {testimonial.name}
              </h5>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
