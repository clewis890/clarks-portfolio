import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Divider } from 'semantic-ui-react';
import { AwesomeButton } from 'react-awesome-button';
import '../style/AboutMe.css';
import columbiariver from '../portfoliopics/columbiariver.jpg';
import boats from '../portfoliopics/boats.jpg';

var jumboStyle = {
    width: '100%',
    height: 'auto',
    position: 'fixed',
    backgroundPosition: 'bottom',
    backgroundImage: `url(${boats})`,
    textAlign: 'left',
};

var backgroundStyle = {
    marginTop: '-28px',
    height: '1000px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    top: '297px',
    left: '0',
    marginLeft: '0',
    backgroundImage: `url(${columbiariver})`
};

class AboutMe extends React.Component { 
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid" style={ jumboStyle }>
                <div id="header" >
                    <h1 className="display-4">Clark Lewis</h1>
                    <h2 className="jumbo-description">I'm a Programmer</h2>
                        <Link exact to="./" className="heroButton">
                        <AwesomeButton size="medium" type="secondary">
                        Home
                        </AwesomeButton>
                        </Link>
                        <Link exact to="./photography" className="heroButton">
                        <AwesomeButton size="medium" type="secondary">
                        Photography
                        </AwesomeButton>
                        </Link>
                </div>
            </div>
                <body className="aboutme" style={ backgroundStyle }>
                    <div className="container" id="about">
                    <div id="aboutme" className="ui four column doubling stackable grid container">
                        <div className="column">
	                        <b>My goals</b>
                                <Divider />
                                <p>Become a world-class programmer</p>
                                <p>Make the world a better place</p>
	                            <p>Create ground-breaking technology</p>
                        </div>
                        <div className="column">
                            <b>Courses</b>
                            <Divider />
                                <p>Udemy</p>
                                <p>Codecademy</p>
                        </div>
                        <div className="column">
	                        <b>Languages, Frameworks, & Skills</b>
                            <Divider />
                                <p>HTML5</p>
	                            <p>CSS3</p>
	                            <p>JavaScript</p>
	                            <p>React JS</p>
	                            <p>Redux</p>
	                            <p>JSON</p>
    	                        <p>Git & GitHub</p>
                        </div>
                        <div className="column">
	                        <b>My Hobbies Include</b>
                            <Divider />
                                <p>Photography</p>  
                                <p>Drinking Yerba Mate</p>
                                <p>Traveling</p>
                                <p>Co-host on a podcast about Yerba Mate, <a href="http://www.mateguys.com" target="_blank" rel="noopener noreferrer">The Mate Guys</a></p>
                                <p>Hiking</p>
                                <p>Fishing</p>
                        </div>
                    </div>
                    </div>
                </body>
                <footer>
                    <div id="footer">
                        <a href="http://www.linkedin.com/in/clark-lewis" target="_blank" rel="noopener noreferrer" className="link">Connect with me on LinkedIn</a><br />
                        <a href="mailto:hello@clarkglewis.com" className="link">hello@clarkglewis.com</a>
                    </div>
                        <p className="copyright">&copy; Copyright 2020 | Clark Lewis</p>
                </footer>
            </div>  
        )
    };
}

export default AboutMe;