import { getTrayectory } from "@/lib/trayectory";

export default async function Trayectory(){
    const trayectory = await getTrayectory();
    const languageStyles: Record<string, string> = {
        "C++":        "bg-blue-200",
        "Python":     "bg-yellow-200",
        "TypeScript": "bg-sky-200",
        "JavaScript": "bg-amber-200",
        "Swift":      "bg-orange-200",
        "Rust":       "bg-red-200",
        "Go":         "bg-cyan-200",
    };
    const pillBase = "inline-block rounded-full px-3 py-1 text-sm font-semibold";
    
    return(
        <div>
            <h1 className="text-left font-bold text-xl">Trayectory</h1>
            {trayectory.map((job) => (
                <div key={job.title} className="py-6">
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-start gap-3">
                            <h1>{job.title}</h1>
                            {job.links.map((link) => (
                                <a href={link.link} key={job.title} className="text-blue-500 hover:underline">{"[" + link.name + "]"}</a>
                            ))}
                        </div>

                        <h1 className={`${pillBase} ${languageStyles[job.main_language]}`}>{job.main_language}</h1>
                    </div>
                    <div className="flex justify-end">
                        <h1>{job.start_date} - {job.end_date}</h1>
                    </div>
                    <p className="text-justify text-gray-500">
                        {job.description}
                    </p>
                </div>
            ))}
        </div>
    )
    
}