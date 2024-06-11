import React, { useEffect, useState } from "react";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
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
      id: 1,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: keyboard,
      id: 2,
      title: "Black keyboard",
      description: "lorem ipsum dolar",
      price: 70,
    },
    {
      img: watch,
      id: 3,
      title: "Apple Watch",
      description: "lorem ipsum dolar",
      price: 990,
    },
    {
      img: mouse,
      id: 4,
      title: "Black Mouse",
      description: "lorem ipsum dolar",
      price: 30,
    },
    {
      img: laptop,
      id: 5,
      title: "Accer Laptop",
      description: "lorem ipsum dolar",
      price: 999,
    },
    {
      img: leatherWatch,
      id: 6,
      title: "Leather Watch",
      description: "lorem ipsum dolar",
      price: 880,
    },
    {
      img: monitor,
      id: 7,
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

  const [carrito, setCarrito] = useState(() => {
    const carritoLs = localStorage.getItem("productos-en-carrito");
    return carritoLs ? JSON.parse(carritoLs) : [];
  });

  const [favorito, setFavorito] = useState(() => {
    const favoritoLs = localStorage.getItem("productos-en-favorito");
    return favoritoLs ? JSON.parse(favoritoLs) : [];
  });

  useEffect(() => {
    const carritoLs = localStorage.getItem("productos-en-carrito");
    if (carritoLs) {
      setCarrito(JSON.parse(carritoLs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(()=>{
    const favoritoLs = localStorage.getItem('productos-en-favorito');
    if(favoritoLs){
      setCarrito(JSON.parse(favoritoLs))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('productos-en-favorito', JSON.stringify(favorito))
  },[favorito])

  const agregarAlCarrito = (idBoton) => {
    const productoAgregado = Products.find(
      (producto) => producto.id === idBoton
    );

    if (carrito.some((producto) => producto.id === idBoton)) {
      const nuevosProductos = carrito.map((producto) => {
        if (producto.id === idBoton) {
          return { ...producto, cantidad: producto.cantidad + 1 };
        }
        return producto;
      });
      setCarrito(nuevosProductos);
    } else {
      const nuevosProductos = [
        ...carrito,
        { ...productoAgregado, cantidad: 1 },
      ];
      setCarrito(nuevosProductos);
    }
  };

  const agregarAFavorito = (idBoton) => {
    const productoAgregado = Products.find(
      (producto) => producto.id === idBoton
    );

    if (favorito.some((producto) => producto.id === idBoton)) {
      const nuevosProductos = favorito.map((producto) => {
        if (producto.id === idBoton) {
          return { ...producto, cantidad: producto.cantidad + 1 };
        }
        return producto;
      });
      setFavorito(nuevosProductos);
    } else {
      const nuevosProductos = [
        ...favorito,
        { ...productoAgregado, cantidad: 1 },
      ];
      setFavorito(nuevosProductos);
    }
  };

  const [color,setColor]=useState(false)

  const cambiarColor = ()=>{
    setColor(!color)
  }

  return (
    <div className="w-full relative">
      <div className="sticky top-0 z-10">
        <div className="header flex flex-col sm:flex-row justify-between items-center p-4 bg-white">
          <h1 className="text-3xl mb-5 sm:m-0 font-bold">8kra Shop</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded focus-within:shadow">
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
        <div className="products grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-9 p-4 z-20">
          {filteredProducts.map((product, idx) => {
            return (
              <div
                key={idx}
                className="product w-full  h-[350px] lg:h-[400px] bg-white drop-shadow-2xl p-2 border  "
              >
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

                    <div className="flex gap-5">
                      <CiShoppingCart
                        size={"2rem"}
                        onClick={() => agregarAlCarrito(product.id)}
                        className="cursor-pointer hover:text-green-500 transition ease-in-out active:scale-125 active:text-green-900"
                      />
                      <CiHeart size={"2rem"}
                        onClick={() => {
                          cambiarColor(product.id)
                          agregarAFavorito(product.id)
                        }}

                        className={`cursor-pointer hover:text-red-500 transition ease-in-out active:scale-125 `}
                        />
                    </div>
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
