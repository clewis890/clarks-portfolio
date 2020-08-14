import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Segment } from 'semantic-ui-react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
//import "assets/vendor/nucleo/css/nucleo.css";
//import "assets/vendor/font-awesome/css/font-awesome.min.css";
//import "assets/scss/argon-design-system-react.scss";
import boats from '../portfoliopics/boats.jpg'
import columbiariver from '../portfoliopics/columbiariver.jpg';
import '../style/Home.css';

var jumboStyle = {
    margin: '0',
    width: '100%',
    height: '100%',
    backgroundPosition: 'bottom',
    backgroundImage: `url(${boats})`
}

var backgroundStyle = {
    width: '100%',
    height: '1000px',
    backgroundPosition: 'center',
    display: 'stretch',
    backgroundImage: `url(${columbiariver})`
};

var introStyle = {
    position: 'absolute', 
    textAlign: 'center', 
    marginLeft: '100px', 
    marginTop: '20px', 
    width: '40rem'
}

class Home extends React.Component {
    render() {
        return (
<div>
<div className="jumbotron jumbotron-fluid" style={ jumboStyle }>
   <div className="container">
        <h1 className="display-4">Clark Lewis</h1>
            <h4>I'm a Programmer</h4>
                <Link exact to="./" className="heroButton">
                <AwesomeButton size="medium" type="secondary" className="aws-btn">
                    Home
                </AwesomeButton>
                </Link>
                <Link exact to="/about-me" className="heroButton">
                <AwesomeButton size="medium" type="secondary" className="aws-btn" style={{margin: '8px'}}>
                    About Me
                </AwesomeButton>
                </Link>
                <Link exact to="./photography" className="heroButton">
                <AwesomeButton size="medium" type="secondary" className="aws-btn">
                    Photography
                </AwesomeButton>
                </Link>    
    </div>
</div>
<body style={ backgroundStyle }>
    <div className="ui horizontal segment" id="introduction" style={ introStyle }>
        <h4 className="introduction"><strong>Welcome to my website!</strong></h4>
            <p className="mystory">My name is Clark Lewis and I am a programmer! This is my first site. 
                I am looking for my first professional opportunity as a Web Developer.
                I work with the Front End stack, mainly HTML, CSS,  and JavaScript, as well as work with the Framework React JS and Redux.
            </p>
            <Divider />
            <p className="mystory">I have had interest in getting into programming for the last 3 years now. I have been in a career that I just wasn't passionate about, I saw myself at a dead-end. So at the end of 2019 I decided to give programming a try. I started with a free course and after a few months I decided to get a few more advanced courses to jump-start my learning. My short-term goal is to take on a Web Developer or Front-End Developer position to develop myself as a programmer and build up my skillset.</p>
        </div>
</body>
    <footer>
        <div id="footer">
        <Link to="https://www.linkedin.com/in/clark-lewis" className="link">Connect with me on LinkedIn</Link><br />
        <Link to="mailto:hello@clarkglewis.com" className="link">hello@clarkglewis.com</Link>
        </div>
        <p className="copyright">&copy; Copyright 2020 | Clark Lewis</p>
    </footer>
        </div>
        )
    };
}

export default Home;