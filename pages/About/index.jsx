
import Window from "../../components/Window/Window";
import React from "react";
import Title from "../../components/Title/Title";
import Head from "next/head";
import Image from "next/image";


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
        <img className="w-2/5 max-w-md md:w-48 lg:w-64 mb-2 lg:rounded-tr-[40px]" src='/images/prof_pic.jpeg' alt="" />
        <p className='mb-3 text-sm'><strong>Software Engineer</strong> in Brooklyn, NY</p>
    </div>
    <Window>
    <p className="md:max-w-[600px] font-poppins mb-[]">
    I&#39;m a software engineer with a background in audio and service. 
    I specialize on the frontend - particularly React.js. I just finished 
    developing a geo-location game Hide & Seek that uses the Google Maps API
    and am currently working on a project called Integrant through TOP (The Opportunity Project) - 
    a collaborative effort between the US census bureau and participating organizations to 
    develop public facing digital products using open data. I joined the project 
    with an entirely new engineering team. Together we&#39;ve been able 
    to pick up where the creators of the app left off and improve its performance
    with fresh eyes. I have a love for learning, and I value teamwork and communication. 
    In the past I&#39;ve toured as a musician and worked in fast paced kitchens. Those experiences 
    taught me to work with a great sense of urgency and the ability to bring positive energy to any team.
  </p>
    </Window>
    </div>
  );
}


