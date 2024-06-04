import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";
import keyboard from "../assets/keyboard.jpg";
import sunGlass from "../assets/glasses.jpeg";
import leatherWatch from "../assets/leatherWatch.jpg";
import mouse from "../assets/mouse.jpg";
import monitor from "../assets/monitor.jpg";

export default function Main() {
  let Products = [
    {
      img: sunGlass,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: keyboard,
      title: "Black keyboard",
      description: "lorem ipsum dolar",
      price: 70,
    },
    {
      img: watch,
      title: "Apple Watch",
      description: "lorem ipsum dolar",
      price: 990,
    },
    {
      img: mouse,
      title: "Black Mouse",
      description: "lorem ipsum dolar",
      price: 30,
    },
    {
      img: laptop,
      title: "Accer Laptop",
      description: "lorem ipsum dolar",
      price: 999,
    },
    {
      img: leatherWatch,
      title: "Leather Watch",
      description: "lorem ipsum dolar",
      price: 880,
    },
    {
      img: monitor,
      title: "One plus Monitor",
      description: "lorem ipsum dolar",
      price: 300,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(Products);

  const searchHandler = (e) => {
    const filteredArray = Products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filteredArray);
  };

  return (
    <div className="w-full relative">
      <div className="sticky top-0 z-10">
        <div className="header flex justify-between items-center p-4 bg-white">
          <h1 className="text-3xl font-bold">8kra Shop</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent outline-none"
              onChange={searchHandler}
            />
            <button onClick={searchHandler}>
              <CiSearch />
            </button>
          </div>
        </div>
        <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10">
          <div className="bg-black text-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Watches</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Laptops</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Monitors</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Mouses</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Glasses</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Keyboards</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Watches</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Laptops</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Monitors</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Mouses</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Glasses</p>
          </div>
          <div className="bg-white px-5 py-2 rounded drop-shadow-xl cursor-pointer">
            <p>Keyboards</p>
          </div>
          
        </div>
        <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
          {filteredProducts.map((product, idx) => {
            return (
              <div key={idx} className="product h-[350px] bg-white drop-shadow-2xl p-2 border ">
                <img
                  src={product.img}
                  alt={product.title}
                  className=" w-full h-[60%] object-cover "
                />
                <div className="m-2 bg-gray-100 p-2">
                  <h1 className="text-xl font-semibold">{product.title}</h1>
                  <p className=" text-sm ">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">${product.price}.00</p>
                    
                    <CiShoppingCart size={"1.5rem"} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
