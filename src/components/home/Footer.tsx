import React from "react";

function Footer() {
  return (
    <div>
      <div className="h-[256px] flex w-full flex px-[6.8%]">
        <div className="w-1/3 mt-24 mr-12">
          <p className="text-xl mb-4">Lorem ipsum is placeholder text commonly used in the graphic, print, Lorem ipsum is placeholder text commonly used in the graphic, print</p>
          <div className="flex">
            <img className="w-[30px] h-[30px] mr-4" src="/facebook.svg" alt="" />
            <img className="w-[30px] h-[30px] mr-4" src="/twitter.svg" alt="" />
            <img className="w-[30px] h-[30px] mr-4" src="/linkedln.svg" alt="" />
            <img className="w-[30px] h-[30px] mr-4" src="/instagram.svg" alt="" />
            <img className="w-[30px] h-[30px] mr-4" src="/youtube.svg" alt="" />
          </div>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-semibold text-xl text-[#1C1C1C] mb-2">Giới thiệu</h5>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-semibold text-xl text-[#1C1C1C] mb-2">Đối tác</h5>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-semibold text-xl text-[#1C1C1C] mb-2">Thông tin</h5>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
        </div>
        <div className="w-1/6 flex flex-col mt-10">
          <h5 className="font-semibold text-xl text-[#1C1C1C] mb-2">Người dùng</h5>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
          <a href="/">Lorem ipsum</a>
        </div>
      </div>
      <div className="w-full h-[68px] px-[6.8%] flex items-center px-10 py-3 bg-gray-200 border-gray-300">
        <p>&copy; 2023 Royal Software.</p>
      </div>
    </div>
  );
}

export default Footer;
