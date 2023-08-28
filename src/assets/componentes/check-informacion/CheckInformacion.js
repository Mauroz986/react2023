import "./check-informacion.css";

function CheckInformacion(content) {
    return (
        <p className="check-informacion ps-4 d-flex align-items-center">
            <span><i className="bi bi-check-circle-fill me-3"></i></span>
            {content.texto}
        </p>
    )
}

export default CheckInformacion;