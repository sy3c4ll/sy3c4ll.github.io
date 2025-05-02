
import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { ProjectData } from "@/types/project";

interface ProjectListProps {
  projects: any[]; // Will replace with ProjectData type
  isCompact: boolean;
  catppuccinColors: Array<{
    bg: string;
    text: string;
    border: string;
  }>;
}

const ProjectList = ({ projects, isCompact, catppuccinColors }: ProjectListProps) => {
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({});
  
  // Toggle project expansion state
  const toggleProject = (projectTitle: string) => {
    setOpenProjects(prev => ({
      ...prev,
      [projectTitle]: !prev[projectTitle]
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-8 sm:gap-10">
      {projects.map((project, index) => (
        <ProjectItem 
          key={project.title}
          project={project}
          index={index}
          isCompact={isCompact}
          isOpen={!!openProjects[project.title]}
          toggleProject={() => toggleProject(project.title)}
          catppuccinColors={catppuccinColors}
        />
      ))}
    </div>
  );
};

export default ProjectList;
