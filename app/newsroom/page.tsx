
import { getAllPosts} from "@/lib/posts";
import Link from "next/link";

export default async function Newsroom(){
    const posts = await getAllPosts();

    return (
        <div>
            <div className="flex justify"><h1 className="font-bold text-xl">Newsroom</h1></div>
            {posts.map((post) => (

                <div key={post.slug} className="flex items-start gap-3 py-1">
                    <div className="mt-2 h-2 w-2 rounded-full bg-yellow-400 shrink-0" />
                    <div className="flex flex-col w-full">
                        <Link href={"newsroom/" + post.slug} className="text-left">{post.title}</Link>
                        <p className="text-justify text-gray-500">{post.description}</p>
                        
                    </div>
                    <div>
                        <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit'
                            })}
                        </span>
                        
                    </div>
                </div>

            ))}
        </div>
    )
}