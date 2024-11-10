import React from 'react';
import Image from 'next/image'

const myexperience = () => {
  return (
    <div className='bg-black text-white  px-4 py-10'>
        <h2 className="text-3xl font-bold text-center mb-8">
        My <span className="text-primary">Testimonial</span>
      </h2>

        {/* cards */}

        <div className='border-gray-300 border-2 rounded px-6 py-[30px] hover:bg-gray-800'>
            <div className='md:flex md:justify-between'>
                <div className='flex mb-8'>
                    <div className='flex justify-center items-center h-16 w-16'>
                    <Image
                    src="/assets/google.png"
                    alt="{skill.name}"
                    width={160}
                    height={160}
                    className=""
                />
                    </div>
                    <div className='font-bold text-2xl pl-8 flex justify-center items-center'>
                        <h5>Lead software engineer at google</h5>
                    </div>
                </div>
                <div className='text-lg flex justify-center items-center'>
                    jan-2023 to jan-2024
                </div>
            </div>

            <div className='text-lg'>
            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
            </div>
        </div>

        {/* cards  */}


        <div className='border-gray-300 border-2 rounded px-6 py-[30px] hover:bg-gray-800 my-5'>
            <div className='md:flex md:justify-between my-2'>
                <div className='flex mb-8'>
                    <div className='flex justify-center items-center h-16 w-16'>
                    <Image
                    src="/assets/youtube.png"
                    alt="{skill.name}"
                    width={160}
                    height={160}
                    className=""
                />
                    </div>
                    <div className='font-bold text-2xl pl-8 flex justify-center items-center'>
                        <h5>Software Engineer at Youtube</h5>
                    </div>
                </div>
                <div className='text-lg flex justify-center items-center'>
                    jan-2022 to jan-2023
                </div>
            </div>

            <div className='text-lg'>
            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
            </div>
        </div>

        {/* cards */}

        <div className='border-gray-300 border-2 rounded px-6 py-[30px] hover:bg-gray-800'>
            <div className='md:flex md:justify-between'>
                <div className='flex mb-8'>
                    <div className='flex justify-center items-center h-16 w-16'>
                    <Image
                    src="/assets/apple.png"
                    alt="{skill.name}"
                    width={160}
                    height={160}
                    className=""
                />
                    </div>
                    <div className='font-bold text-2xl pl-8 flex justify-center items-center'>
                        <h5>Junior Software Engineer at Apple</h5>
                    </div>
                </div>
                <div className='text-lg flex justify-center items-center'>
                    jan-2021 to jan-2022
                </div>
            </div>

            <div className='text-lg'>
            As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
            </div>
        </div>

    </div>
  )
}

export default myexperience