import "./carrusel.css";
import img1 from "../../imagenes/carrusel/1.jpg";
import img2 from "../../imagenes/carrusel/2.jpg";
import img3 from "../../imagenes/carrusel/3.jpg";
import img4 from "../../imagenes/carrusel/4.jpg";
import img5 from "../../imagenes/carrusel/5.jpg";
import img6 from "../../imagenes/carrusel/6.jpg";
import img7 from "../../imagenes/carrusel/7.jpg";
import img8 from "../../imagenes/carrusel/8.jpg";
import img9 from "../../imagenes/carrusel/9.jpg";
import img10 from "../../imagenes/carrusel/10.jpg";

const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Carrusel() {
    return (
        <section className="row py-4">
            <h2 className="text-center pt-4"><span className="color-primario">@FashionPremium </span>en Instagram</h2>

            <div id="carouselExample" className="carousel slide pt-3">
                <div className="carousel-inner">
                    {
                        imgArray.map((elemento, index) => {
                            return (
                                <div key={index} className={(index === 0) ? "carousel-item active" : "carousel-item"}>
                                    <img src={elemento} className="d-block w-100" alt="..." />
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carrusel;