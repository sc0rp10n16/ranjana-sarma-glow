
import { Card } from "@/components/ui/card";
import { Code, Pen, Star, Users } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Pen,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Star,
      title: "Brand Design",
      description: "Developing unique brand identities and visual systems",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through research and testing",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            I combine creativity with technical expertise to deliver exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
