import React from "react";
import Search from "../Search";
import Image from "next/image";

const navItems = [
  { name: "Hàng nóng", path: "/hots" },
  { name: "Quà tặng", path: "/gifts" },
  { name: "Giảm giá", path: "/sales" },
  { name: "Free ship", path: "/freeships" },
];

function Navbar() {
  return (
    <div>
      <Search />
      <div className="flex items-center justify-center absolute top-6 right-[7%]">
        <button className="flex flex-col items-center px-4 justify-center text-sm">
          <Image
            src="/user.svg"
            width="21"
            height="17"
            alt={""}
            className="mb-2"
          />
          Người dùng
        </button>

        <button className="flex flex-col items-center px-4 justify-center text-sm">
          <Image
            src="/cart.svg"
            width="21"
            height="17"
            alt={""}
            className="mb-2"
          />
          Giỏ hàng
        </button>
      </div>
      <div className="flex w-full justify-between border border-gray-300 border-solid border-1px py-4 px-[6.8%]">
        <div className="flex items-center text-[#1C1C1C]">
          <Image
            src="/menu.svg"
            width="18"
            height="12"
            alt={""}
            className="mr-4"
          />
          Tất cả
        </div>
        <div>
          <ul className="flex items-start">
            {navItems.map((item, index) => (
              <a className="text-[#1C1C1C]" key={index} href={item.name}>
                <li className="px-4 ">{item.name}</li>
              </a>
            ))}
            <li className="flex px-4">
              <a className="text-[#1C1C1C] mr-2" href="/more">
                Thêm
              </a>
              <Image src="/dropdown.svg" width="12" height="8" alt={""} />
            </li>
          </ul>
        </div>
        <div className="flex text-[#1C1C1C] w-[15%]">
          <button className="flex items-center w-1/3">
            <p className="px-4">VND</p>
            <Image src="/dropdown.svg" width="12" height="8" alt={""} />
          </button>
          <button className="flex items-center w-2/3">
            <p className="px-4">Tỉnh Thành</p>
            <Image src="/dropdown.svg" width="12" height="8" alt={""} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
