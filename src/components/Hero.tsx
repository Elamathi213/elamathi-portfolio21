
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
        <Avatar className="w-40 h-40 mx-auto mb-8 border-4 border-white">
          <AvatarImage src="/lovable-uploads/23c1d24f-3ffc-4280-a730-3b4cbbee6b83.png" alt="Elamathi" />
          <AvatarFallback>ES</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm Elamathi
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          A CSE student passionate about using technology to design smart, beautiful, and practical solutions for real-life issues.
        </p>
        <Button 
          onClick={scrollToAbout}
          variant="outline" 
          className="text-white border-white hover:bg-white hover:text-blue-900 transition-all"
        >
          Learn More <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
