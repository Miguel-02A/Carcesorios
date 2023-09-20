import React from 'react'
import '../assets/custom/listaDeseos.css'
import TuboEscape from '../../USUARIO/assets/imagenesSinIs/5.T_escape.png'
import Palanca from '../../USUARIO/assets/imagenesSinIs/4.Palanca.png'
import BodyKit from '../../USUARIO/assets/imagenesSinIs/2.Body_kit.png'
import Llantas from '../../USUARIO/assets/imagenesSinIs/3.llantas.png'
import TAire from '../../USUARIO/assets/imagenesSinIs/4.T_aire.png'
import Volante from '../../USUARIO/assets/imagenesSinIs/3.Volante.png'


function ListaDeseos() {
  return (
    <div className="container text-center">
        <div className="row">
            <div className="col">
                <div className="card" >
                    <img src={TuboEscape} className="card-img-top" alt="..."/><br/>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#!">Tubos de escape</a></h5>
                    <p className="card-text desc">Tubos de escape doble de decoración color plata</p>
                    <p className="card-text precio">150.000</p>
                    <a href="#!" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" >
                    <img src={Palanca} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#!">Palanca de cambios</a></h5>
                    <p className="card-text desc">Palanca de cambios 5 velocidades, color gris</p>
                    <p className="card-text precio">150.000</p>
                    <a href="#!" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" >
                    <img src={BodyKit} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#!">Body kit</a></h5>
                    <p className="card-text desc">Body kit delantero para Renault Twingo</p>
                    <p className="card-text precio">250.000</p>
                    <a href="#!" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <div className="card" >
                    <img src={Llantas} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#!">Llantas negras</a></h5>
                    <p className="card-text desc">Combo de 4 llantas negras para auto 15x15</p>
                    <p className="card-text precio">499.099</p>
                    <a href="#!" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" >
                    <img src={TAire} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><a href="#!">Toma de aire</a></h5>
                    <p className="card-text desc">Toma de aire en fibra de carbono color negro</p>
                    <p className="card-text precio">319.213</p>
                    <a href="#!" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card" >
                    <img src={Volante} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title"><a href="2.Volante_cliente.html">Volante</a></h5>
                    <p className="card-text desc">Volante deportivo color negro</p>
                    <p className="card-text precio">152.453</p>
                    <a href="#!" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
        </div>
</div>

  )
}

export default ListaDeseos