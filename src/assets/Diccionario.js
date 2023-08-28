// Diccionario utilizado para el componente Accion
export const tipoAccion = {
    BOTON: "boton",
    LINK: "link"
}
// Se freeza el objeto para que se vuelva inmutable
Object.freeze(tipoAccion);

//Listado de EndPoints
export const ConexionesApi = {
    contenido: "http://localhost:3000/contenido",
    rutas: "http://localhost:3000/rutas",
    productos: "http://localhost:3000/productos",
    carrito: "http://localhost:3000/carrito",
}

Object.freeze(ConexionesApi);