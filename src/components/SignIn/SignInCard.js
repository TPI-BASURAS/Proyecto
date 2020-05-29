import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import { FaQuestionCircle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import './SignIn.scss'

class SignInCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: '',
            email: '',
            showPassword: false,
            password: '',
            error: false,
            dialogOpen: false
        };

        this.gradient = 'linear-gradient(136deg, #055B5C 0%, #40989d 50%)';
        this.primaryColor = '#40989d';
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleDialogOpen = this.handleDialogOpen.bind(this);
        this.handleDialogClose = this.handleDialogClose.bind(this);
        this.handleToAssistant = this.handleToAssistant.bind(this);

        this.handleMouseDownPassword = event => {
            event.preventDefault();
        };


        this.theme = createMuiTheme({
            palette: {
                primary: {
                    main: this.primaryColor
                },
                fontFamily: '"Product Sans"',
            },
        });

        this.StyledTextField = withStyles({
            root: {
                marginTop: '1.2vh',
                fontFamily: 'Product Sans !important',
                '& label.Mui-focused': {
                    color: this.primaryColor,
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: this.primaryColor,
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.3);',
                    },
                    '&:hover fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.6);',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: this.primaryColor,
                    },
                },
            },
        })(TextField);

        this.StyledButton = withStyles({
            root: {
                background: 'rgba(126, 160, 14, 1);',
                fontFamily: 'Product Sans',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                margin: '1vh 0vw 1vh 0vh',
                fontSize: '1.05rem',
                transitionProperty: 'opacity',
                transitionDuration: '0.1s',
                '&:hover': {
                    background: 'rgba(126, 160, 14, .9)',
                },
                '&:active': {
                    boxShadow: '0 3px 5px 2px rgba(126, 160, 14, .3)',
                },
            },
            label: {
                textTransform: 'capitalize',
            },
        })(Button);
    }

    handleChange = (event) => {
        var prop = String(event.target.id);
        this.setState({ [prop]: event.target.value });
    }

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleClick = (udata) => {
        this.setState({
            userData: udata
        });
        this.LinkElement.click();
    }

    handleToAssistant = (udata) => {
        this.setState({
            userData: udata
        });
        this.LinkToAssistantElement.click();
    }

    handleDialogOpen = () => {
        this.setState({ dialogOpen: true });
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    }

    render() {
        return (
            <Container component="main">
                <CssBaseline />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={9}>
                        <div className="image-container">
                            <img
                                className="banner"
                                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/banner.png' />
                        </div>

                    </Grid>
                    <Grid item xs={3}>
                        <div className="plant-container">
                            <img
                                className="plant"
                                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/hojas.png' />
                        </div>
                        <div className="paper-container">
                            <div className="paper">

                                <div className="internal_paper_in">

                                    <div className="title">
                                        <h1>Iniciar de sesion </h1>
                                    </div>
                                    <div className="error_msg" style={this.state.error ? {} : { display: 'none' }}>
                                        <div className="help">
                                            <IconContext.Provider value={{ size: "2.2em ", className: 'help_icon' }}>
                                                <div>
                                                    <FaQuestionCircle onClick={this.handleDialogOpen} />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                        <span>Correo electrónico o contraseña incorrectos. Por favor inténtalo nuevamente</span>
                                    </div>

                                    <Dialog onClose={this.handleDialogClose} aria-labelledby="customized-dialog-title" open={this.state.dialogOpen} fullWidth={true}>
                                        <DialogTitle className="dialog_title" id="customized-dialog-title" onClose={this.handleDialogClose}>
                                            ¿Problemas con tu inicio de sesión?
                  </DialogTitle>
                                        <DialogContent dividers>
                                            <div className="dialog_content">
                                                <p>Recuerda escribir una dirección de correo válida (nombre@dominio.com) y ten cuidado con las mayúsculas al
                                                momento de escribir tu contraseña.
                          </p>
                                                <p>
                                                    Si aún no tienes una cuenta, <a href="/SignUp" > Regístrate aquí </a>
                                                </p>
                                            </div>
                                        </DialogContent>
                                        <DialogActions>
                                            <ThemeProvider theme={this.theme}>
                                                <Button onClick={this.handleDialogClose}>
                                                    cerrar
                      </Button>
                                            </ThemeProvider>
                                        </DialogActions>
                                    </Dialog>

                                    <form className="form" noValidate>

                                        < this.StyledTextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Correo electronico"
                                            name="email"
                                            autoComplete="email"
                                            onChange={this.handleChange}
                                        />

                                        < this.StyledTextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            name="password"
                                            label="Contraseña"
                                            id="password"
                                            autoComplete="current-password"
                                            type={this.state.showPassword ? 'text' : 'password'}
                                            //value={this.state.password}
                                            onChange={this.handleChange}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton

                                                            aria-label="toggle password visibility"
                                                            onClick={this.handleClickShowPassword}
                                                            onMouseDown={this.handleMouseDownPassword}>
                                                            {(this.state.showPassword) ? (<VisibilityOff />) : (<Visibility />)}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />

                                        <ThemeProvider theme={this.theme}>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Recuerdame"
                                            />
                                        </ThemeProvider>
                                        <div>
                                            < this.StyledButton onClick={() => {


                                            }}
                                                /* href="/PrefAssistant" */
                                                fullWidth
                                                focusRipple
                                                variant="contained"
                                                size="medium"
                                                text="bold"
                                            > Inicia sesion </this.StyledButton>
                                            <Link to={{
                                                pathname: '/Home',
                                                state: {
                                                    userData: this.state.userData
                                                }
                                            }}
                                                ref={
                                                    Link => this.LinkElement = Link
                                                }>
                                            </Link>
                                        </div>


                                        <div className="login_link">
                                            < a href="#"> ¿Olvidaste tu contraseña? </a>
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>

                        <Box mt={5}>
                            < div className="login_link" >
                                <p>
                                    ¿No tienes una cuenta?  <a href="/SignUp" > Regístrate </a>
                                </p>
                            </div>
                        </Box>
                    </Grid>

                </Grid>



            </Container>
        );
    }
}

export default SignInCard;