import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/index.css";
import "../style/responsive.css";

class Contact extends React.Component {
    render() {
        return(
            <section className="section-contact-me">
                <div className="row">
                    <div className="col span-1-of-2 contact-box">
                        <div className="contact-text">
                            <h2>Get in touch!</h2>
                                <p>I'm eager, enthusiastic, and hard working. I'm actively looking for my first position as a Web Developer, and am always looking for projects for my portfolio! Feel free to reach out if you need help building a site or even if you just have a question!
                                <br /> Reach out via email or LinkedIn. I look forward to working with you! <br /><button className="btn"><a href="mailto:clewis890@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me!</a></button></p>
                                
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
