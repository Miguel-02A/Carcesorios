import React from 'react'
import '../assets/custom/perfil_desp.css'

function PerfilDesp() {
  return (
    <div>
        <header id="Cabeceras">
            <div className="Menu_cabecera">
                <nav className="Inicio_registro">
                    <ul className="nave">
                        <li><a href="#!"><h4>Baltasar Pérez</h4></a>
                            <ul className="minimenu">
                                <li><a href="/Perfil"><p>Perfil</p></a></li>
                                <li><a href="/Compras"><p>Mis compras</p></a></li>
                                <li><a href="/ListaDeseos"><p>Lista de deseos</p></a></li>
                                <li><a href="/ayudas"><p>PQR</p></a></li>
                                <li><a href="/"><p>Cerrar sesión</p></a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default PerfilDesp