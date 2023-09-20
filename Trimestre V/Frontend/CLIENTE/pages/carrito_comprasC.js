import React from 'react'
import '../../USUARIO/App.css'
import '../assets/custom/carrito.css'
import PerfilDesp from '../component/perfil_desp'
import LogoCarrito from '../../USUARIO/component/logo_carrito_sinIS'
import BarraNavegacion from '../../USUARIO/component/barra_navegacion'
import Footer from '../../USUARIO/component/footer'
import Imagen1 from '../../USUARIO/assets/imagenesSinIs/3.Aleron.png'

function CarritoComprasC() {
  const carrol = "/Carrito"
  const logo = "/hubCliente"
  const ayudas = "/ayudas"
  const ofertasc = "/OfertasC"
  return (
    <div className='Contenedor_principal'>
      <PerfilDesp/>
      <LogoCarrito link={carrol} link2={logo}/>
      <BarraNavegacion link={ayudas} link2={ofertasc}/>
      <section id="Fotos_productos">
            <div className="container1">
                <h1>Carrito de compras</h1>
                <div className="card">
                <div className="card-body">
                    <img src={Imagen1} alt="Producto" className="product-image"/>
                    <div className="product-description">
                    <h5>Nombre del producto</h5>
                    <p>Descripción del producto</p>
                    </div>
                    <div className="product-buttons">
                    <button className="btn btn-danger">Eliminar producto</button>
                    <button className="btn btn-success">Comprar</button>
                    </div>
                </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src={Imagen1} alt="Producto" className="product-image"/>
                        <div className="product-description">
                        <h5>Nombre del producto</h5>
                        <p>Descripción del producto</p>
                        </div>
                        <div className="product-buttons">
                        <button className="btn btn-danger">Eliminar producto</button>
                        <button className="btn btn-success">Comprar</button>
                        </div>
                    </div>
                    </div>
                <div className="card">
                    <div className="card-body">
                        <img src={Imagen1} alt="Producto" className="product-image"/>
                        <div className="product-description">
                        <h5>Nombre del producto</h5>
                        <p>Descripción del producto</p>
                        </div>
                        <div className="product-buttons">
                        <button className="btn btn-danger">Eliminar producto</button>
                        <button className="btn btn-success">Comprar</button>
                        </div>
                    </div>
                    </div>
                <div className="card">
                    <div className="card-body">
                        <img src={Imagen1} alt="Producto" className="product-image"/>
                        <div className="product-description">
                        <h5>Nombre del producto</h5>
                        <p>Descripción del producto</p>
                        </div>
                        <div className="product-buttons">
                        <button className="btn btn-danger">Eliminar producto</button>
                        <button className="btn btn-success">Comprar</button>
                        </div>
                    </div>
                    </div>
                <div className="card">
                    <div className="card-body">
                        <img src={Imagen1} alt="Producto" className="product-image"/>
                        <div className="product-description">
                        <h5>Nombre del producto</h5>
                        <p>Descripción del producto</p>
                        </div>
                        <div className="product-buttons">
                        <button className="btn btn-danger">Eliminar producto</button>
                        <button className="btn btn-success">Comprar</button>
                        </div>
                    </div>
                </div>
                <h2 className="preciot">Precio total    $$</h2>
                <div className="cont">
                    <button className="cont"><a className="contlk" href="8.intpagos_cliente.html">Continuar compra</a></button>
                </div>
            </div>

        </section>
      <Footer/>
    </div>
  )
}

export default CarritoComprasC