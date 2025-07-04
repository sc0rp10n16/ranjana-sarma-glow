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
          {/* Text Section */}
           <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I'm Ranjana Sarma, a mission-adaptable professional with a diverse skill set spanning science, management, law, education, and community health. My journey is rooted in a deep commitment to empowerment—whether it's guiding first-generation learners, designing inclusive futures, or navigating global conversations around safety, legacy, and learning.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                With a PhD in Biochemistry and a Postgraduate Diploma in Patent Law, I began my career in STEM with a rigorous foundation in intellectual inquiry and innovation. Over time, I complemented this with an MBA in General Management, equipping myself with the tools of strategy, financial modeling, and audit clarity—skills that translate into boardroom decision-making, family enterprise advisement, and sustainable growth planning.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                For the past several years, I've also served as a Career Counsellor and Communications Mentor with Freedom Employability Academy, working with underprivileged youth to build confidence, purpose, and life skills. Teaching is not a role for me—it's a relationship. That ethos extends to my work as a Certified Teacher of Swimming and Water Safety through AUSTSWIM (Australia), where I bring confidence and safety to the water, particularly for women, children, and underserved communities.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  My career is not defined by a single industry—but by a single question: <em>"What does this moment need, and how can I serve with skill, empathy, and clarity?"</em>
                </p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full overflow-hidden relative">
                <img 
                  src="/images/rs.png" 
                  alt="Ranjana Sarma" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 md:w-16 md:h-16 bg-blue-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
