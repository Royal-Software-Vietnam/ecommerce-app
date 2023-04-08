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
        <div className="flex flex-col w-full h-[100vh] flex overflow-y-auto">
            {listItems.map((item, index) => (
                <div key={index} className="w-full h-[230px] flex border border-gray-300 border-solid border-1px rounded-lg mb-4 p-4">
                    <div>
                        <img src={item.svg} alt="" />
                    </div>
                    <div>
                        <p>{item.name}</p>
                        <h3>{item.price}</h3>
                        <p>{item.description}</p>
                        <button>View details</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Content