import React, { useState } from 'react';
import ListaProductos from "./ListaProductos";
import "./carrito.css";

function Carrito() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const agregarProductoAlCarrito = (producto) => {
    setProductosEnCarrito([...productosEnCarrito, producto]);
  };

  const eliminarProductoDelCarrito = (productoId) => {
    const nuevosProductos = productosEnCarrito.filter(producto => producto.id !== productoId);
    setProductosEnCarrito(nuevosProductos);
  };

  return (
    <div>
      {/* Botón o elemento que abrirá el carrito */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
      >
        Abrir Carrito
      </button>

      {/* Offcanvas (carrito) */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" data-bs-scroll="true">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasLabel">Mi carrito</h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ListaProductos
            productosEnCarrito={productosEnCarrito}
            agregarProducto={agregarProductoAlCarrito}
            eliminarProducto={eliminarProductoDelCarrito}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrito;