import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = () => (
    <section  className="login">
        <div className="login__container">
                <h2>Registro</h2>
                <form className="login__container--form">
                    <input className="input" type="text" placeholder="Nombre" />
                    <input className="input" type="text" placeholder="Correo" />
                    <input className="input" type="password" placeholder="Contraseña" />
                    <input className="input" type="password" placeholder="Confirmar Contraseña" />
                    <button className="button__index">Registro</button>
                </form>

                <section className="login__container--social-media" src='#'>
                </section>
                <p className='login_login'>
                    <Link to='/login'>
                        Iniciar sesión
                    </Link>
                </p>
        </div>
    </section>
);

export default Register;
