import type { Metadata } from "next";import { CatalogPage } from "../components";
export const metadata:Metadata={title:"Personalised Gifts",description:"Photo frames, keepsakes and personalised gifts for Ahmedabad delivery."};
export default function Page(){return <CatalogPage preset="Personalised" title="Personalised gifts with their name on it" copy="Photo keepsakes and thoughtful details made to hold a little more meaning."/>}
