import React, { Suspense } from 'react';
import '../components/NavBar';
import "../style/index.css";
import "../style/responsive.css";
import clark from '../portfoliopics/profpic.jpg';
import LoadingSpinner from '../components/LoadingSpinner';

import Hobbies from './Hobbies';
import Projects from './Projects';

const Header = React.lazy(() => import('../components/Header'));
const Footer = React.lazy(() => import('../components/Footer'));



class Home extends React.Component {
    
        render() {
            return (
                <div>
                <Suspense fallback={<LoadingSpinner />}>
                <body>
                    <Header />
                    <section className="section-aboutme">
                        <div className="homepagecontainer">
                        <div className="row">
                            <div className="author-box">
                                <figure className="author-pic">
                                    <img src={clark} alt="clark" />
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="intro-box">
                                <h2 className="intro-header">Hey there!</h2>
                                    <p className="intro-text">My name is Clark Lewis and I was raised in the Pacific Northwest. I enjoy the outdoors, pizza, and actively re-watching TV series I've already finished a dozen times. Most of my career path has been customer-oriented. I started on the self-taught Web Developer path at the end of 2019, starting on courses in Codecademy, and then moving on to Udemy.
                                    I am actively looking for my first professional role as a Web Developer.
                                    </p>
                                    <div className="skills">
                                    <h3 className="skilltitle">Here are the languages, frameworks and technologies I use:</h3>
                                    <ul className="skillslist">
                                        <li>HTML5 <ion-icon name="logo-html5" className="icon-medium"></ion-icon></li>
                                        <li>CSS3<ion-icon name="logo-css3" className="icon-medium"></ion-icon></li>
                                        <li>JavaScript<ion-icon name="logo-javascript" className="icon-medium"></ion-icon></li>
                                        <li>React js<ion-icon name="logo-react" className="icon-medium"></ion-icon></li>
                                        <li>Next js</li>
                                        <li>Git / GitHub<ion-icon name="git-branch-outline" className="icon-medium"></ion-icon><ion-icon name="logo-github" className="icon-small"></ion-icon></li>
                                        <li>Heroku</li>
                                    </ul>
                                    </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <Projects />
                    <Hobbies />
                    <Footer />
                </body>
                </Suspense>
                </div>
            );
        }
}

export default Home;
