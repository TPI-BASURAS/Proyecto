import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import './wrapper.scss'


class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home">
                <div className="card">
                    <div className="home-container">
                        <Container component="main">
                            <Grid
                                container
                                spacing={1}
                            >
                                <Grid container item xs={12}>
                                    <Grid item xs={11}>
                                        <div className="home-content">
                                            <h1> Bienvenido a Synctrash</h1>
                                        </div>
                                        <div className="home-content">
                                            <h2>Recolectando y Reciclando el futuro</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <div className="plant-container">
                                            <img
                                                className="plant"
                                                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container item={12}>
                                    <Grid item xs={4}>
                                        <div className="home-card">

                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="home-card">

                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className="home-card">

                                        </div>
                                    </Grid>
                                </Grid>



                            </Grid>
                        </Container>
                    </div>
                </div>

                <img
                    className="image_background_si"
                    src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/fondo.png' />
            </div>
        )
    }



}

export default Home;