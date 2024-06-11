import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CiSearch, CiShoppingCart, CiHeart } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";


export function Favorites() {
  const [favorito, setFavorito] = useState(() => {
    const favoritoLs = localStorage.getItem("productos-en-favorito");
    return favoritoLs ? JSON.parse(favoritoLs) : [];
  });

  useEffect(() => {
    const favoritoLs = localStorage.getItem("productos-en-favorito");
    if (favoritoLs) {
      setFavorito(JSON.parse(favoritoLs));
    }
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("productos-en-favorito", JSON.stringify(favorito));
  }, [favorito]);

  const eliminarDeFavorito = (idBoton) => {
    const nuevosProductos = favorito.filter(
      (producto) => producto.id !== parseInt(idBoton, 10)
    );
    setFavorito(nuevosProductos);
  };

  return (
    <div>
      <div className="w-11/12 m-auto py-10">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-sm text-gray-400">
          There are {favorito.length} Items in your cart
        </p>

        {favorito.length > 0 ? (
          <div className="products grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-9 p-4 z-20">
            {favorito.map((product, idx) => {
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
                        <AiFillDelete
                          size={"2rem"}
                          onClick={() => eliminarDeFavorito(product.id)}
                          className="cursor-pointer hover:text-red-500 transition ease-in-out active:scale-125 active:text-red-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="w-full h-[89vh] flex justify-center items-center">
            <div className="space-y-5 flex flex-col justify-center items-center">
              <h1 className="text-xl font-semibold">
                You don't have any ordered products
              </h1>
              <NavLink to="/">
                <button className="bg-gray-800 text-white px-5 py-2 rounded-m drop-shadow-xl flex items-center space-x-2">
                  <span>Back to te Shop</span>
                  <BsArrowLeft />
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
