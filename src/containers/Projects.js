import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import "../style/index.css";
import "../style/responsive.css";

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
                                    <p className="project-text">Coming very soon!
                                    <br /><ion-icon name="happy-outline" className="ion-icon"></ion-icon>
                                    </p>
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
