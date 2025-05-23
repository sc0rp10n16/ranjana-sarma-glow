
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Instagram, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Success toast (in real app, would send this data to backend)
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 gradient-bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading mb-6"
          >
            Let's Work Together
          </motion.h2>
          <div className="underline-gradient"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            Have a project in mind? I'd love to hear about it and discuss how we can bring your vision to life.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 hover:shadow-xl transition-all duration-500 border-t-4 border-purple-500 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">Send a Message</h3>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700">First Name*</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name" 
                      className="mt-1 rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      value={formData.firstName}
                      onChange={handleChange} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name" 
                      className="mt-1 rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email*</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-1 rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project inquiry" 
                    className="mt-1 rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Message*</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    className="mt-1 min-h-[120px] rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-lg transition-all duration-300 hover:scale-105 text-base flex items-center justify-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a specific project in mind or just want to say hello, 
                don't hesitate to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">ranjana.sarma@email.com</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <p className="text-gray-600">linkedin.com/in/ranjanasarma</p>
                </div>
              </Card>
              
              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <p className="text-gray-600">@ranjanasarma.design</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl mt-12">
              <h4 className="text-xl font-bold mb-4">Looking for a creative partner?</h4>
              <p className="mb-4">Let's collaborate and create something amazing together.</p>
              <Button 
                variant="secondary" 
                className="mt-2 bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => document.getElementById('firstName')?.focus()}
              >
                Start a Project
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
