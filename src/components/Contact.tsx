
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your email" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:eelamathisankar@gmail.com" className="flex items-center hover:text-blue-600 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <p className="text-gray-700">eelamathisankar@gmail.com</p>
                </a>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <p className="text-gray-700">9894149305</p>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <p className="text-gray-700">Salem, Tamil Nadu</p>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="https://github.com/Elamathi213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-6 w-6 text-blue-600" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/elamathi-sankar-172128291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-blue-600" />
                  </a>
                  <a 
                    href="mailto:eelamathisankar@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-blue-600" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
