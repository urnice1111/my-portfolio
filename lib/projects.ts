import {promises as fs} from 'fs';


export interface Project {
  name: string;
  featured: boolean;
  description: string;
  main_language: string;
  links: { link: string; name: string }[];
}

export async function getProjects(): Promise<Project[]> {
    const file = await fs.readFile(process.cwd() + "/app/data/projects.json", "utf-8");
    return JSON.parse(file);
}