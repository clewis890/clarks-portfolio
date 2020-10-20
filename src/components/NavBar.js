import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { NavLink, Link } from 'react-router-dom';

import "../style/index.css";
import "../style/responsive.css";

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            hideOrShowHamburgerDropDown: 'nav',
        };
    }

    handleClick() {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu() {
        return (
            <div className="burgers">
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={20}
                    height={13}
                    strokeWidth={1}
                    rotate={0}
                    color='#fff'
                    borderRadius={0}
                    animationDuration={0.5}
                ></HamburgerMenu>
            </div>
        );
    }

    displayDesktopHamburgerMenu() {
        return (
            <div className="burgers">
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={22}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='#fff'
                    borderRadius={0}
                    animationDuration={0.5}
                ></HamburgerMenu>
            </div>
        );
    }

    displayNavBar() {
        return (
            <ul className="main-nav">
                <li><NavLink exact to="/" className="heroButton nav-link">Home</NavLink></li>
                <li><NavLink exact to="/hobbies" className="heroButton nav-link">Hobbies</NavLink></li>
                <li><NavLink exact to="/projects" className="heroButton nav-link">Projects</NavLink></li>
                <li><Link exact to="mailto:hello@clarkglewis.com" className="heroButton nav-link">Contact</Link></li>
            </ul>
        )
    }

    displayMobileMenu() {
        return (
            <ul className="hamburgerDropDown">
                <li><NavLink exact to="/" className="heroButton mobile-link">Home</NavLink></li>
                <li><NavLink exact to="/hobbies" className="heroButton mobile-link">Hobbies</NavLink></li>
                <li><NavLink exact to="/projects" className="heroButton mobile-link">Projects</NavLink></li>
                <li><NavLink exact to="mailto:hello@clarkglewis.com" className="heroButton mobile-link">Contact</NavLink></li>
            </ul>
        )
    }

    render() {
        return (
            <div className="navbar">
                { this.state.open ? this.displayMobileMenu() : null }
                {/* { window.innerWidth > 1400 ? this.displayNavBar() : this.displayHamburgerMenu()} */}
                { window.innerWidth >  576 ? this.displayDesktopHamburgerMenu() : this.displayHamburgerMenu()}
            </div>
        )
    }
};

// Hamburger Menu credits go to Zac Willington

export default NavBar;
