import React from 'react'

const listItems = [
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

function Suggestion() {
  return (
    <div className="w-full px-[6.8%]">
        <h1 className="py-6 text-2xl font-bold text-[#1C1C1C]">Mua đi mà</h1>
        <div className="w-full flex flex-wrap h-[640px]">
          {listItems.map((item, index) => (
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
  )
}

export default Suggestion