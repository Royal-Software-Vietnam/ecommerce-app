import React from "react";

const listItems = [
  { name: "Điện thoại di động", path: "/category" },
  { name: "Trang phục", path: "/" },
  { name: "Đồ gia dụng", path: "/" },
  { name: "Đồ điện tử", path: "/" },
  { name: "Công cụ", path: "/" },
  { name: "Thể thao", path: "/" },
  { name: "Mẹ và bé", path: "/" },
  { name: "Thú cưng", path: "/" },
  { name: "Xem thêm", path: "/" },
];

function LeftSide() {
  return (
    <div className="w-1/4 h-[100vh] flex flex-col mr-4">
      <h2 className="text-xl text-[#1C1C1C] font-bold my-6">Category</h2>
      <ul>
        {listItems.map((item, index) => (
          <a key={index} href={item.path}>
            <li className="py-2 text-xl text-[#505050]">
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default LeftSide;
