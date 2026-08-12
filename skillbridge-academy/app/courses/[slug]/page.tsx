import { CourseDetail } from "../../components";
import { courses } from "../../data";

export function generateStaticParams(){ return courses.map(c=>({slug:c.slug})); }
export default async function CoursePage({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const course=courses.find(c=>c.slug===slug)||courses[0]; return <CourseDetail course={course}/> }
