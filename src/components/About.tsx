
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I'm Ranjana, a passionate designer with over 5 years of experience in creating 
                digital experiences that matter. I believe in the power of good design to transform 
                ideas into impactful solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in design started with a curiosity for how beautiful interfaces can 
                enhance user experiences. Today, I specialize in creating brands and digital 
                products that not only look stunning but also serve their purpose effectively.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </Card>
                <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-pink-600 mb-2">30+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto relative overflow-hidden">
                <img 
                  src="/lovable-uploads/aa5e8fc0-23f5-4957-a138-4857a9963333.png" 
                  alt="Ranjana Sarma" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
