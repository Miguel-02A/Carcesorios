import React from 'react'
import '../../USUARIO/App.css'
import PerfilDesp from '../component/perfil_desp'
import LogoCarrito from '../../USUARIO/component/logo_carrito_sinIS'
import BarraNavegacion from '../../USUARIO/component/barra_navegacion'
import TituloPag from '../../USUARIO/component/tituloPag'
import ListaDeseos from '../component/listaDeseos'
import Footer from '../../USUARIO/component/footer'



function ListaDeDeseos() {
    const title = 'Lista de deseos'
    const carrol = "/Carrito"
    const logo = "/hubCliente"
    const ayudas = "/ayudas"
    const ofertasc = "/OfertasC"
    return (
      <div className='Contenedor_principal'>
        <PerfilDesp/>
        <LogoCarrito link={carrol} link2={logo}/>
        <BarraNavegacion link={ayudas} link2={ofertasc}/>
        <TituloPag titulo={title}/>
        <ListaDeseos/>
        <Footer/>
      </div>
    )
}

export default ListaDeDeseos