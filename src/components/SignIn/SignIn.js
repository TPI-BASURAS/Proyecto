import React, { Component } from "react";
import SignInCard from './SignInCard'

import './SignIn.scss'

class SignIn extends Component {

    constructor(props) {
  
      super(props);
      this.state = {
      }
    }
  
    render() {
      console.log(this.state.user);
      return (
        <div className="sign_in" >
          <div className="card">
            <SignInCard />
          </div>
          <div className="background_overlay_si">
          </div>
          <img
            className="image_background_si"
            src='https://raw.githubusercontent.com/TPI-BASURAS/Proyecto/feature/SignIn/src/assets/fondo.png?token=AH2T4PVADBTBL36CIO5UADS6YKXME' />
        </div>
      );
    }
  }
  export default SignIn; 