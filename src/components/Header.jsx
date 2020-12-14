import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames'
import gravatar from '../util/gravatar.js';
import {logoutRequest} from '../actions';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons8-usuario-masculino-en-círculo-50.png'
//import { object } from 'prop-types';

const Header = props => {
    const { user, isLogin, isRegister } = props;
    const hasUser = Object.keys(user).length > 0;
    const handleLogout = () => {
        props.logoutRequest({});
    }
    const headerClass = classNames('header', {
        isLogin,
        isRegister,
    });
    return(
        <header className={headerClass}>
        <Link to='/'>
            <img className="header__img" src={logo} alt="Platzi video Logo" />
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ?
                    <img
                    src={gravatar(user.email)}
                    alt={user.email}
                    /> :
                        <img
                            src={userIcon}
                            alt="User"
                        />
                }
                <p>Perfil</p>
            </div>
            <ul>
                {hasUser ?
                    <li><a href="/">{user.name}</a></li>
                    : null
                }
                {hasUser ?
                    <li>
                        <a href='#logout' onClick={handleLogout}>
                            Cerrar sesión
                        </a>
                    </li> :
                        <li>
                            <Link to='/login'>
                                Iniciar Sesión
                            </Link>
                        </li>
                }
            </ul>
        </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
};

Header.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func.isRequired,
};


//export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);