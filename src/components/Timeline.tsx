
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, GraduationCap, Award, Calendar
} from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      year: "2023",
      title: "Senior Design Lead",
      description: "Leading design strategy for major tech clients at DesignForward Agency",
      icon: Briefcase,
      category: "Work"
    },
    {
      year: "2021",
      title: "Design Excellence Award",
      description: "Recognized for outstanding contributions to digital product design",
      icon: Award,
      category: "Achievement"
    },
    {
      year: "2020",
      title: "UX Design Lead",
      description: "Headed the UX team at TechVision, delivering solutions for Fortune 500 clients",
      icon: Briefcase,
      category: "Work"
    },
    {
      year: "2018",
      title: "Master's in Digital Design",
      description: "Graduated with distinction from Design Institute",
      icon: GraduationCap,
      category: "Education"
    },
    {
      year: "2016",
      title: "UI/UX Designer",
      description: "Started professional journey at CreativeMinds Studio",
      icon: Briefcase,
      category: "Work"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-300 to-pink-300 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center`}
              >
                {/* Content */}
                <div className="md:w-1/2 p-4">
                  <Card className={`p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4
                        ${event.category === 'Work' ? 'bg-purple-100 text-purple-600' : 
                          event.category === 'Education' ? 'bg-blue-100 text-blue-600' : 
                          'bg-green-100 text-green-600'}`}>
                        <event.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-1 font-semibold">
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
                  <div className="w-10 h-10 rounded-full bg-white border-4 border-purple-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
