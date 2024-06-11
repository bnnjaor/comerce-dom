import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLs = localStorage.getItem("productos-en-carrito");
    if (carritoLs) {
      setCarrito(JSON.parse(carritoLs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (idBoton) => {
  const productoAgregado = Products.find(producto => producto.id === idBoton);

  if (carrito.some(producto => producto.id === idBoton)) {
      const nuevosProductos = carrito.map(producto => {
          if (producto.id === idBoton) {
              return { ...producto, cantidad: producto.cantidad + 1 };
          }
          return producto;
      });
      setCarrito(nuevosProductos);
  } else {
      // Crear una copia de productosEnCarrito y agregar el nuevo producto
      const nuevosProductos = [...carrito, { ...productoAgregado, cantidad: 1 }];
      setCarrito(nuevosProductos);
  }
};

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(producto => producto.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
