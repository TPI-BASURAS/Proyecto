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

    renderTable = () => {
        let content = []
        data.Hoja1.forEach(element => {
            content.push(
                <div className="row-item">
                    <div id="name-item" className="content">
                        <span >
                            {element["NOMBRE ORGANIZACION"]}
                                    </span>
                    </div>
                    <div id="localidad-item" className="content">
                        <span >
                        {element["LOCALIDAD"]}
                                    </span>
                    </div>
                    <div id="direccion-item" className="content">
                        <span >
                        {element["DIRECIÓN PRINCIPAL"]}
                                    </span>
                    </div>
                    <div id="barrio-item" className="content">
                        <span >
                        {element["BARRIO"]}
                                    </span>
                    </div>
                    <div id="telefono-item" className="content">
                        <span >
                        {element["TELEFONO"]}
                                    </span>
                    </div>
                    <div id="correo-item" className="content">
                        <span >
                        {element["CORREO ELECTRONICO"]}
                                    </span>
                    </div>
                    <div id="contacto-item" className="content">
                        <span >
                        {element["PERSONA DE CONTACTO"]}
                                    </span>
                    </div>
                </div>
            )

        });

        this.setState(
            {
                rows: content
            }
        )

    }

    componentDidMount = () => {
        this.renderTable();
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
                                    <spam className="part1"> Lista de asociaciones recicladoras</spam>
                                </div>
                            </div>
                            <div className="images-container">
                                <img className="whoami-logo" alt="logo" src={syncLogo} />
                                <img
                                    className="plant"
                                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                            </div>
                        </div>

                        <div className="table-container">
                            <div className="table-headers">
                                <div id="name" className="title">
                                    <span >
                                        NOMBRE ORGANIZACION
                                    </span>
                                </div>
                                <div id="localidad" className="title">
                                    <span >
                                        LOCALIDAD
                                    </span>
                                </div>
                                <div id="direccion" className="title">
                                    <span >
                                        DIRECCION
                                    </span>
                                </div>
                                <div id="barrio" className="title">
                                    <span >
                                        BARRIO
                                    </span>
                                </div>
                                <div id="telefono" className="title">
                                    <span >
                                        TELEFONO
                                    </span>
                                </div>
                                <div id="correo" className="title">
                                    <span >
                                        CORREO ELECTRONICO
                                    </span>
                                </div>
                                <div id="contacto" className="title">
                                    <span >
                                        PERSONA DE CONTACTO
                                    </span>
                                </div>
                            </div>
                            <div className="table-body">
                                {this.state.rows}
                            </div>
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