import Image from "next/image";
import { Inter } from "next/font/google";

const listCategory = [
  { name: "Điện thoại di động", path: "/smartphones" },
  { name: "Trang phục", path: "/smartphones" },
  { name: "Đồ gia dụng", path: "/smartphones" },
  { name: "Đồ điện tử", path: "/smartphones" },
  { name: "Công cụ", path: "/smartphones" },
  { name: "Thể thao", path: "/smartphones" },
  { name: "Mẹ và bé", path: "/smartphones" },
  { name: "Thú cưng", path: "/smartphones" },
  { name: "Xem thêm", path: "/smartphones" },
];

export default function Home() {
  return (
    <main className="overflow-x-auto">
      <div className="w-full px-[6.8%]">
        <h1 className="py-6 text-2xl font-bold text-[#1C1C1C]">Khám phá</h1>
        <div className="w-full flex border border-gray-300 border-solid border-1px h-[400px] p-5 rounded-lg mb-6">
          <div className="w-[20%] flex flex-col justify-between">
            <ul>
              {listCategory.map((item, index) => (
                <a key={index} href={item.path}>
                  <li className="py-1.5 px-2 text-xl text-[#505050] hover:bg-[#E5F1FF] hover:text-[#1C1C1C] hover:font-semibold rounded-lg">
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="relative w-[60%] flex items-center">
            <img src="/home-1.svg" alt="" />
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
          <div className="flex flex-col w-[20%]">
            <div className="flex flex-col items-center rounded-lg bg-[#E3F0FF] h-2/3 px-4 py-1 mb-2">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-1/5 h-[80%] flex justify-center rounded-full border border-[1.5px] bg-[#dde7f8] border-solid border-gray-300 mr-4">
                  <img className="w-[70%]" src="/avatar.svg" alt="" />
                </div>
                <p className="text-[#1C1C1C]">
                  Chào bạn!
                  <br />
                  Đăng nhập đi
                </p>
              </div>
              <button className="w-[80%] p-1 bg-[#0067FF] text-[#FFFFFF] font-semibold rounded-lg mb-2 hover:brightness-75">
                Đăng nhập
              </button>
              <button className="w-[80%] p-1 bg-[#FFFFFF] text-[#0067FF] font-semibold rounded-lg mb-2 hover:brightness-75">
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
        <div className="w-full flex border border-gray-300 border-solid border-[1px] h-[260px] rounded-lg">
          <div className="relative w-[18%] flex items-center">
            <img src="/home-2.svg" alt="" />
            <div className="absolute top-10 left-5">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-4 w-1/3">
                Hàng điện tử Quảng Châu chất lượng cao
              </h2>
              <button className="px-4 py-2 bg-[#FFFFFF] text-[#1C1C1C] font-semibold rounded-lg mb-2 hover:brightness-75">
                Khám phá
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 auto-rows-max">
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
              <div className="flex items-center justify-center bg-[#dddddd] w-[330px] h-[125px]">1</div>
          </div>
        </div>
      </div>
    </main>
  );
}
