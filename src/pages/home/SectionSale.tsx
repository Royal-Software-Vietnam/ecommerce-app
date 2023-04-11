import Image from "next/image";
import React, { useEffect } from "react";

const listItems = [
    { title: "Đồng hồ điện tử", price: "300.000", svg: "/item-1.svg" },
    { title: "Máy ảnh", price: "1.000.000", svg: "/item-2.svg" },
    { title: "Tai nghe", price: "500.000", svg: "/item-3.svg" },
    { title: "Đồ gia dụng", price: "100.000", svg: "/item-4.svg" },
    { title: "Phụ kiện", price: "200.000", svg: "/item-5.svg" },
  ];
export default function SectionSale() {
  return (
    <div className="box-container">
      <div className="h-[240px] grid grid-cols-7 rounded-lg">
        <div className="col-span-2 p-8 border-secondary rounded-l-lg">
          <h2 className="text-xl font-bold text-[#1C1C1C] mb-2 w-2/3">
            Đồ điện tử và các phụ kiện
          </h2>
          <p>Mua ngay kẻo lỡ</p>
          <div></div>
        </div>
        {listItems.map((item, index) => (
          <div key={index} className="col-span-1 flex flex-col justify-center border-secondary items-center last:rounded-r-lg">
            <div className="w-[140px] h-[140px] flex items-center justify-center mb-2">
              <Image src={item.svg} width={101} height={121} alt="" priority />
            </div>
            <h4 className="text-[#1C1C1C] font-semibold">{item.title}</h4>
            <div className="flex py-1 justify-center w-[60px] bg-[#FFE3E3] rounded-xl">
              <span className="text-[#EB001B] text-[14px]">-25%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
