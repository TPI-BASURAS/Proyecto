import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom';
import syncLogo from '../../../../assets/home/sync trash.svg'
import lapiz from '../../../../assets/home/lapiz.svg'
import colaboracion from '../../../../assets/home/colaboracion.svg'
import ubicacion from '../../../../assets/home/ubicacion.svg'

import './wrapper.scss'


class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="card">
                    <div className="home-container">
                        <div className="title">
                            <div className="home-content">
                                <spam className="part1"> Bienvenido a Synctrash</spam>
                            </div>
                            <div className="home-content">
                                <spam className="part2">Recolectando y Reciclando el futuro</spam>
                            </div>
                        </div>
                        <div className="plant-container">
                            <img
                                className="plant"
                                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                        </div>

                        <div className="whoami">
                            <img className="whoami-logo" alt="logo" src={syncLogo}/>
                            <div className="whoami-links">
                                <a className="whoami-links-link1" href={"#"}>¿Qué es SyncTrash?</a>
                                <a className="whoami-links-link2" href={"#"}>¿Quiénes somos?</a>
                            </div>
                        </div>

                        <div className="content">

                            <NavLink className="home-card" to="/Aprender">

                                <h1>Aprende a separar residuos solidos</h1>
                                <div className="card-icon">
                                    <img alt="lapiz" className="card-icon-image" src={lapiz}/>
                                </div>

                            </NavLink>
                            <NavLink className="home-card" to="/Acopios">

                                <h1>Busca lugares de acopio de material reciclable</h1>
                                <div className="card-icon">
                                    <img alt="ubicacion" className="card-icon-image" src={ubicacion}/>
                                </div>

                            </NavLink>

                            <NavLink className="home-card"  to="/Contacto">

                                <h1>Contacta una organizacion recicladora en tu sector</h1>
                                <div className="card-icon">
                                    <img alt="colaboracion" className="card-icon-image" src={colaboracion}/>
                                </div>

                            </NavLink>

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

export default withRouter(Home);