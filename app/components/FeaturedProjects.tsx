import { getProjects } from "@/lib/projects";


export default async function FeaturedProjects(){

    const languageStyles: Record<string, string> = {
        "C++":        "bg-blue-300",
        "Python":     "bg-yellow-300",
        "TypeScript": "bg-sky-300",
        "JavaScript": "bg-amber-300",
        "Swift":      "bg-orange-300",
        "Rust":       "bg-red-300",
        "Go":         "bg-cyan-300",
    };
    const pillBase = "inline-block rounded-full px-3 py-1 text-sm font-semibold";
    console.log("FeaturedProjects rendered at", new Date().toISOString());
    const items = await getProjects();
    

    return (
        <div className="py-6">
            <h1 className="font-bold text-xl">Selected Projects</h1>

            {items.filter(item => item.featured).map((item) => (

                <div key={item.name}>
                    <div className="flex justify-between items-center py-6" key={item.name}>
                        <div className="flex justify-between gap-4">
                            <h1>{item.name}</h1>
                            {item.links.map((link) => (
                                <a href={link.link} key={item.name} className="text-blue-500 hover:underline">{"[" + link.name + "]"}</a>
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