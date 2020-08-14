import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Divider, Segment } from 'semantic-ui-react';
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
}

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
    backgroundImage: `url(${columbiariver})`
};

var introStyle = {
    position: 'absolute', 
    textAlign: 'center', 
    marginLeft: '20px', 
    marginTop: '20px', 
    width: '40rem',
    flexShrink: '1'
}


class AboutMe extends React.Component { 
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid" style={ jumboStyle }>
                <div className="container">
                    <h1 className="display-4">Clark Lewis</h1>
                    <h2 className="jumbo-description">I'm a Programmer</h2>
                        <Link exact to="./" className="heroButton">
                        <AwesomeButton size="medium" type="secondary">
                        Home
                        </AwesomeButton>
            </Link>
            <Link exact to="/about-me" className="heroAwesomeButton">
            <AwesomeButton size="medium" type="secondary">
            About Me
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
<div className="ui segment" id="textcontainer" style = { introStyle }>
    <h2 className="aboutme">I'm new to the programming world! My long-term goals include:</h2>
        <div className="aboutme">
        <Divider />
            <p>Become a world-class programmer</p>
            <p>Create ground-breaking technology</p>
            <p>Help the world become a better place</p>
        </div>
    <h2 className="aboutme">Courses</h2>
    <Divider />
    <div className="aboutme">
        <p>Udemy</p>
        <p>Codecademy</p>
    </div>    
<h2 className="aboutme">Languages, Frameworks, & Skills</h2>
<Divider />
    <div className="aboutme">
        <p>HTML5</p>
        <p>CSS3</p>
        <p>JavaScript</p>
        <p>React JS</p>
        <p>Redux</p>
        <p>APIs</p>
    </div>    
<h2 className="aboutme">My Hobbies Include:</h2>
<Divider />
    <div className="aboutme">
        <p>Coding</p>
        <p>Photography</p>
        <p>Drinking Yerba Mate</p>
        <p>Traveling</p>
        <p>Hiking</p>
        <p>Fishing</p>
    </div>
</div>

<div class="container">

  <div class="row">
    <div class="one column">One</div>
    <div class="eleven columns">Eleven</div>
  </div>

 
  <div class="row">
    <div class="two columns">Two</div>
    <div class="ten columns">Ten</div>
  </div>

  <div class="row">
    <div class="one-third column">1/3</div>
    <div class="two-thirds column">2/3</div>
  </div>
  <div class="row">
    <div class="one-half column">1/2</div>
    <div class="one-half column">1/2</div>
  </div>

</div>

<Divider />
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

export default AboutMe;