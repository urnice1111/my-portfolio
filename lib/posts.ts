import {promises as fs} from 'fs';
import path from "path";
import matter from "gray-matter";

const POSTS_DIR =  path.join(process.cwd(), "/app/data/posts");

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
}

export interface Post extends PostMeta{
    content: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
    const files = await fs.readdir(POSTS_DIR);
    const posts = await Promise.all(
        files
            .filter((f) => f.endsWith(".md"))
            .map(async (filename) => {
                const slug = filename.replace(/\.md$/, "");
                const raw = await fs.readFile(path.join(POSTS_DIR, filename), "utf-8");
                const { data } = matter(raw);
                return { slug, ...(data as Omit<PostMeta, "slug">) };
            })
    );

    return posts.sort((a, b) => (a.date < b.date ? 1: -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null>{
    try{
        const raw = await fs.readFile(path.join(POSTS_DIR,`${slug}.md`), "utf-8");
        const {data, content} = matter(raw);
        return {slug, content, ...(data as Omit<PostMeta, "slug">)};
    } catch{
        return null;
    }

}