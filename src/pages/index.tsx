import Image from "next/image";
import { Inter } from "next/font/google";
import Explore from "./home/Explore";
import Suggestion from "./home/Suggestion";
import OtherService from "./home/OtherService";

export default function Home() {
  return (
    <main className="overflow-x-auto bg-[#e0e0e0]">
      <Explore />
      <Suggestion />
      <OtherService />
    </main>
  );
}
