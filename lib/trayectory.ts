import {promises as fs} from 'fs'


export interface Skill{
    skill: string;
}

export interface Link{
    name: string;
    link: string;
}

export interface Job {
    title: string;
    start_date: string;
    end_date: string;
    description: string;
    main_language: string;
    skills: Skill[];
    links: Link[];
}

export async function getTrayectory(): Promise<Job[]>{
    const file = await fs.readFile(process.cwd() + "/app/data/trayectory.json", "utf-8");
    return JSON.parse(file);

}