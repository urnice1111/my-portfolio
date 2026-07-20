import { getProjects } from "@/lib/projects";

export default async function projects(){
    const items = await getProjects();
    const languageStyles: Record<string, string> = {
        "C++":        "bg-blue-200",
        "Python":     "bg-yellow-200",
        "TypeScript": "bg-sky-200",
        "JavaScript": "bg-amber-200",
        "Swift":      "bg-orange-200",
        "Rust":       "bg-red-200",
        "Go":         "bg-cyan-200",
        "C#":         "bg-red-200"
    };
    const pillBase = "inline-block rounded-full px-3 py-1 text-sm font-semibold";

    return (
        <div>
            <h1 className="font-bold text-xl">Selected Projects</h1>

            {items.map((item) => (
                <div key={item.name}>
                    <div className="flex justify-between items-center py-6" key={item.name}>
                        <div className="flex justify-between gap-4">
                            <h1>{item.name}</h1>
                            {item.links.map((link) => (
                                <a href={link.link} key={link.link} className="text-blue-500 hover:underline">{"[" + link.name + "]"}</a>
                            ))}
                        </div>
                        <h1 className={`${pillBase} ${languageStyles[item.main_language]}`}>{item.main_language}</h1>
                    </div>

                    <p className="text-justify text-gray-500">{item.description}</p>
                </div>
            ))}

        </div>
    )
    
}