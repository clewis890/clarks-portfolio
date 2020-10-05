import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../components/Contact';

class Projects extends React.Component { 
    render() {
        return (
            <div>
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
                    </body>
                    <Footer />
            </div>  
        )
    };
}

export default Projects;