
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import ProjectList from "./ProjectList";
import ProjectsHeader from "./ProjectsHeader";
import { projects, catppuccinColors } from "@/data/projectsData";

const Projects = () => {
  const isMobile = useIsMobile(768);
  const [isCompact, setIsCompact] = useState(false);
  
  // Use effect to check screen size
  useEffect(() => {
    setIsCompact(isMobile);
  }, [isMobile]);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-catppuccin-base via-catppuccin-mantle to-catppuccin-crust z-0"></div>
      
      {/* Decorative elements with Catppuccin colors */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-catppuccin-pink/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-catppuccin-blue/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ProjectsHeader />
        <ProjectList 
          projects={projects}
          isCompact={isCompact}
          catppuccinColors={catppuccinColors}
        />
      </div>
    </section>
  );
};

export default Projects;
