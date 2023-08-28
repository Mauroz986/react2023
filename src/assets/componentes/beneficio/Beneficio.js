import "./beneficio.css";

function Beneficio(contenido) {
    return (
        <div className="card col-xl-2 my-1">
            <div className="card-body d-flex align-items-center flex-column">
                <div className="icono">
                    {contenido.icono}
                </div>
                <h3>{contenido.titulo}</h3>
                <p className="text-center">{contenido.texto}</p>
            </div>
        </div>
    )
}

export default Beneficio;