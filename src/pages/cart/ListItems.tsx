import React from "react";

function ListItems({ data }: { data: any }) {
//   console.log(data);
  return (
    <div className="col-span-3 h-[60vh] px-8 py-4 border border-gray-300 border-solid border-[1px] rounded-lg overflow-y-auto scroll bg-[#FFFFFF]">
      {data &&
        data.map((item: any, index: number) => (
          <div
            key={index}
            className="mb-6 border-b-gray-300 border-b-solid border-b-[1px]"
          >
            <div className="grid grid-cols-12 h-[80px]">
              <div className="col-span-2 p-1 flex items-start justify-center">
                <div className="p-4 w-[80px] h-[80px] flex border border-gray-300 border-solid border-1px rounded-lg">
                  <img className="w-full" src={item.svg} alt="" />
                </div>
              </div>
              <div className="col-span-10 flex justify-between pr-8">
                <div>
                  <p className="text-[#1C1C1C] text-lg font-semibold">
                    {item.name}
                  </p>
                  <span className="italic opacity-75">{item.description}</span>
                </div>
                <div>
                  <p>{item.price}</p>
                  <p>Số lượng: {item.quantiy}</p>
                </div>
              </div>
            </div>
            <div className="ml-[16.5%] mb-6">
              <button className="border-[##DEE2E7] border-[1px] border-solid text-[#FA3434] py-2 px-4 rounded-lg mr-4 hover:bg-[#FA3434] hover:text-[#FFFFFF]">
                Xóa
              </button>
              <button className="border-[##DEE2E7] border-[1px] border-solid text-[#0D6EFD] py-2 px-4 rounded-lg hover:bg-[#0D6EFD] hover:text-[#FFFFFF]">
                Xem thông tin
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ListItems;
