
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python"],
  },
  {
    title: "Frontend Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Tools & Development",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-blue-800">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-700">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
