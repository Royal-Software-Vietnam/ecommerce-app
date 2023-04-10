import React from "react";
import Search from "./Search";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div className="flex relative mx-[6.8%]">
        <Link href="/" className="absolute left-0 top-4 p-2 border border-solid border-[1px] border-[#DEE2E7] rounded-lg hover:border-[#0067FF] hover:cursor-pointer">
            <Image className="" width="40" height="40" src="/favicon.png" alt="" />
        </Link>
        <Search />
        <div className="absolute grid grid-cols-2 gap-4 items-center justify-center top-6 right-0">
          <Link
            href="/"
            className="col-span-1 flex flex-col items-center justify-center text-sm"
          >
            <Image
              width="20"
              height="19"
              className="mb-2"
              src="/user.svg"
              alt=""
            />
            Người dùng
          </Link>

          <Link
            href="/cart"
            className="col-span-1 flex flex-col items-center justify-center text-sm"
          >
            <Image
              width="20"
              height="19"
              className="mb-2"
              src="/cart.svg"
              alt=""
            />
            Giỏ hàng
          </Link>
        </div>
      </div>
      <Navbar />
    </>
  );
}
