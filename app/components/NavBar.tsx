"use client";
import Link from "next/link";
import {usePathname} from "next/navigation"


// This is a cliente component because it is interactive and not a static page

export default function NavBar(){

    const currentPath = usePathname();
    const links = [
        {link: "/",  title: "Home"},
        {link: "/projects", title: "Projects"},
        {link: "/hackathons", title: "Hackathons"},
        {link: "/newsroom", title: "Newsroom"},
        {link: "/trayectory", title: "Trayectory"}]
    return(
        <div className="flex justify-between items-center py-6">
          {links.map((link) => (
            <Link 
                href={link.link} 
                key={link.title}
                className={currentPath == link.link ? "underline" : ""}> {link.title}</Link>
          ))}

        </div>
    )
}

