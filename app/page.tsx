import FeaturedProjects from "./components/FeaturedProjects";
import { getAllPosts } from "@/lib/posts";

export function Hero(){
  return (
    <div className="space-y-6">
      <h1 className="font-bold text-xl">Emiliano Garcia</h1>
      <p className="text-justify">I am a Computer Science student at Tecnologico de Monterrey University {" "}
      <a href="https://tec.mx/es/ingenieria-y-ciencias/ingenieria-en-tecnologias-computacionales?srsltid=AfmBOopW3LBthdhMbElUTtHjqlc7dDnNqopxPZF64GaGS3Enm4JlRgPw" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        (ITC)
      </a>{" "}
      and {" "}
      <a href="https://www.itec.community" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        iTec&apos;s 

      </a> {" "}
      
      
      founder and ex-president. I am interested into AI, ML, Swift Development and Cloud Computing.</p>
      <p className="text-justify">As a CS student I&apos;ve been awarded into multiple competitions such as hackathons at Harvard (HackHarvard 25) and MIT (RH @MIT). As president of iTec group I am commited to lower the breach of swift developers in my community as my main objective.</p>
      <p className="text-justify">I love to spend my free time into rocketery as I am learning to improve my model rockets; and competitive programming. My favorite language for ICPC is C++! </p>
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
      <FeaturedProjects/>
      <Updates/>
    </div>

  );
}
