import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  const paragraphs = [
    "I'm a passionate, self-proclaimed designer who specializes in full-stack development using React.js & Node.js. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matter to me.",
    "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, TailwindCSS, Supabase, and much more.",
    "When I'm not in full-on developer mode, you can find me hovering around on Twitter or Indie Hackers, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub."
  ];

  return (
    <div className='py-10 px-4 md:py-16 md:px-20'>
      <div className='md:flex'>
        <div className='mx-1 my-5 md:my-auto'>
          <Image
            src='/assets/aboutme.png' // Replace with your image path
            alt='Illustration of a person working on a laptop'
            layout='responsive'
            width={100}
            height={100}
            className='w-full md:w-auto sm:min-w-auto md:min-w-[320px] h-auto rounded-xl'
          />
        </div>
        <div className='md:ml-10 lg:ml-20'>
          <div className='text-2xl flex'>
            About <div className='font-bold px-2'>Me</div>
          </div>
          <div className='text-zinc-500 pb-4'>
            {paragraphs.map((text, index) => (
              <p className='my-4' key={index}>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
