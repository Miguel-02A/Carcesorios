import React from 'react'
import '../../USUARIO/App.css'
import '../assets/custom/ayudasEstilo.css'
import PerfilDesp from '../component/perfil_desp'
import LogoCarrito from '../../USUARIO/component/logo_carrito_sinIS'
import BarraNavegacion from '../../USUARIO/component/barra_navegacion'
import Footer from '../../USUARIO/component/footer'



function AyudasCliente() {
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
                <h1>Preguntas frecuentes</h1>
        <div className="containerx text-center">
            <div className="row row-cols-2 contenedorll">
                <div className="col colm1">
                    <h3>Compras</h3>
                    <p className="lineap"><a href="#!">Administrar y cancelar compras</a></p>
                    <p><a href="#!">Mis compras</a></p>
                    <p><a href="#!">Articulos deseados</a></p>
                </div>
                <div className="col colm2">
                    <h4>Preguntas frecuentes sobre pagos</h4>
                    <p className="lineap"><a href="#!">¿Es seguro usar mi tarjeta de credito en el sitio web?</a></p>
                    <p><a href="#!">¿Es seguro comprar en la pagina web?</a></p>
                    <p><a href="#!"> ‎ </a></p>
                </div>
                <div className="col colm1">
                    <h3>Envió</h3>
                    <p className="lineap"><a href="#!">¿Cómo puedo saber el estado de mi pedido?</a></p>
                    <p><a href="#!">¿Puedo cancelar un pedido?</a></p>
                    <p><a href="#!">¿Que hacer si el artículo recibido no es lo que pedí?</a></p>
                    <p><a href="#!">¿Qué hacer si el articulo que recibí tiene defectos</a></p>
                    <p><a href="#!">¿Cúanto tiempo tarda en llegar mi pedido?</a></p>
                    <p><a href="#!">  </a></p>
                </div>
                <div className="col colm2">
                    <h3>Remplazos y devoluciones</h3>
                    <p className="lineap"><a href="#!">¿Es posible cambiar mis atículos?</a></p>
                    <p><a href="#!">¿Qué plazo tengo disponible para hacer una devolución?</a></p>
                    <p><a href="#!">¿Cómo debo proceder para devolver un producto a la tienda online?</a></p>
                    <p><a href="#!">¿Tengo que pagar algo por la devolución?</a></p>
                </div>
                <div className="col colm1 otro">
                    <h3>Formulario PQR</h3>
                    <p className="lineap"><a href="#!">Da clic aquí para llenar el formulario PQR</a></p>
                </div>
            </div>

        </div>

        </section>
        <Footer/>
      </div>
    )
}

export default AyudasCliente