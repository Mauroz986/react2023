import Boton from "../boton/Boton";
import "./partner.css";


function Partner(content) {
    return (
        <section className="partner text-center my-4">
            <div className="tonalidad d-flex flex-column justify-content-evenly align-items-center">
                <h2>{content.titulo}</h2>
                <img className="pt-5" src={content.img} alt="Caritas logo" />
                <p className="pt-2">{content.texto}</p>
                <Boton texto="Conocé más sobre Caritas" />
            </div>
        </section>
    )
}

export default Partner;