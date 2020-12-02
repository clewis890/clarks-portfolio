import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import "../style/index.css";
import "../style/responsive.css";
import weddingsite from '../portfoliopics/weddingwebsite.png';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';

// const Header = React.lazy(() => import('../components/Header'));
// const Contact = React.lazy(() => import('../components/Contact'));
// const Footer = React.lazy(() => import('../components/Footer'));

class Projects extends React.Component { 

    render() {
        return (
            <div>
                <SocialMedia />
                    <section className="section-projects">
                            <div className="row">
                                <div className="first-box">
                                    <h2 className="project-header">Projects</h2>
                                    <div className="firstproject">
                                        <h3 className="project-title">Wedding Website</h3>
                                            <p className="project-text">This is a site I built for my wedding. I decided to take on this project as a way to try out new things and challenge myself. I implemented Formspree forms for form validation,  Disqus Comments for the comment section, and a real-time countdown timer to the time of the wedding.</p>
                                            <br />
                                            <a href="http://antoniaeclark.com" className="weddinglink" >Antonia and Clark's wedding</a>
                                            <img src={weddingsite} alt="wedding website screenshot" className="projectpicture" />
                                    </div>
                                </div>
                            </div>
                    </section>
                    {/* <Footer /> */}
            </div>  
        );
    }
}

export default Projects;
