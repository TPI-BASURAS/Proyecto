import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import './wrapper.scss'


class Home extends Component {
    constructor(props) {
        super(props)

        this.routeChange = this.routeChange.bind(this);
    }

    routeChange = (route) => {
        let path = route;
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="home">
                <div className="card">
                    <div className="home-container">
                        <div className="title-container">
                            <div className="title">
                                <div className="home-content">
                                    <h1> Bienvenido a Synctrash</h1>
                                </div>
                                <div className="home-content">
                                    <h2>Recolectando y Reciclando el futuro</h2>
                                </div>
                            </div>
                            <div className="plant-container">
                                <img
                                    className="plant"
                                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                            </div>
                        </div>
                        <div className="content">
                            <div className="cards-container">
                                <div className="home-card">
                                    <div className="card-content" onClick={() => {
                                        this.routeChange("/SepararResiduos")
                                    }}>
                                        <h1>
                                            Aprende a separar residuos solidos
                                                </h1>
                                    </div>
                                </div>
                                <div className="home-card">
                                    <div className="card-content" onClick={() => {
                                        this.routeChange("/Acopios")
                                    }}>
                                        <h1>
                                            Busca lugares de acopio de material reciclable
                                                </h1>
                                    </div>
                                </div>
                                <div className="home-card">
                                    <div className="card-content" onClick={() => {
                                        this.routeChange("/Contacto")
                                    }}>
                                        <h1>
                                            Contacta una organizacion recicladora en tu sector
                                                </h1>
                                    </div>
                                </div>
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

export default withRouter(Home);