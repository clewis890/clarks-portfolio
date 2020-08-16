import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Photography.css'
import { AwesomeButton } from 'react-awesome-button';

import island from '../portfoliopics/island.jpg';
import boatsandhills from '../portfoliopics/boatsandhills.jpg';
import bigcity from '../portfoliopics/bigcity.jpg';
import ocean from '../portfoliopics/ocean.jpg';
import tropical from '../portfoliopics/tropical.jpg';
import ldstemple from '../portfoliopics/ldstemple.jpg';
import sunset from '../portfoliopics/sunset.jpg';
import desert from '../portfoliopics/desert.jpg';
import redrocks from '../portfoliopics/redrocks.jpg';
import boats from '../portfoliopics/boats.jpg';

var jumboStyle = {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    backgroundPosition: 'bottom',
    backgroundImage: `url(${boats})`,
    textAlign: 'left',
}

class Photography extends React.Component{
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid" style={ jumboStyle }>
                 <div className="container">
                    <h1 className="display-4">Clark Lewis</h1>
                    <h2>I'm a Programmer</h2>
                        <Link exact to="/" className="heroButton">
                        <AwesomeButton  size="medium" type="secondary" className="aws-btn">
                        Home
                        </AwesomeButton>
                        </Link>
                        <Link exact to="./about-me" className="heroButton">
                        <AwesomeButton size="medium" type="secondary" className="aws-btn">
                        About Me
                        </AwesomeButton>
                        </Link>
                </div>
                </div>
            <body>
                <div className="photography">
                    <h2><strong>Photography</strong></h2>
                    <h4 id="imgheader">I enjoy taking pictures in my free time. All these pictures are taken with the iPhone XR. Enjoy!</h4>
                        <ul className="pics">
                            <li className="pics"><img src={island} alt="island" /></li>
                            <li className="pics"><img src={boatsandhills} alt="Ocean bay with boats"/></li>
                            <li className="pics"><img src={bigcity} alt="big city"/></li>
                            <li className="pics"><img src={ocean} alt="islands in the ocean"/></li>
                            <li className="pics"><img src={tropical} alt="sunset over mountains"/></li>
                            <li className="pics"><img src={ldstemple} alt="lds temple Porto Alegre Brazil"/></li>
                            <li className="pics"><img src={sunset} alt="Sunset over Porto Alegre Brazil"/></li>
                            <li className="pics"><img src={boats} alt="Bay with boats"/></li>
                            <li className="pics"><img src={desert} alt="desert"/></li>
                            <li className="pics"><img src={redrocks} alt="Red rocks behind house"/></li>
                        </ul>
                </div>
            </body>
            <footer>
                <div id="footer">
                    <a href="https://www.linkedin.com/in/clark-lewis" target="_blank" rel="noopener noreferrer" className="link">Connect with me on LinkedIn</a><br />
                    <a href="mailto:hello@clarkglewis.com" className="link">hello@clarkglewis.com</a>
                </div>
                    <p className="copyright">&copy; Copyright 2020 | Clark Lewis</p>
            </footer>          
           </div>
        )
    };
}

export default Photography;