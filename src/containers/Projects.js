import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import "../style/index.css";
import "../style/responsive.css";
import weddingsite from '../portfoliopics/weddingwebsite.png';


const Header = React.lazy(() => import('../components/Header'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

class Projects extends React.Component { 
    render() {
        return (
            <div>
                <Suspense fallback={<LoadingSpinner />}>
                <body>
                <Header />
                    <section className="section-projects">
                        <div classname="row">
                            </div>
                            <div className="row">
                                <div className="col-12 first-box">
                                    <h2 className="project-header">Here are a few projects I have completed</h2>
                                    <div className="firstproject">
                                    <h3 className="project-title">Wedding Website</h3>
                                    <p className="project-text">This is a site I built for my wedding. I decided to take on the project as a way to have users (friends and family) directly interact with the site, through filling out the RSVP form, viewing the photo album, and following the registry link, ensuring the user experience is ideal and that it is easy to navigate and use.</p>
                                    <br />
                                    <a href="http://antoniaeclark.com" className="weddinglink" >Antonia and Clark wedding</a>
                                    <img src={weddingsite} alt="wedding website screenshot" className="projectpicture" />
                                    
                                    </div>
                                </div>
                            </div>
                    </section>
                    <Contact />
                    <Footer />
                </body>
                </Suspense>
            </div>  
        );
    }
}

export default Projects;
