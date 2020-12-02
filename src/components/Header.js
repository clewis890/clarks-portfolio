import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar';
import SocialMedia from './SocialMedia';
import "../style/responsive.css";
import "../style/index.css";

class Header extends Component {
    render() {        
        return (
            <header className="header-2">
                    <SocialMedia />
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
