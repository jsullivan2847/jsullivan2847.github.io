import Window from "../../components/Window/Window";
import React from "react";
import Title from "../../components/Title/Title";
import Head from "next/head";


export default function About() {
  return (
    <div>
    <Head>
    <title>About</title>
        <meta
          name="description"
          content="Meta description for the Contact page"/>
    </Head>
    <Title text='About'/>
    <div className='lg:hidden lg:w-1/3 flex flex-col justify-center items-center lg:border-r-2 lg:pr-10 border-light-grey'>
        <img className="w-2/5 max-w-md md:w-48 lg:w-64 mb-2 lg:rounded-tr-[40px]" src='../images/prof_pic.jpeg' alt="" />
        <p className='mb-3 text-sm'><strong>Software Engineer</strong> in Brooklyn, NY</p>
    </div>
    <Window>
    <p className="md:max-w-[600px]">
    Hello! I'm James - I'm a software engineer with a background
    in the audio and service industries. I have a love for problem solving
    and an eye for outside-the-box solutions. I thrive in collaborative
    environments and bring a positive and focused energy to any team I join.
    My developer journey began a few years ago while studying
    sound design for game audio. When I realized I really enjoyed the
    programming side of the process, I started teaching myself C# using the
    Unity game engine. I fell in love with the way coding requires a balance of
    creative skills and critical thinking. Soon after I enrolled in an
    immersive bootcamp with General Assembly where I learned how to apply my
    skills in a professional setting - working with new technologies and
    collaborating with other developers. I'm excited to continue this
    journey and bring my growing skill-set to a new team.
  </p>
    </Window>
    </div>
  );
}


