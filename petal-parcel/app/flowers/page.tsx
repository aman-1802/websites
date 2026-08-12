import type { Metadata } from "next";import { CatalogPage } from "../components";
export const metadata:Metadata={title:"Fresh Flowers",description:"Browse rose bouquets, mixed-flower baskets and vase arrangements in Ahmedabad."};
export default function Page(){return <CatalogPage preset="Flowers" title="Fresh flowers, arranged with feeling" copy="Hand-tied bouquets, seasonal baskets and vase arrangements for celebrations big and small."/>}
