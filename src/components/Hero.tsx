
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-catppuccin-crust to-catppuccin-base z-0"></div>
      
      {/* Floating shapes with Catppuccin colors */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Reduce number of floating shapes on mobile */}
        {[...Array(isMobile ? 4 : 8)].map((_, i) => {
          // Array of Catppuccin colors for floating shapes
          const colors = [
            "bg-catppuccin-lavender/5",
            "bg-catppuccin-blue/5",
            "bg-catppuccin-mauve/5",
            "bg-catppuccin-sapphire/5",
            "bg-catppuccin-sky/5",
            "bg-catppuccin-teal/5",
            "bg-catppuccin-green/5",
            "bg-catppuccin-yellow/5"
          ];
          
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${colors[i % colors.length]} backdrop-blur-3xl`}
              style={{
                width: `${Math.random() * (isMobile ? 300 : 400) + (isMobile ? 80 : 100)}px`,
                height: `${Math.random() * (isMobile ? 300 : 400) + (isMobile ? 80 : 100)}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * (isMobile ? 20 : 40) - (isMobile ? 10 : 20)],
                y: [0, Math.random() * (isMobile ? 20 : 40) - (isMobile ? 10 : 20)],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="text-center relative z-10 py-6 sm:py-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 sm:mb-8 inline-block">
            <span className="inline-block relative">
              <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-catppuccin-text tracking-tighter">
                sy3c4ll
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1 catppuccin-gradient-1"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </div>
          
          <motion.p 
            className="text-lg sm:text-xl text-catppuccin-subtext-0 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Systems programmer specializing in <span className="text-catppuccin-lavender">Rust</span> and low-level development, with a passion for 
            learning new technologies and pushing technical boundaries.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-catppuccin-lavender/70 hover:border-catppuccin-lavender bg-catppuccin-lavender/5 text-catppuccin-text hover:bg-catppuccin-lavender/15 hover:text-catppuccin-lavender transition-all duration-300 backdrop-blur-sm shadow-lg"
              asChild
            >
              <a href="https://github.com/sy3c4ll" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-5 w-5 text-catppuccin-lavender" />
                <span className="font-medium">View My Work</span>
              </a>
            </Button>
            
            <Button 
              variant="default" 
              size="lg"
              className="catppuccin-gradient-1 text-catppuccin-base hover:opacity-90 transition-all duration-300"
              asChild
            >
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, "projects")}
                className="flex items-center gap-2"
              >
                Explore Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
