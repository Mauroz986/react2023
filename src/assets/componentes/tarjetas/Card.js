import React from 'react';
import './Card.css';

function Card({title,imgSource,precioO,precioD}) {
  
  return (
    <div className="card d-flex  col-md-10">
      <img src={imgSource} alt=''/>
      <div className='card-body d-flex align-items-center flex-column'></div>

      <h4 className='card-title'>{title}</h4>
      <p className='card-text text-secondary'></p>
      <div class="precio">
        <span className="precio-descuento">{precioD}</span> 
   <span className="precio-original">{precioO}</span> 
    </div>
    <a href='#!' className='btn  btn-outline-secondary rounded-0 '>
Compra Rapida
    </a>
    </div>
  )
}




export default Card;



