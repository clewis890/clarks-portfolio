import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
            <div className="row row-footer">
                <div className="col span-1-of-2 footer-box">
                    <ul className="footer-nav">
                        <li className="footer-item"><Link exact to="/">Home</Link></li>
                        <li className="footer-item"><Link exact to="/hobbies">Hobbies</Link></li>
                        <li className="footer-item"><Link exact to="/projects">Projects</Link></li>
                        <li className="footer-item"><Link to="mailto:hello@clarkglewis.com">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row copyright">
                <div className="col span-1-of-2 copyright-box">
                    <p className="copyright-text">
                    Copyright &copy; 2020 by Clark Lewis
                    </p>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;