import "./alerta.css";
function Alerta(contenido) {
    return (
        <>
            <div className="alerta alert alert-primary alert-dismissible fade show mb-0" role="alert">
                {contenido.texto}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}

export default Alerta;