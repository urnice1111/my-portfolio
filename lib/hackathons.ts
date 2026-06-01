import {promises as fs} from 'fs';


export interface Hackathon{
    name:string;
    date:string;
    description:string;
    status:string;
    photo:string;
    link:HackathonLink[];
}

export interface HackathonLink{
    name:string;
    link:string;
}

export async function getHackathons():Promise<Hackathon[]>{
    const raw = await fs.readFile(process.cwd() + "/app/data/hackathons.json", "utf-8");
    return JSON.parse(raw);
} 