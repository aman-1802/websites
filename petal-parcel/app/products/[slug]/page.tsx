import type { Metadata } from "next";import { notFound } from "next/navigation";import { ProductPage } from "../../components";import { products } from "../../data";
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const product=products.find(p=>p.slug===slug);return product?{title:product.name,description:product.description,openGraph:{images:[product.image]}}:{title:"Gift not found"}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(p=>p.slug===slug);if(!product)notFound();return <ProductPage product={product}/>}
