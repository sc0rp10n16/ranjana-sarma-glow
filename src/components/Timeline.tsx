
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, GraduationCap, Award, Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const TimelineItem = ({ event, index, isOdd }: { event: TimelineEvent, index: number, isOdd: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row ${
        isOdd ? "md:flex-row-reverse" : ""
      } items-center`}
    >
      {/* Content */}
      <div className="md:w-1/2 p-4">
        <Card className={`p-6 hover-card ${
          isOdd ? "md:mr-6" : "md:ml-6"
        }`}>
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4
              ${event.category === 'Work' ? 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600' : 
                event.category === 'Education' ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600' : 
                'bg-gradient-to-br from-green-100 to-green-200 text-green-600'}`}>
              <event.icon className="w-5 h-5" />
            </div>
            <div>
              <Badge variant="outline" className="mb-2 font-medium px-3 py-1 flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {event.year}
              </Badge>
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
            </div>
          </div>
          <p className="text-gray-600">{event.description}</p>
        </Card>
      </div>
      
      {/* Circle on timeline (visible only on md and above) */}
      <div className="md:w-0 relative">
        <div className="w-12 h-12 rounded-full bg-white border-4 border-purple-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-10"></div>
      </div>
      
      {/* Empty space for the other side */}
      <div className="md:w-1/2"></div>
    </motion.div>
  );
};

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      year: "Present",
      title: "Multi-Sector Professional & Educator",
      description: "Career Counsellor with Freedom Employability Academy, Certified AUSTSWIM Swimming Instructor, and Strategic Business Consultant.",
      icon: Briefcase,
      category: "Work"
    },
    {
      year: "2024",
      title: "Business Program Manager – Bharath Advanced Therapeutics",
      description: "Driving oncology innovation by managing cross-functional programs to support cancer therapy development.",
      icon: Briefcase,
      category: "Work"
    },
    {
      year: "2023",
      title: "Program Manager – NCBS",
      description: "Led life sciences research initiatives and coordinated projects to align with institutional objectives.",
      icon: Briefcase,
      category: "Work"
    },
    {
      year: "2019",
      title: "Chairperson, POSH ICC – India Alliance",
      description: "Oversaw implementation of POSH compliance and internal committee operations.",
      icon: Award,
      category: "Achievement"
    },
    {
      year: "2013",
      title: "Senior Grants Advisor – The Wellcome Trust / DBT India Alliance",
      description: "Managed science communication, stakeholder engagement, and federal grant advisory.",
      icon: Briefcase,
      category: "Work"
    },
    {
      year: "2012",
      title: "Post-Doctoral Research – Karolinska Institutet",
      description: "Conducted solution X-ray scattering studies on intrinsically disordered proteins.",
      icon: GraduationCap,
      category: "Education"
    },
    {
      year: "MBA",
      title: "MBA in General Management",
      description: "Equipped with strategic tools, financial modeling, and audit clarity for business leadership.",
      icon: GraduationCap,
      category: "Education"
    },
    {
      year: "2009",
      title: "PhD in Biochemistry – Montana State University",
      description: "Awarded doctorate for structural and biochemical research contributions with foundation in intellectual inquiry.",
      icon: GraduationCap,
      category: "Education"
    },
    {
      year: "Patent Law",
      title: "Postgraduate Diploma in Patent Law",
      description: "Specialized expertise in intellectual property strategy and innovation frameworks.",
      icon: GraduationCap,
      category: "Education"
    }
  ];
  

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true });

  return (
    <section id="timeline" className="py-20 gradient-bg-pattern">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading mb-6"
          >
            My Journey
          </motion.h2>
          <div className="underline-gradient"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            A timeline of my professional growth and achievements
          </motion.p>
        </div>
        
        <div className="relative" ref={timelineRef}>
          {/* Vertical line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full hidden md:block z-0"
          ></motion.div>
          
          <div className="space-y-16">
            {events.map((event, index) => (
              <TimelineItem 
                key={index} 
                event={event} 
                index={index} 
                isOdd={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
