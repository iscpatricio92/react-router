import React, { useState } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {loginRequest} from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';


const Login = props =>{
    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSumit = event =>{
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <>
            <Header isLogin/>
            <section    className="login">
            <div className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form" onSubmit={handleSumit}>
                        <input
                            name='email'
                            className="input"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            name='password'
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button__index" type='submit'>Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" name="" id="cbox1" value="checkbos" />Recuerdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div>
                            <img src={googleIcon} alt="Google" />Inicia sesión con Google
                        </div>
                        <div>
                            <img src={twitterIcon} alt="Google" />Inicia sesión con twitter
                        </div>
                    </section>
                    <p className="logn__container--register">No tienes ninguna cuenta <br/>
                    <Link to='/register'>
                        REGISTRATE
                    </Link>
                    </p>
            </div>
            </section>
        </>
    );
}

const mapDispatchToProps = {
    loginRequest,
};

//export default Login;
export default connect(null, mapDispatchToProps)(Login);