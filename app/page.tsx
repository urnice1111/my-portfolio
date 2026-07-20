import FeaturedProjects from "./components/FeaturedProjects";
import { getAllPosts } from "@/lib/posts";
import Image from 'next/image'

export function Hero(){
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Currently cooking this.</h1>
      <h2> {"meanwhile here's my dog"}</h2>
      <div className="flex items-center justify-center">
          <Image className= "" src= "/coca.jpg" width={300} height = {100} alt="Emiliano's amazing dog"/>
      </div>
      <h3> {"-Emiliano :)"}</h3>
      

    </div>
  )
}

export async function Updates(){
  const posts = await getAllPosts();

  const latest = posts.slice(0,4);

  return(
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Updates</h1>
      {latest.map((post) => (
        <div key={post.slug} className="flex justify-between">
          <a href={"/newsroom/" + post.slug}>{post.title}</a>
          <p className="text-gray-500">
            {
              new Date(post.date).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit'
              })
            }
          </p>
        </div>

      ))}



    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <FeaturedProjects/>
      <Updates/> */}
    </div>

  );
}
