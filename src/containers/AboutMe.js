import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AwesomeButton } from 'react-awesome-button';
import '../style/AboutMe.css';

class AboutMe extends React.Component { 
    render() {
        return (
<body style={{textAlign: 'center'}}>
    <header style={{marginBottom: '0'}}>
<div className="jumbotron jumbotron-fluid" style={{textAlign: 'left'}}>
   <div className="container">
        <h1 className="display-4">Clark Lewis</h1>
        <h3 className="jumbo-description">I'm a Programmer</h3>
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
</header>
<div className="ui grid container">
    <div className="four wide column">
    <h2 className="aboutme">I'm learning to code! My long-term goals include:</h2>
    <div id="goals">
        <ul className="aboutme">
          <li>Become a world-class programmer</li>
          <li>Create ground-breaking technology</li>
          <li>Help the world become a better place</li>
            <li></li>
        </ul>
        </div>  
    </div>
    <div className="four wide column">
    <h2 className="aboutme">Courses</h2>
        <div id="courses">
        <ul className="aboutme">
            <li>Udemy</li>
            <li>Codecademy</li>
        </ul>    
    </div>
</div>
<div className="four wide column">
    <h2 className="aboutme">Languages, Frameworks, & Skills</h2>
        <div id="languages">
            <ul className="aboutme">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Redux</li>
                <li>APIs</li>
            </ul>    
        </div>
</div>
<div className="four wide column">
    <h2 className="aboutme">My Hobbies Include:</h2>
        <ul className="aboutme">
            <li>Coding</li>
            <li>Photography</li>
            <li>Drinking Yerba Mate</li>
            <li>Traveling</li>
            <li>Hiking</li>
            <li>Fishing</li>
        </ul>    
</div>
</div>



    <footer>
        <Link to="https://www.linkedin.com/in/clark-lewis" className="link">Connect with me on LinkedIn</Link><br />
        <Link to="mailto:hello@clarkglewis.com" className="link">hello@clarkglewis.com</Link>
    </footer>
</body>
  
        )
    };
}

export default AboutMe;