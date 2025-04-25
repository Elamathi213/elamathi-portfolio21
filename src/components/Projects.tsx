
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const projects = [
  {
    title: "Smart Electricity Energy Meter",
    description: "A smart energy meter tracks electricity usage, sends data automatically, and enables accurate, real-time billing.",
    image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and experience as a Computer Science Engineering student.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=600&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardHeader className="flex flex-row items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                <CardTitle className="text-xl font-semibold text-blue-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
