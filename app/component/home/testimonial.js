import React from 'react';
import Image from 'next/image';

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
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        My <span className="text-primary">Testimonial</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`rounded-lg p-6 shadow-2xl ${testimonial.bgColor} ${testimonial.textColor} flex flex-col items-center`}
            style={{ width: "100%", maxWidth: "373px", margin: "0 auto" }}
          >
            <div className="h-20 w-20 rounded-full overflow-hidden mb-6">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            <p className="text-center text-md mb-6">{testimonial.text}</p>

            <div className="text-center">
              <h5 className="font-bold text-lg">{testimonial.name}</h5>
              <p className="text-xs">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
