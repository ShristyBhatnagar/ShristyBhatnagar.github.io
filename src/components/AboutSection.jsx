"use client";
import React from "react";
import Image from "next/image";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA=[
    {
        title:"Skills",
        id:"Skills",
        content:(
            <ul>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Javascript </li>
                <li>SharePoint</li>
                <li>Firebase</li>
                <li>Supabase</li>
            </ul>
        )
    },{
        title:"Education",
        id:"Education",
        content:(
            <ul>
                <p>Master of Computer Application</p>
                <p>Jain University Bengaluru</p>
                <p>2022-2024</p>

            </ul>
        )
    },{
        title:"Experience",
        id:"Experience",
        content:(
            <ul>
                <p>Zelarsoft Private Limited</p>
                <p>Role:Software Engineer Trainee</p>
                <p>Oct 2022-Present</p>
            </ul>
        )
    }
]


const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [ isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 al:px-6">
        <Image
          src={"/Images/workstation.jpg"}
          alt="workstation"
          height={500}
          width={500}
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 ">About me</h2>
          <p className="text-base lg:text-lg">
            I am a developer in experience with React Js, Next Js,Javascript,
            SharePoint, React Native, Node.js, Supabase , Firebase, HTML , CSS ,
            Git and different UI libraries. I have developed web extensions
            which is published on chrome webstore.I am a quick learner and
            always interested in expanding knowledge and skill set. I am a good
            team player and I possess leadership skills. I have been giving
            communiaction skills training too to co workers. Excited to work and collaborate
            with others to make web and mobile applications.
          </p>
      
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("Skills")}
            active={tab === "Skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Education")}
            active={tab === "Education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Experience")}
            active={tab === "Experience"}
          >
            Experience
          </TabButton>
        </div>
        <div className="mt-8">
            {TAB_DATA.find((t)=> t.id === tab).content}

        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
