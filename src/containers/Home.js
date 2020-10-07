import React, { Suspense } from 'react';
import '../components/NavBar';
import "../style/index.css";
import "../style/responsive.css";
import clark from '../portfoliopics/profpic.jpg';
import LoadingSpinner from '../components/LoadingSpinner';

const Header = React.lazy(() => import('../components/Header'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

class Home extends React.Component {
        render() {
            return (
                <div>
                <Suspense fallback={<LoadingSpinner />}>
                <body>
                    <Header />
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
                                    <p className="intro-text">My name is Clark Lewis and I am from the Pacific Northwest. I enjoy the outdoors, pizza, and actively re-watch TV series I've already finished a dozen times. A majority of my working life has been customer-oriented. I am a self-taught programmer. I work with the Front End stack, mainly HTML, CSS, and JavaScript, as well as work with the Framework React JS and Redux.
                                    I have been coding since the end of 2019 and I love everything about it! I am actively looking for my first professional role as a Web Developer.
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

export default Home;
