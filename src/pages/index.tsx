import Image from "next/image";
import { Inter } from "next/font/google";
import Explore from "./home/Explore";
import Suggestion from "./home/Suggestion";
import OtherService from "./home/OtherService";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Base Ecommerce Web</title>
        <meta name="description" content="Royal Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="overflow-x-auto bg-gray-200 scroll">
        <Explore />
        <Suggestion />
        <OtherService />
      </main>
    </>
  );
}
