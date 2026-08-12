import { courses } from "./data";
export default function sitemap(){const base="https://skillbridge-academy-training-demo.aagarwal1802.chatgpt.site";return ["","/courses","/about","/stories","/contact",...courses.map(c=>`/courses/${c.slug}`)].map(url=>({url:`${base}${url}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:url===""?1:0.8}))}
