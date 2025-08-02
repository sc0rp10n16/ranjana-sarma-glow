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
        
        {/* Survivor Story Section */}
        <div className="mt-20">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                🌊 From Survivor to Instructor 🌊
              </h3>
            </div>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                In 2010, I nearly drowned in an eddy current on the Madison River near Yellowstone National Park. A stranger—my guardian angel—pulled me out. That moment changed the course of my life.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                For 15 years since, I've been reclaiming my relationship with water. Slowly, deliberately, and with deep respect:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 font-bold text-xl">✅</span>
                  <span className="text-lg text-gray-700">I learned how to swim.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 font-bold text-xl">✅</span>
                  <span className="text-lg text-gray-700">I became a certified scuba diver.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 font-bold text-xl">✅</span>
                  <span className="text-lg text-gray-700">I learned how to surf.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 font-bold text-xl">✅</span>
                  <span className="text-lg text-gray-700">I completed AUSTSWIM certification.</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                And this past year, I completed the rigorous assessments to become an accredited Swimming and Water Safety Instructor through the Australian Swimming Coaches and Teachers Association (AUSTSWIM).
              </p>
              
              <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  This is more than a qualification—it's a personal milestone. It stands for resilience, healing, and the belief that fear can be transformed into skill, strength, and service.
                </p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed text-center italic">
                I hope to help others—especially adults—build comfort and confidence in the water. Because everyone deserves to feel safe, strong, and free in the water.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
