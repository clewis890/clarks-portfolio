import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Segment } from 'semantic-ui-react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

import profilepic from '../portfoliopics/profpic.jpg';

class Home extends React.Component {
    render() {
        return (
        <body>
<div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'darkGrey', margin: '0'}}>
   <div className="container">
        <h1 style={{textPosition: 'center'}}className="display-4">Clark Lewis</h1>
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
    <div className="ui vertical segment" style={{textPosition: 'center', width: '40rem'}}>
        
            <h4>My name is Clark Lewis and I am a programmer! This is my first site. 
                I am looking for my first professional opportunity as a Web Developer.
                I work with the Front End stack, mainly HTML, CSS,  and JavaScript.
                I also work with the Framework React JS and Redux.
            </h4>
            <p className="mystory">I have had interest in getting into programming for the last 3 years now. I have been in a career that I just wasn't passionate about, I saw myself at a dead-end. So at the end of 2019 I decided to give programming a try. I started with a free course and after a few months I decided to get a few more advanced courses to jump-start my learning. My short-term goal is to take on a Web Developer or Front-End Developer position to develop myself as a programmer and build up my skillset.</p>
        </div>
        <div className="container-sm">
            <img className="profilepic" src={profilepic} alt="Me on a boat" />
        </div>
        <div>

        </div>
    <footer>
        <Link to="https://www.linkedin.com/in/clark-lewis" className="link">Connect with me on LinkedIn</Link><br />
        <Link to="mailto:hello@clarkglewis.com" className="link">hello@clarkglewis.com</Link>
    </footer>
        </body>
        )
    };
}

export default Home;