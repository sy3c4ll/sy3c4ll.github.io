
import { LucideIcon } from "lucide-react";

export interface ProjectIcon {
  icon: LucideIcon;
  title: string;
}

export interface ProjectData {
  title: string;
  description: string;
  details: string[];
  tech: string[];
  icons: ProjectIcon[];
  link: string;
}
