import "./footer.css";
import logo from "../../imagenes/logo.png";
import Accion from "../accion/Accion";

function Footer() {
    return (
        <footer className="d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-evenly py-1 my-1 border-top">
            <div className="footer--logo--section text-center col-sm-12 col-md-2">
                <a href="/" className="mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <img className="footer--logo" src={logo} alt="Fashion Premium Logo" />
                </a>
            </div>
            <p className="text-center col-md-4  mb-md-0 text-body-primary">© 2023 Fashion Premium</p>


            <ul className="nav col-md-3 justify-content-end list-unstyled d-flex">
                <li className="mx-1">
                    <Accion circulo={true} icono="facebook" />
                </li>
                <li className="mx-1">
                    <Accion circulo={true} icono="twitter" />
                </li>
                <li className="mx-1">
                    <Accion circulo={true} icono="whatsapp" />
                </li>
                <li className="mx-1">
                    <Accion circulo={true} icono="telegram" />
                </li>


            </ul>
        </footer>
    )
}

export default Footer;