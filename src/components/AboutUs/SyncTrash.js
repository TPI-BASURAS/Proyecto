import React, { Component } from 'react'
import syncLogo from '../../assets/home/sync trash.svg'

import './AboutUs.scss'


class SyncTrash extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="info">
                <div className="card">
                    <div className="info-container">
                        <div className="title-container">
                            <div className="title">
                                <div className="home-content">
                                    <spam className="part1"> Bienvenido a Synctrash</spam>
                                </div>
                                <div className="home-content">
                                    <spam className="part2">Recolectando y Reciclando el futuro</spam>
                                </div>
                            </div>
                            <div className="images-container">
                                <img className="whoami-logo" alt="logo" src={syncLogo} />
                                <img
                                    className="plant"
                                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                            </div>
                        </div>
                        <div className="content-info">
                            <p>
                                SyncTrash es una iniciativa que nace como Taller de Procesos Interdisciplinario en la Universidad Nacional de Colombia Sede Bogotá motivada a generar una comunicación más estrecha y directa entre los recicladores de la ciudad de Bogotá y los usuarios del servicio de recolección de basuras.
                                <br />
                                <br />
                                En SyncTrash, se busca coordinar la recolección de residuos aprovechables coordinadamente entre usuarios del sistema de limpieza y recolectores para maximizar el tiempo de recogida de los recicladores, así como aumentar el volumen de residuos sólidos aprovechables que genera la ciudad.
                                <br />
                                <br />
                                Actualmente menos de el 40% del material reciclable es reciclado, esto quiere decir que cerca del 60% del reciclaje se va con los desperdicios a los rellenos sanitarios.
                                <br />
                                <br />
                                Esta inciativa busca fomentar el desarrollo ambiental de la ciudad de Bogotá para permitir un acceso al sistema de reciclaje de la ciudad de manera más directa y personal, involucrando a todos los actores de la cadena de reciclaje directamente.
                            </p>
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

export default SyncTrash;