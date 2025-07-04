
import { Card } from "@/components/ui/card";
import { Code, Pen, Star, Users, BarChart, Layers } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      icon: Layers,
      title: "Strategic Leadership",
      description: "Boardroom decision-making, family enterprise advisement, and sustainable growth planning",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart,
      title: "Financial & Legal Acumen",
      description: "MBA-driven strategy, financial modeling, audit clarity, and patent law expertise",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Education & Mentorship",
      description: "Career counselling, communications mentoring, and empowering first-generation learners",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Pen,
      title: "Community Safety & Wellness",
      description: "Certified swimming instructor, water safety educator, and community health advocate",
      color: "from-blue-500 to-blue-600"
    }
  ];
  
  
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-20 gradient-bg-pattern">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading mb-6"
          >
            My Skills
          </motion.h2>
          <div className="underline-gradient"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            I combine creativity with technical expertise to deliver exceptional results
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="p-6 text-center hover-card group">
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default Skills;
