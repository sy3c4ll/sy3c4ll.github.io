
import { Card } from "@/components/ui/card";
import { Languages, Code, Terminal, Layout, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Programming Languages",
    level: "Diverse",
    details: "Rust, C/C++, Python, Java, Dart, Kotlin, Go, Zig",
    icon: Code
  },
  {
    name: "Human Languages",
    level: "Multilingual",
    details: "EN, KR (Native) • JP (Conversational) • FR, DE, CN (Basic)",
    icon: Languages
  },
  {
    name: "Systems Programming",
    level: "Expert",
    details: "Rust, C/C++, low-level development",
    icon: Terminal
  },
  {
    name: "Shell Scripting",
    level: "Advanced",
    details: "Bash, Nushell, system automation",
    icon: Terminal
  },
  {
    name: "UI Development",
    level: "Proficient",
    details: "GTK, Qt, Iced, Flutter",
    icon: Layout
  },
  {
    name: "Documentation",
    level: "Advanced",
    details: "Markdown, Typst, technical writing",
    icon: FileText
  }
];

const SkillCard = ({ skill, index }) => {
  // Create an array of gradient classes using our extended Catppuccin palette
  const gradients = [
    { color: "lavender", hover: "hover:border-catppuccin-lavender/70" }, 
    { color: "blue", hover: "hover:border-catppuccin-blue/70" }, 
    { color: "mauve", hover: "hover:border-catppuccin-mauve/70" },
    { color: "sapphire", hover: "hover:border-catppuccin-sapphire/70" },
    { color: "sky", hover: "hover:border-catppuccin-sky/70" },
    { color: "teal", hover: "hover:border-catppuccin-teal/70" }
  ];
  
  // Select a gradient based on the index
  const borderGradient = gradients[index % gradients.length].hover;
  const colorName = gradients[index % gradients.length].color;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full bg-catppuccin-surface-0/70 backdrop-blur-sm border border-catppuccin-surface-1 ${borderGradient} transition-all duration-300 shadow-lg hover:shadow-catppuccin-${colorName}/20`}>
        <div className="p-5 sm:p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            {skill.icon && (
              <div className={`p-2 rounded-md bg-catppuccin-${colorName}/10`}>
                <skill.icon className={`w-5 h-5 text-catppuccin-${colorName}`} />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-semibold text-catppuccin-text">{skill.name}</h3>
          </div>
          <Badge variant="outline" className={`w-fit mb-3 border-catppuccin-${colorName}/30 text-catppuccin-${colorName} bg-catppuccin-${colorName}/5`}>
            {skill.level}
          </Badge>
          <p className="text-catppuccin-subtext-1 text-sm mt-auto">{skill.details}</p>
        </div>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-catppuccin-base via-catppuccin-surface-0 to-catppuccin-mantle"></div>
      
      {/* Decorative elements with Catppuccin gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-catppuccin-blue/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-catppuccin-mauve/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <Badge variant="outline" className="mb-4 border-lavender-400/30 text-lavender-400 bg-lavender-400/5">
            Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-catppuccin-text mb-4 tracking-tight text-center px-2">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catppuccin-mauve/60 via-lavender-400 to-catppuccin-blue/60"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
