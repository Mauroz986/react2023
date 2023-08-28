import "./accion.css";
import { tipoAccion } from "../../Diccionario";

// Props recibidas por el componente Accion
// tipo: boton / link, Si no se indica el tipo se renderiza por defecto un link
// circulo: Boolean, Si no se indica por defecto renderiza un link normal o un botón rectangular
// icono: String, debe ser uno de los iconos existentes en el objeto iconos
// texto: String
// url: String, indica la url para los links, los botones solo se utilizan para realizar acciones.
//cantProducto: String, Solo disponible para el icono del carrito


//Tipos de iconos
const iconos = {
    "buscar": <i className="bi bi-search"></i>,
    "login": <i className="bi bi-person"></i>,
    "carrito": <i className="bi bi-cart"></i>,
    "facebook": <i className="bi bi-facebook"></i>,
    "twitter": <i className="bi bi-twitter"></i>,
    "whatsapp": <i className="bi bi-whatsapp"></i>,
    "telegram": <i className="bi bi-telegram"></i>,
    "-": <i className="bi bi-dash-circle-fill"></i>,
    "+": <i className="bi bi-plus-circle-fill"></i>,
    "borrar": <i className="bi bi-trash3-fill"></i>
}


function Accion({ tipo = "link", circulo = false, icono = null, texto = null, url = null, cantProductos = null }) {
    let render = null;
    if (tipo === tipoAccion.LINK) {
        switch (circulo) {
            case true: {
                render = <a href={url} className="link-icono">{iconos[icono]}</a>;
                break;

            }
            default: {
                render = <a href={url} className="nav-link link-opacity-50-hover me-1">{texto}</a>
            }
        }
    } else if (tipo === tipoAccion.BOTON) {
        switch (circulo) {
            case true: {

                if (icono === "carrito") {

                    render =
                        <button
                            type="button"
                            className="btn boton-redondo position-relative"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                            aria-controls="offcanvas">
                            {iconos[icono]}
                            <span className="position-absolute top-10 start-85 translate-middle badge rounded-pill bg-secondary">{cantProductos}</span>
                        </button>
                } else {
                    render = <button type="button" className="btn boton-redondo me-1">{iconos[icono]}</button>;
                }
                break;
            }
            default: {
                if (!texto) {
                    render = <button type="button" className="solo-icono">{iconos[icono]}</button>;
                } else {
                    render = <button type="button" className="btn btn-primary btn-sm">{texto}</button>;
                }
            }
        }
    }
    return render;
}
export default Accion;