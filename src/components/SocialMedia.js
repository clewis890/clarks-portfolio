import React, { Component } from 'react';
import "../style/responsive.css";
import "../style/index.css";

class SocialMedia extends Component {
render() {
    return (
                    <div className="socialmedia" >
                        <ul className="social-icons">
                            <li className="clark-social">
                                <a href="http://www.linkedin.com/in/clark-lewis">
                                <ion-icon name="logo-linkedin" className="icon-small"></ion-icon>
                                </a>
                            </li>
                            <li className="clark-social">
                                <a href="http://www.github.com/clewis890">
                                <ion-icon name="logo-github" className="icon-small"></ion-icon>
                                </a>
                            </li>
                            <li className="clark-social">
                                <a href="mailto:hello@clarkglewis.com">
                                    <ion-icon name="mail-sharp" className="icon-small"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    )
                }
}

export default SocialMedia;