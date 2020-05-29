import React, { Component } from "react";
import SignUpCard from './SignUpCard'


import './SignUp.scss'

class SignIn extends Component {

  constructor(props) {

    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="sign_up" >
        <div className="card">
          <SignUpCard />
        </div>
        <div className="background_overlay_no">
        </div>
        <img
          className="image_background_si"
          src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/fondo.png' />
      </div>
    );
  }
}
export default SignIn; 