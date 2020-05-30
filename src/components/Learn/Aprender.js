import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Aprender.scss'
import syncLogo from '../../assets/home/sync trash.svg'

class Aprender extends Component {
    render() {
        return (
            <div className="learn">
                <div className="card">
                    <div className="learn-container">

                        <div className="content">
                            <spam className="learn-title">Aprende a separar resíduos sólidos</spam>

                            <img className="plant-image" src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />

                            <span className="learn-subtitle">¿Por qué es importante separar resíduos?</span>
                            <span className="learn-text">Cerca del 40% de material reciclable es enviado a los rellenos sanitario de Bogotá, todo este material puede ser reciclado si se entrega en condiciones óptimas para la transformación, por lo cual debemos tener conciencia de como organizar nuestros desechos y como adecuarlos hasta que llegué el momento de su recepción.</span>
                        </div>

                        <div className="sidebar">
                            <img className="sidebar-logo" alt="synctrash" src={syncLogo}/>
                            <button className="sidebar-button">Plásticos</button>
                            <button className="sidebar-button">Metales</button>
                            <button className="sidebar-button">Electrónicos</button>
                            <button className="sidebar-button">Vidrio</button>
                            <button className="sidebar-button">Papel y cartón</button>
                            <button className="sidebar-button">Resíduos orgánicos</button>
                        </div>

                    </div>
                </div>
                <img
                    className="image_background_si"
                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/fondo.png' />
            </div>
        );
    }
}

export default withRouter(Aprender);