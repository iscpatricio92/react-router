import React, {useState} from 'react';
import {connect} from 'react-redux';
import {registerRequest} from '../actions';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = props => {
    const [form, setValues] = useState ({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    });
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event =>{
        event.preventDefault();
        //console.log(form);
        props.registerRequest(form);
        props.history.push('/');
    }
    return(
        <>
        <Header isRegister/>
            <section  className="login">
                <div className="login__container">
                        <h2>Registro</h2>
                        <form className="login__container--form" onSubmit={handleSubmit}>
                            <input
                            name='name'
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleInput}
                            />
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
                            <input
                            name='confirmPassword'
                            className="input"
                            type="password"
                            placeholder="Confirmar Contraseña"
                            onChange={handleInput}
                            />
                            <button className="button__index" type='submit'>Registro</button>
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
        </>
    );
}
const mapDispatchToProps = {
    registerRequest,
};

//export default Register;
export default connect(null, mapDispatchToProps)(Register);
