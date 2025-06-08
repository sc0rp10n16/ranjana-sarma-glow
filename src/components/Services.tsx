
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Enabling Entrepreneurial Focus Groups",
      description: "Creating and facilitating focus groups to assist in the development and growth of entrepreneurial ventures.",
      image: "placeholder.svg", // You might want to change this path to an actual image
      tags: ["Entrepreneurship", "Mentorship", "Business Development", "Networking"]
    },
    {
      title: "Fundraising Support for Startups & Academics",
      description: "Providing comprehensive support for startup founders and academics in their fundraising efforts, from strategy to execution.",
      image: "placeholder.svg", // You might want to change this path to an actual image
      tags: ["Fundraising", "Startups", "Academics", "Investment", "Strategy"]
    }
  ];
  
  

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button 
                  size="sm" 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                >
                  <Link className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
