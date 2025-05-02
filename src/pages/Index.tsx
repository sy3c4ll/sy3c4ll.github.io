
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-catppuccin-base min-h-screen w-full overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-10"></div>
      
      {/* Subtle color accents using the Catppuccin palette */}
      <div className="fixed top-0 right-0 w-72 h-72 rounded-full bg-catppuccin-lavender/5 blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-80 h-80 rounded-full bg-catppuccin-mauve/5 blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/4 w-96 h-96 rounded-full bg-catppuccin-blue/5 blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 right-1/4 w-64 h-64 rounded-full bg-catppuccin-sapphire/5 blur-3xl pointer-events-none"></div>
      
      {/* Content wrapper with consistent max-width */}
      <div className="relative z-20 w-full">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
