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
    <div className="">
      <h1 className="font-bold text-xl">Updates</h1>
      {latest.map((post) => (
        <div key={post.slug} className="flex justify-between py-6">
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

const contactIcons: Record<string, React.ReactNode> = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  ),
  Resume: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M14 3v6h6" />
    </svg>
  ),
};

export function Contact(){
  const social = [
    {
      name: "Email",
      link: "mailto:emilianogarram2910@gmail.com",
      displayed_link: "emilianogarram2910@gmail.com",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/emiliano-garcia-ba4254323/",
      displayed_link: "in/emiliano-garcia-ba4254323",
    },
    {
      name: "GitHub",
      link: "https://github.com/urnice1111",
      displayed_link: "github.com/urnice1111",
    },
    {
      name: "Resume",
      link: "/emilianogarcia_resume.pdf",
      displayed_link: "emilianogarcia_resume.pdf",
      download: true,
    },
  ];
  //commit for prod
  return(
    <div className="space-y-6 text-left">
      <h1 className="font-bold text-xl text-center">Contact Me</h1>
      <p className="text-gray-500">
        I am always open to collaborations, internships, hackathons, and interesting projects.
      </p>

      <div className="space-y-3">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.link}
            {...(item.download
              ? { download: true }
              : { target: "_blank", rel: "noopener noreferrer" })}
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors hover:bg-gray-100"
          >
            <span className="flex items-center gap-3">
              <span className="text-gray-800">{contactIcons[item.name]}</span>
              <span className="font-medium text-gray-900">{item.name}</span>
            </span>
            <span className="text-blue-500 group-hover:underline">
              {item.displayed_link}
            </span>
          </a>
        ))}
      </div>

      <p className="text-center text-gray-500">
        Based in Mexico &nbsp;&bull;&nbsp; Open to remote opportunities
      </p>
      <p className="text-center font-semibold text-blue-500">
        Let&apos;s build something great.
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Hero/>
      <FeaturedProjects/>
      <Updates/>
      <Contact/>
    </div>

  );
}
