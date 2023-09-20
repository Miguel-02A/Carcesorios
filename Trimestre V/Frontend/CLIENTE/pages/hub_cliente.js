import React from 'react'
import '../../USUARIO/App.css'
import PerfilDesp from '../component/perfil_desp'
import LogoCarrito from '../../USUARIO/component/logo_carrito_sinIS'
import BarraNavegacion from '../../USUARIO/component/barra_navegacion'
import CarruselImg from '../../USUARIO/component/body_cat_sinIC'
import TituloPag from '../../USUARIO/component/tituloPag'
import CategoriasProd from '../../USUARIO/component/categorias_prod'
import Footer from '../../USUARIO/component/footer'



function HubCliente() {
  const title = 'Categorias'
  const carrol = "/Carrito"
  const logo = "/hubCliente"
  const ayudas = "/ayudas"
  const linkV = "/VolanteC"
  const ofertasc = "/OfertasC"
  return (
    <div className='Contenedor_principal'>
      <PerfilDesp/>
      <LogoCarrito link={carrol} link2={logo}/>
      <BarraNavegacion link={ayudas} link2={ofertasc}/>
      <CarruselImg/>
      <TituloPag titulo={title}/>
      <CategoriasProd link={linkV}/>
      <Footer/>
    </div>
  )
}

export default HubCliente