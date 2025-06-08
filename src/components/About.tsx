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
                I'm a Business Program Manager at Bharath Advanced Therapeutics with over 17 years of experience in life sciences and research management. My expertise spans biochemistry, oncology innovation, and strategic program execution.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Throughout my career, I’ve held diverse roles—from post-doctoral researcher in Sweden to senior grants advisor and POSH chair at the India Alliance. I bring a unique blend of scientific acumen, leadership, and communication, helping organizations align research objectives with real-world impact.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I'm passionate about fostering cross-functional collaboration, empowering teams, and building bridges between science and strategy to drive transformative change in the healthcare ecosystem.
              </p>
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
