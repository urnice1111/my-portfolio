import { getHackathons } from "@/lib/hackathons";
import Image from "next/image";

export default async function hackathons(){
    const hackathons = await getHackathons();
    return(
        <div>
            <h1 className="text-left font-bold text-xl">Hackathons</h1>

            {hackathons.map((hack) => (
                <div key={hack.name}>
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-start gap-3 py-1">
                            <h1>{hack.name}</h1>
                            {hack.link.map((link) => (
                                <a href={link.link} key={link.link} className="text-blue-500 hover:underline">{"[" + link.name + "]"}</a>
                            ))}
                        </div>
                        <h1>
                            {hack.status}
                        </h1>
                    </div>
                    <p className="text-justify text-gray-500">
                        {hack.description}
                    </p>

                    <div className="flex justify-center py-6">
                        <Image
                            src={"/" + hack.photo}
                            alt={hack.name}
                            width={300}
                            height={300}
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>

                </div>
            ))}
        </div>
    )


    
}