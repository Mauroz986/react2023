import React from 'react';
import Accion from "../accion/Accion";

function ListaProductos({ productosEnCarrito, agregarProducto, eliminarProducto }) {
  return (
    <ul className="list-group">
      {productosEnCarrito.map((producto) => (
        <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-start">
          <img src={producto.image} alt={producto.title} className="carrito--thumbnail" />
          <div className="ms-2 me-auto">
            <div className="fw-bold">{producto.title}</div>
            <div className="carrito--precio">{producto.precioD}</div>
          </div>
          <div className="row w-20 pt-2 justify-content-center">
            <span className="badge bg-secondary rounded-pill">{producto.cantidad}</span>
            <div className="d-flex justify-content-between mt-3">
              <Accion tipo="boton" icono="+" onClick={() => agregarProducto(producto)} />
              <Accion tipo="boton" icono="-" onClick={() => eliminarProducto(producto.id)} />
              <Accion tipo="boton" icono="borrar" onClick={() => eliminarProducto(producto.id)} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaProductos;