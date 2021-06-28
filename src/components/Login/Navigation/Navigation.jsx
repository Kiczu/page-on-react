import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import "./_navigation.scss";

const Navigation = () => {
        return(
            <>
                <nav className="navigation">
                    <ul className="navigation__account">
                        <li><NavLink className="menu__link" to="/login">Zaloguj</NavLink></li>
                        <li><NavLink id="create__account" className="menu__link" to="registration">Załóż konto</NavLink></li>
                    </ul>
                    <ul className="navigation__main">
                        <li><Link activeClass="active" className="menu__link" to="hero" spy={true} duration={500}>Start</Link></li>
                        <li><Link activeClass="active" className="menu__link" to="wgo" spy={true} duration={500}>O co chodzi?</Link></li>
                        <li><Link activeClass="active" className="menu__link" to="
                        aboutUs" spy={true} duration={500}>O nas</Link></li>
                        <li><Link activeClass="active" className="menu__link" to="help" spy={true} duration={500}>Fundacje i organizacja</Link></li>
                        <li><Link activeClass="active" className="menu__link" to="contact" spy={true} duration={500}>Kontakt</Link></li>
                    </ul>
                </nav>
            </>
        )
    }

export default Navigation;