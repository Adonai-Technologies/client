import React from 'react';
import SectionTitle from '../../Components/SectionTitle';

function About() {
  const Skills = [
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "firebase",
    "Git",
    "Render"
  ]
  return (
    <div>
      <SectionTitle Title="About Me" />
      <div className="flex w-full items-center sm:flex-col ">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player src="https://lottie.host/502b76cd-9f68-43ee-af5b-95486103f367/74dWcm07y6.json"
            background="transparent"
            speed="1"
            autoplay direction="1"
            mode="normal"></lottie-player>
        </div>
        <div className=" flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Introducing Akua, a versatile full-stack
            software developer who excels in both frontend
            and backend development. With a knack for turning
            ideas into reality, Akua brings projects to
            fruition with precision and innovation. From crafting captivating user interfaces using HTML, CSS, and JavaScript to architecting robust server-side solutions with languages like Python, Node.js, or Java, Akua's expertise spans the entire development stack.
          </p>
          <p className="text-white">
            With a keen eye for detail and a commitment to delivering high-quality code, Akua is your go-to developer for creating dynamic and
            responsive applications that exceed expectations.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">Here are a few technologies I've been working with recently</h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {
            Skills.map((skills, i) => (
              <div className='border border-tertiary py-3 px-5 rounded'>
                <h1 className='text-tertiary'>{skills}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default About;
