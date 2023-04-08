import Image from "next/image";
import { Inter } from "next/font/google";

const listCategory = [
  { name: "Điện thoại di động", path: "/" },
  { name: "Trang phục", path: "/" },
  { name: "Đồ gia dụng", path: "/" },
  { name: "Đồ điện tử", path: "/" },
  { name: "Công cụ", path: "/" },
  { name: "Thể thao", path: "/" },
  { name: "Mẹ và bé", path: "/" },
  { name: "Thú cưng", path: "/" },
  { name: "Xem thêm", path: "/" },
];

const listItems = [
  { title: "Đồng hồ điện tử", price: "300.000", svg: "/item-1.svg" },
  { title: "Máy ảnh", price: "1.000.000", svg: "/item-2.svg" },
  { title: "Tai nghe", price: "500.000", svg: "/item-3.svg" },
  { title: "Đồ gia dụng", price: "100.000", svg: "/item-4.svg" },
  { title: "Phụ kiện", price: "200.000", svg: "/item-5.svg" },
  { title: "Laptops & PC", price: "4.000.000", svg: "/item-6.svg" },
  { title: "Máy tính bảng", price: "2.000.000", svg: "/item-7.svg" },
  { title: "Điện thoại", price: "2.000.000", svg: "/item-8.svg" },
]

const listSuggestions = [
  { description: "Áo cộc tay thương hiệu Coolmate", price: "300.000", svg: "/suggestion-1.svg" },
  { description: "Áo ấm dành cho mùa đông lạnh giá", price: "1.000.000", svg: "/suggestion-2.svg" },
  { description: "Suit nam cao cấp đến từ thương hiệu Việt", price: "500.000", svg: "/suggestion-3.svg" },
  { description: "Ví da bò nhưng được làm từ nhựa tổng hợp", price: "100.000", svg: "/suggestion-1.svg" },
  { description: "Balo cho học sinh hoặc du lịch", price: "200.000", svg: "/suggestion-1.svg" },
  { description: "Quần đùi nam mùa hè mặc vào hơi nóng", price: "4.000.000", svg: "/suggestion-1.svg" },
  { description: "Tai nghe Trung Quốc chất lượng cao", price: "2.000.000", svg: "/suggestion-1.svg" },
  { description: "Cũng là balo vì không có hình thay thế", price: "2.000.000", svg: "/suggestion-1.svg" },
  { description: "Chum đi đái dành cho trẻ em", price: "2.000.000", svg: "/suggestion-1.svg" },
  { description: "Thùng rác thông minh Trung Quốc", price: "2.000.000", svg: "/suggestion-1.svg" },
]

const listService = [
  { description: "Hàng lấy trực tiếp từ nhà phân phối", icon: "/service-icon-1.svg", svg: "/service-1.svg"},
  { description: "Chăm sóc khách hàng tận tình", icon: "/service-icon-2.svg", svg: "/service-2.svg"},
  { description: "Nhanh chóng, mọi lúc, mọi nơinơi", icon: "/service-icon-3.svg", svg: "/service-3.svg"},
  { description: "An toàn và bảo mật trong vận chuyển", icon: "/service-icon-4.svg", svg: "/service-4.svg"}
]

export default function Home() {
  return (
    <main className="overflow-x-auto bg-[#e0e0e0]">
      <div className="w-full px-[6.8%]">
        <h1 className="py-6 text-2xl font-bold text-[#1C1C1C]">Khám phá</h1>
        <div className="w-full flex border border-gray-300 border-solid border-1px h-[400px] p-5 rounded-lg mb-6 bg-[#FFFFFF]">
          <div className="w-1/6 flex flex-col justify-between mr-4">
            <ul>
              {listCategory.map((item, index) => (
                <a key={index} href={item.path} className="group hover:no-underline">
                  <li className="py-1.5 px-4 text-xl text-[#505050] group-hover:bg-[#E5F1FF] group-hover:text-[#1C1C1C] group-hover:font-semibold rounded-lg">
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <div className="relative h-full container w-4/6 flex items-center mr-4">
            <img className="w-full h-full" src="/home-1.svg" alt="" />
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
          <div className="flex flex-col w-1/6">
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
        <div className="w-full flex border border-gray-300 border-solid border-[1px] h-[250px] rounded-lg">
          <div className="relative w-[20%] flex items-center">
            <img className="h-full w-full" src="/home-2.svg" alt="" />
            <div className="absolute top-10 left-5">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-4 w-2/3">
                Hàng điện tử Quảng Châu chất lượng cao
              </h2>
              <button className="px-4 py-2 bg-[#FFFFFF] text-[#1C1C1C] font-semibold rounded-lg mb-2 hover:brightness-75">
                Khám phá
              </button>
            </div>
          </div>
          <div className="container h-full flex flex-wrap bg-[#FFFFFF]">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between px-14 border border-solid border-[1px] border-[#E0E0E0] justify-center w-1/4 group hover:cursor-pointer">
                <div className="flex flex-col">
                  <h4 className="text-[#1C1C1C] font-semibold">{item.title}</h4>
                  <p className="text-[#8B96A5]">Giá từ</p>
                  <span className="text-[#8B96A5]">{item.price}</span>
                </div>
                <div>
                  <img className="group-hover:contrast-125 hover:-translate-y-4" src={item.svg} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-[6.8%]">
        <h1 className="py-6 text-2xl font-bold text-[#1C1C1C]">Mua đi mà</h1>
        <div className="w-full flex flex-wrap h-[640px]">
          {listSuggestions.map((item, index) => (
            <div key={index} className="w-1/5 h-[310px] hover:cursor-pointer hover:brightness-90">
              <div  className="h-full p-2 m-2 rounded-lg bg-[#FFFFFF] border border-gray-300 border-solid border-[1px]">
                <div className="flex p-4 items-center h-[200px] mb-2">
                  <img className="w-full h-full" src={item.svg} alt="" />
                </div>
                <div className="flex flex-col px-6">
                  <h4 className="text-[#1C1C1C] font-semibold">{item.price}</h4>
                    <p className="text-[#8B96A5]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-[6.8%]">
        <h1 className="py-6 text-2xl font-bold text-[#1C1C1C]">Dịch vụ tiện ích khác</h1>
        <div className="w-full flex flex-wrap h-[240px] mb-[125px]">
          {listService.map((item, index) => (
            <div key={index} className="relative w-1/4 h-[200px] hover:cursor-pointer hover:brightness-90">
              <div className="m-2 rounded-lg bg-[#FFFFFF] border border-gray-300 border-solid border-[1px]">
                <div className="h-[160px]">
                  <img className="w-full bg-[#3f3f3f]" src={item.svg} alt="" />
                </div>
                <div className="p-6 w-2/3">
                  <h3 className="text-[#1C1C1C] font-semibold text-xl">{item.description}</h3>
                </div>
              </div>
              <div className="flex items-center justify-center absolute top-[72%] right-10 bg-[#D1E7FF] w-1/6 h-1/3 flex p-5 rounded-full border border-[2px] border-solid border-[#FFFFFF] hover:-translate-y-4">
                <img src={item.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
