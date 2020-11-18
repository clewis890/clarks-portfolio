import React from 'react';
import ContactForm from '../components/ContactForm';

import "../style/index.css";
import "../style/responsive.css";


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.onClick = this.onClick.bind(this);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    onClick() {
        window.location.href = 'mailto:hello@clarkglewis.com';
    }

    render() {
        return(
            <div>
            <section className="section-contact-me">
                <div className="row">
                    <div className="col span-1-of-2 contact-box">
                        <div className="contact-text">
                            <h2>Get in touch!</h2>
                                <p>I'm eager, enthusiastic, and hard working. I'm actively looking for my first position as a Web Developer, and am always looking for projects for my portfolio! Feel free to reach out if you need help building a site or even if you just have a question!
                                <br /> Reach out via email or LinkedIn. I look forward to working with you! <br />
                                <button className="btn" id="button" onClick={this.handleClick}>{this.state.isToggleOn ? 'CONTACT ME' : 'HELLO@CLARKGLEWIS.COM' }</button></p>
                                <a href="mailto:clewis890@gmail.com" target="_blank" rel="noopener noreferrer">Contact Me!</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <ContactForm />     */}
        </div>
        );
    }
}

export default Contact;
