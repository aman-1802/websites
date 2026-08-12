import type { Metadata } from "next";import { CustomGiftPage } from "../components";
export const metadata:Metadata={title:"Build a Custom Gift",description:"Create a custom bouquet or hamper request based on occasion, recipient and budget."};
export default function Page(){return <CustomGiftPage/>}
