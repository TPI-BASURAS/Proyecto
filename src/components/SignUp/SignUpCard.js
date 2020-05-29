import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import './SignUp.scss'


class SignUpCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: '',
            email: '',
            showPassword: false,
            password: '',
            error: false,
            dialogOpen: false,
            confirmPassword: '',
            password: ''
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
                backgroundImage: this.gradient,
                fontFamily: 'Product Sans',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
                margin: '1vh 0vw 1vh 0vh',
                fontSize: '1.05rem',
                transitionProperty: 'opacity',
                transitionDuration: '0.1s',
                '&:hover': {
                    opacity: 0.9,
                },
                '&:active': {
                    boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
                },
            },
            label: {
                textTransform: 'capitalize',
            },
        })(Button);
    }

    handleChange =  (event) => {
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
                    alignItems="center">
                    <Grid item xs={5}>
                        <div className="image-container">
                            <img
                                className="banner"
                                src='https://raw.githubusercontent.com/TPI-BASURAS/misc/master/images/register.png' />
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <CssBaseline />
                        <div className="paper-container">
                            <div className="paper">
                                <div className="internal_paper">
                                    <div className="title">
                                        <h1>Bienvenido a SyncTrash</h1>
                                    </div>
                                    <div className="error_msg" style={this.state.signUpError ? {} : { display: 'none' }}>
                                        <div className="help">
                                            <IconContext.Provider value={{ size: "2.2em ", className: 'help_icon' }}>
                                                <div>
                                                    <FaQuestionCircle onClick={this.handleDialogOpen} />
                                                </div>
                                            </IconContext.Provider>
                                        </div>
                                        <span>{this.state.signUpErrorText}</span>
                                    </div>

                                    <Dialog onClose={this.handleDialogClose} aria-labelledby="customized-dialog-title" open={this.state.dialogOpen} fullWidth={true}>
                                        <DialogTitle className="dialog_title" id="customized-dialog-title" onClose={this.handleDialogClose}>
                                            ¿Problemas con tu registro?
					</DialogTitle>
                                        <DialogContent dividers>
                                            <div className="dialog_content">
                                                <p>Es posible que ya hayas creado una cuenta anteriormente con la dirección de correo especificada,
								en ese caso te invitamos a <a href="/SignIn" > Iniciar sesión </a>
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

                                        <ThemeProvider >
                                            <div className="columns_container">
                                                <Grid container
                                                    spacing={1}
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center"
                                                >
                                                    <Grid item xs={12}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            id="username"
                                                            label="Nombre Completo"
                                                            name="username"
                                                            autoComplete="username"
                                                            onChange={this.handleChange}
                                                            error={this.state.usernameError && this.state.username == ""}
                                                            helperText={this.state.usernameError && this.state.username == "" ? "Este campo es obligatorio" : ""}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            id="email"
                                                            label="Correo electronico*"
                                                            name="email"
                                                            autoComplete="email"
                                                            onChange={this.handleChange}
                                                            error={this.state.emailError && this.state.email == ""}
                                                            helperText={this.state.emailError || this.state.email == "" ? this.state.emailErrorText : ""}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            id="Celular"
                                                            label="Telefono celular"
                                                            name="Celular"
                                                            autoComplete="Telefono"
                                                            onChange={this.handleChange}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            name="password"
                                                            label="Contraseña*"
                                                            id="password"
                                                            autoComplete="current-password"
                                                            type={this.state.showPassword ? 'text' : 'password'}
                                                            value={this.state.password}
                                                            onChange={this.handleChange}
                                                            error={this.state.passwordError && this.state.password.length < 2}
                                                            helperText={this.state.passwordError && this.state.password.length < 2 ? "La contraseña debe tener mínimo 7 caracteres" : ""}
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
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            id="localidad"
                                                            label="Localidad"
                                                            name="localidad"
                                                            autoComplete="localidad"
                                                            onChange={this.handleChange}
                                                            helperText={this.state.usernameError && this.state.username == "" ? "Este campo es obligatorio" : ""}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            name="confirmPassword"
                                                            label="Confirmar contraseña*"
                                                            id="confirmPassword"
                                                            autoComplete="confirm password"
                                                            type={this.state.showConfirmPassword ? 'text' : 'password'}
                                                            value={this.state.confirmPassword}
                                                            onChange={this.handleChange}
                                                            error={
                                                                this.state.confirmPassword != this.state.password
                                                            }
                                                            helperText={
                                                                this.state.confirmPassword != this.state.password ? "Las contraseñas deben coincidir" : ""
                                                            }
                                                            InputProps={{
                                                                endAdornment: (
                                                                    <InputAdornment position="end">
                                                                        <IconButton
                                                                            aria-label="toggle password visibility"
                                                                            onClick={this.handleClickShowConfirmPassword}
                                                                            onMouseDown={this.handleMouseDownConfirmPassword}>
                                                                            {(this.state.showConfirmPassword) ? (<VisibilityOff />) : (<Visibility />)}
                                                                        </IconButton>
                                                                    </InputAdornment>
                                                                ),
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        < this.StyledTextField
                                                            variant="outlined"
                                                            margin="normal"
                                                            fullWidth
                                                            id="direccion"
                                                            label="Direccion"
                                                            name="direccion"
                                                            autoComplete="address"
                                                            onChange={this.handleChange}
                                                            helperText={this.state.usernameError && this.state.username == "" ? "Este campo es obligatorio" : ""}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </ThemeProvider>
                                        <div>
                                            <this.StyledButton
                                                fullWidth
                                                focusRipple
                                                variant="contained"
                                                size="medium"
                                                text="bold"
                                            > Regístrate
						</this.StyledButton>
                                            <Link to={{
                                                pathname: '/Register',
                                                state: {
                                                    user: {
                                                        username: this.state.username,
                                                        email: this.state.email,
                                                        password: this.state.password,
                                                        gender: this.state.gender,
                                                        city: this.state.city,
                                                    }
                                                }
                                            }}
                                                ref={
                                                    Link => this.LinkElement = Link
                                                }>
                                            </Link>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <Box mt={4}>
                            < div className="login_link" >
                                <p className="login_text">
                                    ¿Ya tienes una cuenta? <a href="/SignIn" > Inicia sesión </a>
                                </p>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default SignUpCard;