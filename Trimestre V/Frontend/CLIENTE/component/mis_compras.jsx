import React from "react";
import '../assets/custom/miscompras.css';
import Aleron from '../../USUARIO/assets/imagenesSinIs/3.Aleron.png';
import Palanca from '../../USUARIO/assets/imagenesSinIs/4.Palanca.png';
import Rines from '../../USUARIO/assets/imagenesSinIs/6.Rines.png';



function Compras() {
  return (
    <div className="container text-center">
    <div className="row">
        <div className="col">
            <div className="card">
                <img src={Aleron} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Alerón</h5>
                <p className="card-text">Alerón negro en fibra de carbono para autos pequeños</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item bien">Entregado</li>
                <li className="list-group-item">29 de diciembre de 2022</li>
                </ul>
                <div className="card-body">
                    <a href="#!" className="card-link">Comprar de nuevo</a><br/>
                    <a href="#!" className="card-link">Ver detalles de compra</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={Palanca} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Palanca de cambios</h5>
                <p className="card-text">Palanca de cambios 6 velocidades, negro mate con gris</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item mal">Cancelado</li>
                <li className="list-group-item">05 de junio de 2023</li>
                </ul>
                <div className="card-body">
                <a href="#!" className="card-link">Comprar de nuevo</a><br/>
                <a href="#!" className="card-link">Ver detalles de compra</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src={Rines} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Rines</h5>
                <p className="card-text">Rines de lujo en aluminio de 14 pulgadas color negro </p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item bien">Entregado</li>
                <li className="list-group-item">24 de noviembre de 2022</li>
                </ul>
                <div className="card-body">
                    <a href="#!" className="card-link">Comprar de nuevo</a><br/>
                    <a href="#!" className="card-link">Ver detalles de compra</a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Compras;
