import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../components/Contact';

import yerbamate from '../portfoliopics/chimarrao.jpg';

import "../style/index.css";


class Hobbies extends React.Component {
    
    render() {
        return (
            <div>
            <body>
                <Header />
                <section className="flex-container">
                    <div className="row">
                        <div className="col span-1-of-2 photo-box">
                            <h2 className="intro-header">Photography</h2>
                                <div className="intro-text">
                                    <p>I enjoy taking pictures wherever I go. I take my pictures with the iPhone XR. From time to time I will be rotating out the pictures I have on display here!
                                    </p>
                                </div>
                        </div>
                        <div className="col span-1-of-2 photo-box">
                       <PhotoGallery className="slick-gallery"/>
                        </div>
                    </div>
                </section>
                    
                <section className="flex-container">
                    <div className="row">
                        <div className="col span-1-of-2 yerba-box">
                            <figure className="yerba-pic"> 
                            <h2 className="yerba-header-1">Yerba Mate</h2> 
                                <img src={yerbamate} alt="yerbamate" />
                            </figure>
                        </div>
                        <div className="col span-1-of-2 yerba-box">
                        <h2 className="yerba-header-2">Yerba Mate</h2> 
                        <div className="yerba-text">
                            <p>On my first trip to Brazil in 2010, I was introduced to yerba mate (Chimarrao). Safe to say, I got hooked. The culture that surrounds Yerba Mate is very intriguing to me and last year, I got to travel to where it is grown and produced in Brazil. I even got to see the production side of it. A friend of mine and I even started a podcast about Yerba Mate (the only podcast about Yerba Mate in the English language!). <Link to="http://www.mateguys.com" className="mateguys-link">The Mate Guys Podcast</Link></p>
                        </div>
                        </div>
                    </div>
                </section>
               <Contact />
                </body>
                <Footer />
                </div>
            );
        }
    }

export default Hobbies;