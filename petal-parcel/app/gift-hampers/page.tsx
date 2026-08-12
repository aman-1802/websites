import type { Metadata } from "next";import { CatalogPage } from "../components";
export const metadata:Metadata={title:"Gift Hampers",description:"Curated chocolate, self-care and celebration hampers in Ahmedabad."};
export default function Page(){return <CatalogPage preset="Hampers" title="Hampers full of good things" copy="Curated treats, comforting self-care and keepsakes, packed beautifully for the moment."/>}
