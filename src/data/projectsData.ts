
import { Github, Code, Music, Gamepad, Network, Mic, Server } from "lucide-react";
import { ProjectData } from "@/types/project";

export const projects = [
  {
    title: "MIDea",
    description: "An innovative machine learning project for algorithmic music composition that generates MIDI files using neural networks.",
    fullDescription: "An innovative machine learning project for algorithmic music composition that generates MIDI files using neural networks. Built with C++ and trained on the MAESTRO dataset, it explores the intersection of AI and musical creativity.",
    details: [
      "Neural network architecture for music generation",
      "Direct MIDI file output for immediate playback",
      "Integration with professional audio libraries",
      "Training pipeline using the MAESTRO dataset",
    ],
    tech: ["C++", "Machine Learning", "MIDI", "Audio Processing"],
    icons: [
      { icon: Music, title: "Music Generation" }
    ],
    link: "https://github.com/sy3c4ll/midea"
  },
  {
    title: "Chess of Hastings",
    description: "A unique chess variant inspired by the 1066 Battle of Hastings with asymmetrical armies and distinctive gameplay mechanics.",
    fullDescription: "A unique chess variant inspired by the 1066 Battle of Hastings, featuring asymmetrical armies and distinctive gameplay mechanics. Recently rewritten in Rust for improved performance and cleaner code architecture.",
    details: [
      "Asymmetrical gameplay with historically-inspired Norman and Saxon armies",
      "Complex tactical elements including specialized units like Cavalry, Archers, Huscarls, and Shieldsmen",
      "Unique king mechanics and victory conditions",
      "Multiple iterations showing continuous improvement (Java → Rust)",
    ],
    tech: ["Rust", "Game Development", "Algorithm Design"],
    icons: [
      { icon: Gamepad, title: "Strategic Game" }
    ],
    link: "https://github.com/sy3c4ll/chess-of-hastings-rs"
  },
  {
    title: "DisMANET",
    description: "A decentralized networking project that enables direct peer-to-peer communication using IEEE 802.11 without central servers.",
    fullDescription: "A decentralized networking project that enables direct peer-to-peer communication using IEEE 802.11 without requiring central servers. Built for Raspberry Pi devices, it implements a virtual mesh network for file sharing and direct communication.",
    details: [
      "Custom network topology implementation with virtual wireless devices",
      "Automated peer discovery and shortest path routing",
      "Shell scripts for network setup, connection management, and file transmission",
      "Python helper scripts for complex calculations and routing logic",
    ],
    tech: ["Shell Scripting", "Python", "Network Programming", "IEEE 802.11"],
    icons: [
      { icon: Network, title: "Mesh Network" }
    ],
    link: "https://github.com/sy3c4ll/dismanet"
  },
  {
    title: "Hancom on Linux",
    description: "A Docker-based solution for running Hancom Office 2020 on Linux systems, overcoming distribution limitations.",
    fullDescription: "A Docker-based solution for running Hancom Office 2020 on Linux systems, overcoming distribution limitations and dependency issues. Features automated container setup and launch scripts for seamless integration.",
    details: [
      "Containerized office suite deployment using Docker",
      "Automated dependency resolution and package extraction",
      "Cross-distribution compatibility through containerization",
      "Custom launch scripts for each application component",
    ],
    tech: ["Docker", "Shell Scripting", "Linux", "Container Orchestration"],
    icons: [
      { icon: Server, title: "Linux System" }
    ],
    link: "https://github.com/sy3c4ll/hnconlinux"
  },
  {
    title: "Voice Estimation",
    description: "A deep learning project that estimates gender and age from voice input using Mel spectrograms and CNNs.",
    fullDescription: "A deep learning project that estimates gender and age from voice input using Mel spectrograms and Convolutional Neural Networks (CNN). Features a real-time prediction GUI and comprehensive data processing pipeline.",
    details: [
      "CNN model architecture for audio analysis",
      "Mel spectrogram feature extraction pipeline",
      "Real-time voice processing and prediction",
      "User-friendly GUI interface for live estimations",
    ],
    tech: ["Python", "TensorFlow", "Signal Processing", "CNN"],
    icons: [
      { icon: Mic, title: "Voice Analysis" }
    ],
    link: "https://github.com/sy3c4ll/voice-estimation"
  },
  {
    title: "LVEq",
    description: "A C++ simulation of predator-prey dynamics using the Lotka-Volterra equations, visualized with OpenGL.",
    fullDescription: "A C++ simulation of predator-prey dynamics using the Lotka-Volterra equations, visualized with OpenGL. This project simulates and measures the interactions between 100 predators, 1,000 prey, and 1,000 plants in a controlled environment.",
    details: [
      "Real-time visualization using OpenGL",
      "Complex ecological simulation with multiple species",
      "CSV data logging for population analysis",
      "Interactive controls for population monitoring",
    ],
    tech: ["C++", "OpenGL", "GLFW", "Scientific Computing"],
    icons: [
      { icon: Server, title: "Simulation System" }
    ],
    link: "https://github.com/sy3c4ll/lveq-cpp"
  },
  {
    title: "Conio",
    description: "A modern, cross-platform C++ library reimplementing conio.h functionality for console manipulation.",
    fullDescription: "A modern, cross-platform C++ library reimplementing conio.h functionality. It provides a sanitized, uniform interface for console manipulation across different operating systems, making legacy console code more maintainable and portable.",
    details: [
      "Cross-platform implementation for Windows and UNIX systems",
      "Clean namespace organization preventing symbol conflicts",
      "Implementation of essential console functions like getch, clrscr",
      "Platform-specific optimizations using Windows Console API and UNIX TTY",
    ],
    tech: ["C++", "Windows API", "UNIX TTY", "Cross-platform Development"],
    icons: [
      { icon: Code, title: "System Programming" }
    ],
    link: "https://github.com/sy3c4ll/conio"
  }
];

// Array of Catppuccin color classes for variety
export const catppuccinColors = [
  { bg: "bg-catppuccin-lavender", text: "text-catppuccin-lavender", border: "border-catppuccin-lavender" },
  { bg: "bg-catppuccin-mauve", text: "text-catppuccin-mauve", border: "border-catppuccin-mauve" },
  { bg: "bg-catppuccin-blue", text: "text-catppuccin-blue", border: "border-catppuccin-blue" },
  { bg: "bg-catppuccin-sapphire", text: "text-catppuccin-sapphire", border: "border-catppuccin-sapphire" },
  { bg: "bg-catppuccin-sky", text: "text-catppuccin-sky", border: "border-catppuccin-sky" },
  { bg: "bg-catppuccin-teal", text: "text-catppuccin-teal", border: "border-catppuccin-teal" }
];
