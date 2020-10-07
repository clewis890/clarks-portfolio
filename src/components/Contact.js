import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/index.css";

class Contact extends React.Component {
    render() {
        return(
            <section className="section-contact-me">
                <div className="row">
                    <div className="col span-1-of-2 contact-box">
                        <div className="contact-text">
                            <h2>Get in touch!</h2>
                                <p>If you're looking for an eager, enthusiastic Web Developer to bring extra value to your company, I'm your guy!
                                <br /> Reach out via <NavLink to="mailto:hello@clarkglewis.com" className="contactme">email</NavLink> or <NavLink to="http://www.linkedin.com/in/clark-lewis" className="contactme">LinkedIn</NavLink>. I look forward to working with you!</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;
