
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const ProjectsHeader = () => {
  return (
    <motion.div 
      className="flex flex-col items-center mb-10 sm:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Badge variant="outline" className="mb-4 border-lavender-400/30 text-lavender-400 bg-lavender-400/5">
        Portfolio
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold text-catppuccin-text mb-4 tracking-tight text-center">Featured Projects</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-catppuccin-blue/60 via-lavender-400 to-catppuccin-mauve/60"></div>
    </motion.div>
  );
};

export default ProjectsHeader;
