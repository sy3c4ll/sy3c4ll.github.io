
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-catppuccin-mantle to-catppuccin-crust z-0"></div>
      
      {/* Decorative element with Catppuccin palette */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-catppuccin-mauve/20 to-transparent"></div>
      
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-block mb-6 sm:mb-8">
          <span className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold text-catppuccin-text tracking-tight">Let's Connect</h2>
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-catppuccin-lavender via-catppuccin-mauve to-catppuccin-pink"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </span>
        </div>
        
        <motion.div 
          className="mb-10 sm:mb-12 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-catppuccin-subtext-1 text-base sm:text-lg mb-3">
            Interested in systems-level programming, machine learning applications, or innovative game development projects?
          </p>
          <p className="text-lg mt-2">
            <span className="inline-block px-2 py-1 bg-catppuccin-lavender/10 rounded-md font-medium text-catppuccin-lavender border border-catppuccin-lavender/30 max-w-full break-words">Let's collaborate on something extraordinary.</span>
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-catppuccin-lavender/70 hover:border-catppuccin-lavender bg-catppuccin-lavender/5 text-catppuccin-text hover:bg-catppuccin-lavender/15 hover:text-catppuccin-lavender transition-all duration-300 backdrop-blur-sm shadow-lg"
            asChild
          >
            <a
              href="https://github.com/sy3c4ll"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Github className="h-5 w-5 text-catppuccin-lavender" />
              <span className="font-medium">GitHub Projects</span>
            </a>
          </Button>
          
          <Button 
            variant="default" 
            size="lg" 
            className="bg-gradient-to-r from-catppuccin-lavender to-catppuccin-mauve text-catppuccin-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-catppuccin-lavender/20"
            asChild
          >
            <a
              href="mailto:sy3c4ll@gmail.com"
              className="flex items-center gap-3"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">Contact Me</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
