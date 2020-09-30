import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return(
            <section className="section-contact-me">
                <div className="row">
                    <div className="col span-1-of-2 contact-box">
                        <div className="contact-text">
                            <h2>Get in touch!</h2>
                                <p>If you're looking for an eager, enthusiastic Web Developer to bring extra value to your company, I'm your guy!
                                <br /> Reach out via <Link to="mailto:hello@clarkglewis.com" className="contactme">email</Link> or <Link to="http://www.linkedin.com/clark-lewis" className="contactme">LinkedIn</Link>. I look forward to working with you!</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;