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
                        <div className="homepagecontainer">
                        <div className="row">
                            <div className=" col span-1-of-2 author-box">
                                <figure className="author-pic">
                                    <img src={clark} alt="clark" />
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-2 intro-box">
                                <h2 className="intro-header">Hey there!</h2>
                                    <p className="intro-text">My name is Clark Lewis and I was raised in the Pacific Northwest. I enjoy the outdoors, pizza, and actively re-watching TV series I've already finished a dozen times. Most of my career path has been customer-oriented. I decided to hit the brakes and find a different path. So, I took on learning web development at the end of 2019 and I haven't stopped since.
                                    I am actively looking for my first professional role as a Web Developer.
                                    </p>
                                    <div className="skills">
                                    <h3 className="skilltitle">Here are the languages, frameworks and technologies I use:</h3>
                                    <ul className="skillslist">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript</li>
                                        <li>React js</li>
                                        <li>Next js</li>
                                        <li>Git / GitHub</li>
                                        <li>Heroku</li>
                                    </ul>
                                    </div>
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

export default Home;
