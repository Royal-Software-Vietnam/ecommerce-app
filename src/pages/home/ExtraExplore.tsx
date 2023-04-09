import React from "react";

const listItems = [
  { title: "Đồng hồ điện tử", price: "300.000", svg: "/item-1.svg" },
  { title: "Máy ảnh", price: "1.000.000", svg: "/item-2.svg" },
  { title: "Tai nghe", price: "500.000", svg: "/item-3.svg" },
  { title: "Đồ gia dụng", price: "100.000", svg: "/item-4.svg" },
  { title: "Phụ kiện", price: "200.000", svg: "/item-5.svg" },
  { title: "Laptops & PC", price: "4.000.000", svg: "/item-6.svg" },
  { title: "Máy tính bảng", price: "2.000.000", svg: "/item-7.svg" },
  { title: "Điện thoại", price: "2.000.000", svg: "/item-8.svg" },
];

function ExtraExplore() {
  return (
    <div className="container h-full grid grid-cols-4 bg-[#FFFFFF]">
      {listItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-14 border border-solid border-[1px] border-[#E0E0E0] justify-center col-span-1 group hover:cursor-pointer hover:border-[#0D6EFD]"
        >
          <div className="flex flex-col">
            <h4 className="text-[#1C1C1C] font-semibold">{item.title}</h4>
            <p className="text-[#8B96A5]">Giá từ</p>
            <span className="text-[#8B96A5]">{item.price}</span>
          </div>
          <div>
            <img
              className="group-hover:contrast-125 hover:-translate-y-4"
              src={item.svg}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExtraExplore;
