import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import "../style/index.css";
import "../style/responsive.css";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row row-footer">
                    <div className="col span-1-of-2 footer-box">
                        <ul className="footer-nav">
                            <li className="footer-item"><NavLink exact to="/">Home</NavLink></li>
                            <li className="footer-item"><NavLink exact to="/hobbies">Hobbies</NavLink></li>
                            <li className="footer-item"><NavLink exact to="/projects">Projects</NavLink></li>
                            <li className="footer-item"><Link to="mailto:hello@clarkglewis.com">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row row-copyright">
                    <div className="col span-1-of-2 copyright-box">
                        <p className="copyright-text">Copyright &copy; 2020 by Clark Lewis</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
