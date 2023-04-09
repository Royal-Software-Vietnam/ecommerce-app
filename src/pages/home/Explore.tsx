import React from "react";
import ExtraExplore from "./ExtraExplore";

const listItems = [
  { name: "Điện thoại di động", path: "/category" },
  { name: "Trang phục", path: "/category" },
  { name: "Đồ gia dụng", path: "/category" },
  { name: "Đồ điện tử", path: "/category" },
  { name: "Công cụ", path: "/category" },
  { name: "Thể thao", path: "/category" },
  { name: "Mẹ và bé", path: "/category" },
  { name: "Thú cưng", path: "/category" },
  { name: "Xem thêm", path: "/category" },
];

function Explore() {
  return (
    <div className="w-full px-[6.8%]">
      <h1 className="py-6 text-2xl font-bold text-[#1C1C1C]">Khám phá</h1>
      <div className="w-full grid grid-cols-4 gap-6 border border-gray-300 border-solid border-1px h-[400px] p-5 rounded-lg mb-6 bg-[#FFFFFF]">
        <div className="col-span-1 flex flex-col justify-between">
          <ul>
            {listItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="group hover:no-underline"
              >
                <li className="py-1.5 px-4 text-xl text-[#505050] group-hover:bg-[#E5F1FF] group-hover:text-[#1C1C1C] group-hover:font-semibold rounded-lg">
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="relative h-full container col-span-2 flex items-center">
          <img className="w-full" src="/home-1.svg" alt="" />
          <div className="absolute top-10 left-20">
            <h3 className="text-2xl text-[#1C1C1C] mb-2">Hàng mới về</h3>
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Tai Nghe Quang Châu
            </h2>
            <button className="px-4 py-2 bg-[#FFFFFF] text-[#1C1C1C] font-semibold rounded-lg mb-2 hover:brightness-75">
              Tìm hiểu
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="flex flex-col items-center rounded-lg bg-[#E3F0FF] h-2/3 px-4 py-1 mb-2">
            <div className="w-full h-full flex items-center justify-center p-2">
              <div className="w-1/6 pt-2 flex justify-center rounded-full border border-[2px] bg-[#dde7f8] border-solid border-gray-300 mr-4">
                <img className="w-[80%]" src="/avatar.svg" alt="" />
              </div>
              <p className="text-[#1C1C1C]">
                Chào bạn!
                <br />
                Đăng nhập đi
              </p>
            </div>
            <button className="w-[40%] p-1 bg-[#0067FF] text-[#FFFFFF] font-semibold rounded-lg mb-2 hover:brightness-75">
              Đăng nhập
            </button>
            <button className="w-[40%] p-1 bg-[#FFFFFF] text-[#0067FF] font-semibold rounded-lg mb-2 hover:brightness-75">
              Đăng ký
            </button>
          </div>
          <div className="flex items-center p-4 text-[#FFFFFF] rounded-lg bg-[#F38332] h-1/3 mb-2">
            Giảm 20% giá trị với đơn hàng đầu tiên của bạn
          </div>
          <div className="flex items-center p-4 text-[#FFFFFF] rounded-lg bg-[#55BDC3] h-1/3">
            Nhận voucher giảm giá, free ship mỗi ngày
          </div>
        </div>
      </div>
      <div className="w-full flex border border-gray-300 border-solid border-[1px] h-[250px] rounded-lg">
        <div className="relative w-[20%] flex items-center">
          <img className="h-full w-full rounded-l-lg" src="/home-2.svg" alt="" />
          <div className="absolute top-10 left-5">
            <h2 className="text-xl font-bold text-[#1C1C1C] mb-4 w-2/3">
              Hàng điện tử Quảng Châu chất lượng cao
            </h2>
            <button className="px-4 py-2 bg-[#FFFFFF] text-[#1C1C1C] font-semibold rounded-lg mb-2 hover:brightness-75">
              Khám phá
            </button>
          </div>
        </div>
        <ExtraExplore />
      </div>
    </div>
  );
}

export default Explore;
