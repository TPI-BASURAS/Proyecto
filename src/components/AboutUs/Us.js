import React from 'react'
import syncLogo from '../../assets/home/sync trash.svg'

import person1 from '../../assets/photos/1.jpeg'
import person2 from '../../assets/photos/2.jpeg'
import person3 from '../../assets/photos/3.jpeg'
import person4 from '../../assets/photos/4.jpeg'
import './AboutUs.scss'


function Us() {
    return (
        <div className="info">
            <div className="card">
                <div className="info-container">
                    <div className="title-container">
                        <div className="title">
                            <div className="home-content">
                                <spam className="part1"> ¿Quienes somos?</spam>
                            </div>
                            <div className="home-content">
                                <spam className="part2">Desde la academia preocupandonos por una ciudad sostenible
                                </spam>
                            </div>
                        </div>
                        <div className="images-container">
                            <img className="whoami-logo" alt="logo" src={syncLogo}/>
                            <img
                                className="plant"
                                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png'/>
                        </div>
                    </div>
                    <div className="personal-info-container">
                        <div className="person">
                            <div className="avatar-container">
                                <img src={person1}/>
                            </div>
                            <div className="personal-info">
                                <p>Estudiante de Ingenieria Electrica Universidad Nacional de Colombia</p>
                            </div>
                        </div>
                        <div className="person">
                            <div className="avatar-container">
                                <img src={person2}/>
                            </div>
                            <div className="personal-info">
                                <p>Estudiante de Ingenieria Sistemas Universidad Nacional de Colombia</p>
                            </div>
                        </div>
                        <div className="person">
                            <div className="avatar-container">
                                <img src={person3}/>
                            </div>
                            <div className="personal-info">
                                <p>Estudiante de Ingenieria Sistemas Universidad Nacional de Colombia</p>
                            </div>
                        </div>
                        <div className="person">
                            <div className="avatar-container">
                                <img src={person4}/>
                            </div>
                            <div className="personal-info">
                                <p>Estudiante de Ingenieria Quimica Universidad Nacional de Colombia</p>
                            </div>
                        </div>
                        <div className="return">
                            <a className="whoami-links-link1" href={"/Home"}>Volver al inicio</a>
                        </div>
                    </div>

                </div>
            </div>
            <img
                className="image_background_si"
                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/fondo.png'/>
        </div>
    )
}

export default Us;