import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Instagram, Send, MessageSquare, GraduationCap, Users, Briefcase, Phone } from "lucide-react";
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f29b916e-3fa7-4d71-85a7-f0f1c2c853ff", // Replace with your actual Web3Forms access key
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: formData.subject || "New message from Grow With Ranjana website",
          message: formData.message,
          from_name: "Grow With Ranjana Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
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
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Let's Grow Together
          </motion.h2>
          <div className="underline-gradient"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto"
          >
            Whether you're seeking mentorship, strategic guidance, educational support, or collaboration across sectors—I'm here to serve with skill, empathy, and clarity.
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
                <h3 className="text-2xl font-semibold text-gray-800 ml-4">Start a Conversation</h3>
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
                  <Label htmlFor="subject" className="text-gray-700">Area of Interest</Label>
                  <Input 
                    id="subject" 
                    placeholder="e.g., Career mentoring, Strategic consulting, Swimming lessons..." 
                    className="mt-1 rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Tell me what you need*</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share your goals, challenges, or how we might collaborate. I'm here to listen and help..." 
                    className="mt-1 min-h-[120px] rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-lg transition-all duration-300 hover:scale-105 text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
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
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Connect Across Sectors</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From first-generation learners seeking guidance to enterprises planning strategic growth, from water safety education to patent innovation—I bring diverse expertise to serve what the moment needs.
              </p>
            </div>

            {/* Service Areas */}
           
            
            <div className="space-y-4">
              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:growwithranjana@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                    growwithranjana@gmail.com
                  </a>
                </div>
              </Card>

              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <a href="tel:+917794811103" className="text-gray-600 hover:text-green-600 transition-colors">
                    +91 77948 11103
                  </a>
                </div>
              </Card>
              
              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/ranjana-sarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-blue-600 transition-colors">
                    linkedin.com/in/ranjana-sarma
                  </a>
                </div>
              </Card>
              
              <Card className="p-6 flex items-center space-x-4 hover-card group">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <a href="https://www.instagram.com/sarmaranjana/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-pink-600 transition-colors">
                    @sarmaranjana
                  </a>
                </div>
              </Card>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl mt-12">
              <h4 className="text-xl font-bold mb-4">Ready to create meaningful change?</h4>
              <p className="mb-4">Let's explore how we can grow something that lasts—together.</p>
              <Button 
                variant="secondary" 
                className="mt-2 bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => document.getElementById('firstName')?.focus()}
              >
                Start Our Conversation
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;