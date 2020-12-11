import React from 'react';
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'


const Login = () =>(
    <section    className="login">
    <div className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form" >
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button__index">Iniciar sesión</button>
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
        <p className="logn__container--register">No tienes ninguna cuenta <a href="Registro.html">REGISTRATE</a></p>
    </div>
</section>
);

export default Login;