import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import "../style/responsive.css";
import "../style/index.css";

class Header extends React.Component {
    render() {
        return (
            <header>
                    <div className="socialmedia" >
                        <ul className="social-icons">
                            <li className="clark-social">
                                <Link to="https://www.linkedin.com/in/clark-lewis">
                                <ion-icon name="logo-linkedin" className="icon-small"></ion-icon>
                                </Link>
                            </li>
                            <li className="clark-social">
                                <Link to="https://www.github.com/clewis890">
                                <ion-icon name="logo-github" className="icon-small"></ion-icon>
                                </Link>
                            </li>
                            <li className="clark-social">
                                <Link to="mailto:hello@clarkglewis.com">
                                    <ion-icon name="mail-sharp" className="icon-small"></ion-icon>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hero-text-box">
                        <p>Hi, my name is Clark
                            <br /></p>
                        <p>I'm a Web Developer</p>
                    </div>
                        <div className="navigation">
                           <NavBar />
                        </div>
                </header>
        )
    }
}

export default Header;
