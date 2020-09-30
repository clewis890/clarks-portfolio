import React from 'react';

import '../components/NavBar';

import clark from '../portfoliopics/profpic.jpg';

class Home extends React.Component {
       render() {
       return (
            <div>
                <body>
                    <section className="section-aboutme">
                        <div classname="row">
                            <div className=" col span-1-of-2 author-box">
                                <figure className="author-pic">
                                    <img src={clark} alt="clark" />
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-2 intro-box">
                                <h2 className="intro-header">Hey there!</h2>
                                    <p className="intro-text">My name is Clark Lewis and I am from the Pacific Northwest. A majority of my working life has been customer-oriented. I am a self-taught programmer. I work with the Front End stack, mainly HTML, CSS, and JavaScript, as well as work with the Framework React JS and Redux.
                                    I have been coding since the end of 2019 and I love everything about it! I am actively looking for my first professional role as a Web Developer.
                                    </p>
                            </div>
                        </div>
                    </section>
                </body>
            </div>
        )
    };
}

export default Home;