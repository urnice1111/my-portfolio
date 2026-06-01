import { getProjects } from "@/lib/projects";


export default async function FeaturedProjects(){
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
                        <h1>{item.main_language}</h1>
                    </div>

                    <p className="text-justify text-gray-500">{item.description}</p>
                </div>
            ))}

        </div>
    )


}