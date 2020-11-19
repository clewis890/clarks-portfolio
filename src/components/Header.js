import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';
import "../style/responsive.css";
import "../style/index.css";

class Header extends Component {
    render() {        
        return (
            <header className="header-2">
                    <div className="socialmedia" >
                        <ul className="social-icons">
                            <li className="clark-social">
                                <a href="http://www.linkedin.com/in/clark-lewis">
                                <ion-icon name="logo-linkedin" className="icon-small"></ion-icon>
                                </a>
                            </li>
                            <li className="clark-social">
                                <a href="http://www.github.com/clewis890">
                                <ion-icon name="logo-github" className="icon-small"></ion-icon>
                                </a>
                            </li>
                            <li className="clark-social">
                                <a href="mailto:hello@clarkglewis.com">
                                    <ion-icon name="mail-sharp" className="icon-small"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hero-text-box">
                        <p className="header-text">Hi, my name is Clark<br /></p>
                        <p className="header-text"> I'm a Web Developer</p>
                    </div>
                        <div className="navigation">
                           <NavBar />
                        </div>
                </header>
        );
    }
}

export default withRouter(Header);
