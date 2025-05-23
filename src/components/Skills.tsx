
import { Card } from "@/components/ui/card";
import { Code, Pen, Star, Users, BarChart, Layers } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      icon: Layers,
      title: "Program Management",
      description: "Leading cross-functional teams and managing research programs with strategic alignment",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart,
      title: "Strategic Planning",
      description: "Driving long-term vision through data-driven strategy and stakeholder engagement",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring and guiding professionals across scientific and administrative domains",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Pen,
      title: "Science Communication",
      description: "Conveying complex scientific ideas to diverse audiences through training and outreach",
      color: "from-blue-500 to-blue-600"
    }
  ];
  
  
  const tools = [
    { name: "Program Coordination", level: 95 },
    { name: "Scientific Writing", level: 90 },
    { name: "Stakeholder Engagement", level: 88 },
    { name: "Research Strategy", level: 85 },
    { name: "Grant Advisory", level: 80 },
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Layers className="mr-2 text-purple-600" />
            Tools & Technologies
          </h3>
          <div className="space-y-6">
            {tools.map((tool, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{tool.name}</span>
                  <span className="text-purple-600 font-semibold">{tool.level}%</span>
                </div>
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
