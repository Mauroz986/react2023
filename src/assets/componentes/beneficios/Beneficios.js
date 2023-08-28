import "./beneficios.css";
import Beneficio from "../beneficio/Beneficio";


const iconos = {
    devolucion: <i className="bi bi-arrow-counterclockwise"></i>,
    calidad: <i className="bi bi-person-fill-exclamation"></i>,
    envio: <i className="bi bi-calendar2-date"></i>,
    atc: <i className="bi bi-chat-left-heart"></i>,
    pagos: <i className="bi bi-credit-card-2-front"></i>
}
function Beneficios() {
    return (
        <section className="py-5 mt-4 text-center">
            <h2 className="titulo">Porque elegir <span className="color-primario">nuestra tienda premium</span></h2>
            <div className="pt-4 row justify-content-evenly">
                <Beneficio icono={iconos.devolucion} titulo="Devolución grátis" texto="Si el producto llegó dañado, con faltantes o simplemente no te gustó. No te cobramos el costo de devolución" />
                <Beneficio icono={iconos.calidad} titulo="Control de calidad" texto="Todos nuestros productos son sometidos a estrictos controles de calidad por parte de nuestros especialistas." />
                <Beneficio icono={iconos.envio} titulo="Regalos" texto="Podes realizar tu compra hasta 1 mes antes del envío, permitiendote hacer regalos a tu ser querido y ganarle a la inflación."/>
                <Beneficio icono={iconos.atc} titulo="Atención al cliente" texto="Nuestro equipo de profesionales está a tu disposición las 24hs para resolver todas tus dudas."/>
                <Beneficio icono={iconos.pagos} titulo="Medios de pago" texto="Aceptamos todos los medios de pago, desde efecivo hasta criptomonedas."/>
            </div>
        </section>
    )
}

export default Beneficios;