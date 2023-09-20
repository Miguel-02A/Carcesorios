import React from 'react'
import '../../USUARIO/App.css'
import PerfilDesp from '../component/perfil_desp'
import LogoCarrito from '../../USUARIO/component/logo_carrito_sinIS'
import BarraNavegacion from '../../USUARIO/component/barra_navegacion'
import TituloPag from '../../USUARIO/component/tituloPag'
import DescProdC from '../../USUARIO/component/desc_producto'
import Footer from '../../USUARIO/component/footer'



function DescProdD() {
    const title = 'Volante cafe tipo madera'
    const carrol = "/Carrito"
    const logo = "/hubCliente"
    const ayudas = "/ayudas"
    const ofertasc = "/OfertasC"
    const comprar = "/Comprar"
    return (
      <div className='Contenedor_principal'>
        <PerfilDesp/>
        <LogoCarrito link={carrol} link2={logo}/>
        <BarraNavegacion link={ayudas} link2={ofertasc}/>
        <TituloPag titulo={title}/>
        <DescProdC link={comprar} link2={carrol}/>
        <Footer/>
      </div>
    )
}

export default DescProdD