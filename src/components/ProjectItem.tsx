
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Helper function to render the icon component
const renderIcon = (IconComponent) => {
  if (!IconComponent) return null;
  return <IconComponent className="h-5 w-5 text-lavender-400" />;
};

interface ProjectItemProps {
  project: any; // Will replace with ProjectData type
  index: number;
  isCompact: boolean;
  isOpen: boolean;
  toggleProject: () => void;
  catppuccinColors: Array<{
    bg: string;
    text: string;
    border: string;
  }>;
}

const ProjectItem = ({ project, index, isCompact, isOpen, toggleProject, catppuccinColors }: ProjectItemProps) => {
  const [visibleTags, setVisibleTags] = useState(3);
  
  // Update visible tags based on screen width
  useEffect(() => {
    const updateVisibleTags = () => {
      const width = window.innerWidth;
      if (width < 640) { // sm breakpoint
        setVisibleTags(2);
      } else if (width < 768) { // md breakpoint
        setVisibleTags(3);
      } else if (width < 1024) { // lg breakpoint
        setVisibleTags(4);
      } else {
        setVisibleTags(5);
      }
    };
    
    updateVisibleTags();
    window.addEventListener('resize', updateVisibleTags);
    
    return () => {
      window.removeEventListener('resize', updateVisibleTags);
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card 
        className="bg-catppuccin-surface-0/70 backdrop-blur-sm border border-catppuccin-surface-1 overflow-hidden hover:border-lavender-400/50 transition-all duration-300 shadow-lg hover:shadow-lavender-400/10 cursor-pointer"
        onClick={toggleProject}
      >
        <CardHeader className="pb-2 sm:pb-4 pt-6">
          <div className="flex justify-between items-start">
            <div className="w-full">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-md ${catppuccinColors[index % catppuccinColors.length].bg}/10`}>
                  {project.icons[0].icon && renderIcon(project.icons[0].icon)}
                </div>
                <CardTitle className="text-catppuccin-text text-xl sm:text-2xl">{project.title}</CardTitle>
                
                <div className="ml-auto">
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-catppuccin-lavender" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-catppuccin-lavender" />
                  )}
                  <span className="sr-only">Toggle details</span>
                </div>
              </div>
              <CardDescription className="text-catppuccin-subtext-0 text-base sm:text-lg">
                {isOpen ? project.fullDescription : project.description}
              </CardDescription>
              
              {/* Display tags even when collapsed */}
              {!isOpen && (
                <div className="flex flex-wrap gap-2 mt-3 mb-4 sm:mb-2">
                  {project.tech.slice(0, visibleTags).map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${catppuccinColors[techIndex % catppuccinColors.length].border}/30 
                               ${catppuccinColors[techIndex % catppuccinColors.length].text} 
                               ${catppuccinColors[techIndex % catppuccinColors.length].bg}/5`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > visibleTags && (
                    <Badge variant="outline" className="text-catppuccin-subtext-1 border-catppuccin-subtext-1/30 bg-catppuccin-subtext-1/5">
                      +{project.tech.length - visibleTags}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        
        <Collapsible open={isOpen} onOpenChange={toggleProject}>
          <CollapsibleTrigger className="hidden">
            {/* Hidden trigger for accessibility */}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-2 pb-6 px-6">
              <ul className="space-y-2 mb-6 text-catppuccin-subtext-1 text-sm sm:text-base">
                {project.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <span className={`mr-2 ${catppuccinColors[detailIndex % catppuccinColors.length].text}`}>•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`${catppuccinColors[techIndex % catppuccinColors.length].border}/30 
                             ${catppuccinColors[techIndex % catppuccinColors.length].text} 
                             ${catppuccinColors[techIndex % catppuccinColors.length].bg}/5`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button 
                asChild 
                variant="outline" 
                className="border-catppuccin-lavender/70 hover:border-catppuccin-lavender bg-catppuccin-lavender/5 text-catppuccin-text hover:bg-catppuccin-lavender/15 hover:text-catppuccin-lavender transition-all duration-300 backdrop-blur-sm shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking the button
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5 text-catppuccin-lavender" />
                  <span className="font-medium">View Project</span>
                </a>
              </Button>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </motion.div>
  );
};

export default ProjectItem;
