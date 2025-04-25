
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Computer Science Engineering</h3>
            <p className="text-gray-700 leading-relaxed">
              I am a Computer Science Engineering student with a strong passion for coding and web development. 
              I thrive on using creativity and technology to build smart, efficient, and visually appealing 
              solutions that address real-world problems.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              With a keen eye for design and functionality, I enjoy crafting user-friendly digital experiences 
              that not only perform well but also leave a lasting impression.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              I'm constantly exploring new tools, frameworks, and technologies to enhance my skills and stay 
              ahead in the fast-evolving tech landscape. Whether it's developing interactive websites or solving 
              complex programming challenges, I am driven by a desire to innovate and make a meaningful impact 
              through my work.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
