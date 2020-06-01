import React, { Component } from 'react'
import syncLogo from '../../assets/home/sync trash.svg'
import { data } from '../../assets/data'



import './Collection.scss'

class Collection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: []
        }
    }

    render() {
        console.log(data.Hoja1)
        return (
            <div className="collection">
                <div className="card">
                    <div className="collection-container">
                        <div className="title-container">
                            <div className="title">
                                <div className="home-content">
                                    <span className="part1"> Lista de asociaciones recicladoras</span>
                                </div>
                            </div>
                            <div className="images-container">
                                <img className="whoami-logo" alt="logo" src={syncLogo} />
                                <img
                                    className="plant"
                                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                            </div>
                        </div>
                        <div className="collection-table">
                            <table>
                                <thead>
                                    <th>ID</th>
                                    <th>NIT Maestra</th>
                                    <th>Estado organización</th>
                                    <th>Nombre organización</th>
                                    <th>Sigla asociación</th>
                                    <th>Localidad dir principal</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Correo electrónico</th>
                                    <th>Contacto</th>
                                    <th>Representante legal</th>
                                </thead>
                                <tbody>
                                    {data.Hoja1.map(row => {
                                        return(
                                            <tr key={row.ID}>
                                                <td>{row.ID}</td>
                                                <td>{row.nitMaestra}</td>
                                                <td>{row.estadoOrganizacion}</td>
                                                <td>{row.nombreOrganizacion}</td>
                                                <td>{row.siglaAsociacion}</td>
                                                <td>{row.localidad}</td>
                                                <td>{row.dirPrincipal}</td>
                                                <td>{row.telefono}</td>
                                                <td>{row.email}</td>
                                                <td>{row.personaContacto}</td>
                                                <td>{row.representanteLegal}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <img
                    className="image_background_si"
                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/fondo.png' />

            </div>
        )
    }
}


export default Collection;