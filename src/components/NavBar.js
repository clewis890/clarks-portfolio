import React, { Component, useState, useRef } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';



class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            hideOrShowHamburgerDropDown: 'nav'
        };
    }

    handleClick() {
        this.setState({open: !this.state.open});
    }

    displayHamburgerMenu() {
        return (
            <div>
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={16}
                    height={13}
                    strokeWidth={1}
                    rotate={0}
                    color='#fff'
                    borderRadius={0}
                    animationDuration={.7}
                ></HamburgerMenu>
            </div>
        );
    }

    displayNavBar() {
        return (
            <ul className="main-nav">
                <li><Link exact to="/" className="heroButton nav-link">Home</Link></li>
                <li><Link exact to="/hobbies" className="heroButton nav-link">Hobbies</Link></li>
                <li><Link exact to="/projects" className="heroButton nav-link">Projects</Link></li>
                <li><Link exact to="mailto:hello@clarkglewis.com" className="heroButton nav-link">Contact</Link></li>
            </ul>
        )
    }

    displayMobileMenu() {
        return (
            <ul className="hamburgerDropDown">
                <li><Link exact to="/" className="heroButton mobile-link">Home</Link></li>
                <li><Link exact to="/hobbies" className="heroButton mobile-link">Hobbies</Link></li>
                <li><Link exact to="/projects" className="heroButton mobile-link">Projects</Link></li>
                <li><Link exact to="mailto:hello@clarkglewis.com" className="heroButton mobile-link">Contact</Link></li>
            </ul>
        )
    }

    render() {
        return (
            <div className="navbar">
                { this.state.open ? this.displayMobileMenu() : null }
                { window.innerWidth > 1100 ? this.displayNavBar() : this.displayHamburgerMenu()}
            </div>
        )
    }
};

export default NavBar;