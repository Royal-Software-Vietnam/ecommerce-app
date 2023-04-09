import React from 'react'

const listItems = [
    {name: "IPhone 13", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Oppo Zen Flick", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Samsung Note 12", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Macbook Pro 16 inch", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"},
    {name: "Apple Watch Gen 4", price: "2.000.000", description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", svg: "/category-item-1.svg"}
]

function Content() {
  return (
    <div className="w-full">
        <div className="w-full flex border border-gray-300 border-solid border-1px my-6 p-6 rounded-lg">
            <p className="text-[#1C1C1C]">Số lượng sản phẩm: </p>
        </div>
        <div className="flex flex-col w-full h-[80vh] flex overflow-y-auto scroll">
            {listItems.map((item, index) => (
                <div key={index} className="relative w-full h-[230px] flex border border-gray-300 border-solid border-1px rounded-lg mb-4 p-4">
                    <div>
                        <img src={item.svg} alt="" />
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <div>
                            <p className="text-[#1C1C1C] font-semibold">{item.name}</p>
                            <h3 className="text-[#1C1C1C] font-normal italic text-xl">{item.price}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <button className="w-[12%] text-[#0D6EFD] font-semibold hover:bg-[#0D6EFD] hover:text-[#FFFFFF] px-2 py-1 border-solid border-[#0D6EFD] border-[2px] rounded-lg">View details</button>
                        </div>
                    </div>
                    <button className="absolute top-10 right-10">
                        <img src="/like.svg" alt="" />
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Content