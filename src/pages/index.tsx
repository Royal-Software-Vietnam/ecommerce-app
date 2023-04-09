import Image from "next/image";
import { Inter } from "next/font/google";
import Explore from "./home/Explore";
import Suggestion from "./home/Suggestion";
import OtherService from "./home/OtherService";

export default function Home() {
  return (
    <main className="overflow-x-auto bg-gray-200 scroll">
      <Explore />
      <Suggestion />  
      <OtherService />
    </main>
  );
}
