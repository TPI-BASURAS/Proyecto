import React, { Component } from "react";

import map from '../../assets/map.png'
import syncLogo from '../../assets/home/sync trash.svg'
import './Contact.scss'


class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <div className="card">
                    <div className="info-container">
                        <div className="title-container">
                            <div className="title">
                                <div className="home-content">
                                    <spam className="part1">Contacta una organizacion cercana</spam>
                                </div>
                                <div className="home-content part2">
                                    <spam className="part2">A continuacion se presentan las organizaciones recicladores cercanas a su ubicacion</spam>
                                </div>
                            </div>
                            <div className="images-container">
                                <img className="whoami-logo" alt="logo" src={syncLogo} />
                                <img
                                    className="plant"
                                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                            </div>
                        </div>
                        <div className="map-info-container">

                            <div class="information">
                                <div class="content-information">
                                    <h1>Informacion de contacto</h1>
                                    <ul>
                                        <li>Reciclamas Bogotá
                                        <br />
                                        <strong>Direccion:</strong> Transversal 124 # 17F-88
                                        <br />
                                        <strong>Telefono:</strong> 2674586
                                        <br />
                                        </li>
                                        <li>RECICLAJE DE ICOPOR
                                        <br />
                                        <strong>Direccion:</strong> Calle 17 c No.122-07
                                        <br />
                                        <strong>Telefono:</strong> +573143797508
                                        <br />
                                        </li>
                                        <li>Ibacarcol
                                        <br />
                                        <strong>Direccion:</strong> Cl. 17 ##115-10
                                        <br />
                                        <strong>Telefono:</strong> 7447670
                                        <br />
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="map">
                                <img src={map} />
                            </div>

                            <div className="return">
                                <a className="whoami-links-link1" href={"/Home"}>Volver al inicio</a>
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

export default Contact;