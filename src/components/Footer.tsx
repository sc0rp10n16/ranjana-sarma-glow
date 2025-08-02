
import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 flex items-center">
            <img src="/gwr_logo.png" alt="Grow with Ranjana Logo" className="h-20 w-auto mr-4" />
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Ranjana Sarma
              </h2>
              <p className="text-gray-400">Multi-Sector Professional & Educator</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
              <a href="https://www.linkedin.com/in/ranjana-sarma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-300 hover:text-white" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
              <a href="https://www.instagram.com/sarmaranjana/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-300 hover:text-white" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
              <a href="mailto:growwithranjana@gmail.com">
                <Mail className="text-gray-300 hover:text-white" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ranjana Sarma. All rights reserved.
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-white/10"
            onClick={scrollToTop}
          >
            <ArrowUp className="text-gray-400 hover:text-white" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
