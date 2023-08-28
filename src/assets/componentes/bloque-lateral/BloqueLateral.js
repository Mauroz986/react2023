import "./bloque-lateral.css";
import CheckInformacion from "../check-informacion/CheckInformacion";
import Boton from "../boton/Boton";

/* El componente bloque laterla, muestra texto al lado de una imagen:

  Por defecto el texto se encuentra del lado izquierdo de la imagen, en caso de cambiar el orden y que la imagen se encuentre del lado izquierdo del texto, pasarle la prop direccion = "izquierda"

  Por defecto el contenido se muestra como un párrafo (checks = null) si recibe en la prop checks cada posición del array será mostrado con un tilde

  Por defecto el texto del botón será Comprar Ahora, para personalizarlo enviar la prop textoBoton="texto deseado para el botón"
*/

function BloqueLateral({ props }) {
    console.log(props.titulo)
    const arrTitulo = props.titulo.split(" ");
    const strNonColor = arrTitulo.slice(0, arrTitulo.length / 2).join(" ") + " ";
    /* Obtiene del titulo las palabras a mostrar de color */
    const strColor = arrTitulo.slice(arrTitulo.length / 2, arrTitulo.length).join(" ");
    console.log(strColor)
    console.log(arrTitulo)
    console.log(props.imagen)

    return (
        <section className={(props.direccion === "izquierda") ? "bloque-lateral row flex-row-reverse align-items-center py-5" : "bloque-lateral row align-items-center py-5"}>
            <div className="col-12 col-md-8">
                <h2 className="mb-4">{strNonColor}<span className="color-primario">{strColor}</span></h2>
                <p>{props.texto}</p>
                {
                    (props.checks !== null) ?
                        <>
                            <CheckInformacion texto="Conectamos con los productores locales" /><CheckInformacion texto="Porque tiene más sentido comprar algo hecho por una persona cercana que por una empresa lejana." /><CheckInformacion texto="Porque los productos locales hacen de nuestro rincón del mundo un lugar mejor para vivir" /><CheckInformacion texto="Porque fomentamos el empleo local" /><CheckInformacion texto="Porque tiene más sentido para el medio ambiente" />
                        </> : ""
                }
                <div className="text-center">
                    <Boton texto={props.textoBoton} />
                </div>
            </div>
            <div className="col-md-4 pt-4">
                <img className="img-fluid " src={props.imagen} alt="Nuestra misión"></img>
            </div>
        </section>
    )
}

export default BloqueLateral;