import { AiFillDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import image from "../assets/glasses.jpeg";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CartItems() {
  const [carrito, setCarrito] = useState(() => {
    const carritoLs = localStorage.getItem("productos-en-carrito");
    return carritoLs ? JSON.parse(carritoLs) : [];
  });

  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    const subtotoal = carrito.reduce(
      (acc, producto) => acc + producto.price * producto.cantidad,
      0
    );

    setSubTotal(subtotoal);
  }, [carrito]);

  useEffect(() => {
    const carritoLs = localStorage.getItem("productos-en-carrito");
    if (carritoLs) {
      setCarrito(JSON.parse(carritoLs));
    }
  }, []);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Function to remove a product from the cart
  const eliminarDelCarrito = (idBoton) => {
    const nuevosProductos = carrito.filter(
      (producto) => producto.id !== parseInt(idBoton, 10)
    );
    setCarrito(nuevosProductos);
  };

  return (
    <div>
      <div className="w-11/12 m-auto py-10">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-sm text-gray-400">
          There are {carrito.length} Items in your cart
        </p>
        {carrito.length > 0 ? (
          <section className="flex flex-col md:flex-row justify-between items-center md:space-x-10 ">
            <div className=" w-[60%] md:flex md:flex-col space-y-3 items-center">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <td className="text-gray-400 py-2">Product</td>
                    <td className="text-gray-400 py-2">Price</td>
                    <td className="text-gray-400 py-2">Quantity</td>
                    <td className="text-gray-400 py-2">Total</td>
                    <td className="text-gray-400 py-2">Delete</td>
                  </tr>
                </thead>
                {carrito.map((producto) => (
                  <tbody key={producto.id} className="space-y-10 ">
                    <tr className="border-dashed border-b">
                      <td className=" py-5">
                        <div className="flex  items-center spcae-x-3 py-2 ">
                          <img src={producto.img} width={200} alt="" />
                          <div>
                            <h1 className="text-xl font-bold">
                              {producto.title}
                            </h1>
                            <p className="">Lore, ipsum</p>
                          </div>
                        </div>
                      </td>
                      <td>${producto.price}</td>
                      <td>
                        <div className=" border w-25 p-2">
                          {producto.cantidad}
                        </div>
                      </td>
                      <td>${producto.price * producto.cantidad}</td>
                      <td>
                        <button>
                          <AiFillDelete
                            onClick={() => eliminarDelCarrito(producto.id)}
                            size={"1.5rem"}
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <div className="my-5">
                <NavLink to="/">
                  <button className="flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2">
                    <BsArrowLeft />
                    <span>Continue Shopping</span>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className=" w-[80%] md:w-[40%] h-fit border rounded p-5 space-y-5 mt-10 md:m-0">
              <div className=" flex justify-between items-center border-b border-dashed p-2">
                <h1 className="text-xl">Sub Totoal</h1>
                <p>${subTotal}.00</p>
              </div>
              <div className=" flex justify-between items-center border-b border-dashed p-2">
                <h1 className="text-xl">Discount</h1>
                <p>$0.00</p>
              </div>
              <div className=" flex justify-between items-center border-b border-dashed p-2">
                <h1 className="text-xl">Shipping</h1>
                <p>$20.00</p>
              </div>
              <div className=" flex justify-between items-center  p-2">
                <h1 className="text-xl">Discount</h1>
                <p>$0.00</p>
              </div>
              <button className="w-full p-2 bg-gray-800 text-center text-white rounded">
                CheckOut
              </button>
            </div>
          </section>
        ) : (
          <div className="w-full h-[89vh] flex justify-center items-center ">
            <div className="space-y-5 flex flex-col justify-center items-center">
              <h1 className="text-xl font-semibold">
                You don't have any product
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
