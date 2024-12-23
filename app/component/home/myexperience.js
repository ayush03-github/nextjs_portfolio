import React from 'react';
import Image from 'next/image';

const ExperienceCard = ({ imageSrc, altText, title, duration, description }) => (
  <div className='border-gray-300 border-2 rounded px-6 py-6 hover:bg-gray-800 my-5'>
    <div className='md:flex md:justify-between items-center mb-4'>
      <div className='flex items-center mb-4 md:mb-0'>
        <div className='flex justify-center items-center h-16 w-16'>
          <Image
            src={imageSrc}
            alt={altText}
            width={64}
            height={64}
            className='object-contain'
          />
        </div>
        <div className='font-bold text-2xl pl-6'>
          <h5>{title}</h5>
        </div>
      </div>
      <div className='text-lg'>{duration}</div>
    </div>
    <div className='text-lg'>
      {description}
    </div>
  </div>
);

const MyExperience = () => {
  const experiences = [
    {
      imageSrc: '/assets/google.png',
      altText: 'Google Logo',
      title: 'Lead Software Engineer at Google',
      duration: 'Jan 2023 to Jan 2024',
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      imageSrc: '/assets/youtube.png',
      altText: 'YouTube Logo',
      title: 'Software Engineer at YouTube',
      duration: 'Jan 2022 to Jan 2023',
      description:
        "As a Senior Software Engineer at YouTube, I contributed to key projects aimed at enhancing video streaming quality and optimizing content delivery networks. My work directly improved user engagement and the platform's reliability.",
    },
    {
      imageSrc: '/assets/apple.png',
      altText: 'Apple Logo',
      title: 'Junior Software Engineer at Apple',
      duration: 'Jan 2021 to Jan 2022',
      description:
        "As a Junior Software Engineer at Apple, I collaborated on innovative solutions for iOS development, focusing on enhancing application performance and user interfaces. My contributions supported the seamless integration of cutting-edge features into the Apple ecosystem.",
    },
  ];

  return (
    <div className='bg-black text-white px-4 py-10'>
      <div className='text-2xl flex justify-center items-center mb-6'>
        My<span className='px-2 font-bold'>Experience</span>
      </div>
      {experiences.map((obj, i) => (
        <ExperienceCard
          key={i}
          imageSrc={obj.imageSrc}
          altText={obj.altText}
          title={obj.title}
          duration={obj.duration}
          description={obj.description}
        />
      ))}
    </div>
  );
};

export default MyExperience;
