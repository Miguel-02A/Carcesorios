import React from "react";
import '../assets/custom/comprar.css'
import Ubicacion from '../../USUARIO/assets/imagenesSinIs/pngegg.png'
import Tarjeta from '../../USUARIO/assets/imagenesSinIs/pngwing.com.png'
import Factura from '../../USUARIO/assets/imagenesSinIs/factura.png'
import PerfilDesp from "../component/perfil_desp";
import LogoCarrito from "../../USUARIO/component/logo_carrito_sinIS";
import BarraNavegacion from "../../USUARIO/component/barra_navegacion";
import TituloPag from "../../USUARIO/component/tituloPag";
import Footer from "../../USUARIO/component/footer";

function Comprar() {
  const title = "Comprar";
  const carrol = "/Carrito";
  const logo = "/hubCliente";
  const ayudas = "/ayudas";
  const ofertasc = "/OfertasC";
  return (
    <div className="Contenedor_principal">
      <PerfilDesp />
      <LogoCarrito link={carrol} link2={logo} />
      <BarraNavegacion link={ayudas} link2={ofertasc} />
      <TituloPag titulo={title} />
      <div className="container text-center">
        <div className="row">
          <div className="col-8">
            <h2>Direccion de entrega</h2>
            <div className="card cuadrito">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img src={Ubicacion} alt="Ubicacion" />
                  </div>
                  <div className="col">
                    <h5>Carrera 7 #118 - 56</h5>
                    <p>Conjunto Alameda Torre 13 Apto 102</p>
                  </div>
                  <div className="col-2">
                    <a href="#!">Editar direccion de entrega</a>
                  </div>
                </div>
              </div>
            </div>
            <h2>Metodo de pago</h2>
            <div className="card cuadrito">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img src={Tarjeta} alt="Ubicacion" />
                  </div>
                  <div className="col-7">
                    <h5>Tarjeta Visa</h5>
                    <p>Tarjeta debito terminada en ***8223</p>
                  </div>
                  <div className="col-2">
                    <label for="Coutas">Número de coutas</label>
                    <select name="Coutas">
                      <option value="">x1</option>
                      <option value="">x2</option>
                      <option value="">x3</option>
                      <option value="">x6</option>
                      <option value="">x12</option>
                      <option value="">x24</option>
                      <option value="">x36</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cuadrito">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img src={Factura} alt="Ubicacion" />
                  </div>
                  <div className="col-7">
                    <h5>Detalles de la factura</h5>
                    <p>Baltasar Perez - CC 10108549912</p>
                  </div>
                  <div className="col-2">
                    <a href="#!">Cambiar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card22">
              <h3>Productos</h3>
              <li>Palanca de cambios negra</li>
              <h5>Confirmación de pedido</h5>
              <p>total productos: 152.000</p>
              <p>Envio: 12.000</p>
              <p>Codigo de descuento: 0</p>
              <h6 className="preciott">Precio total: 164.000</h6>
              <button className="botoncom">Confirmar pago</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Comprar;
