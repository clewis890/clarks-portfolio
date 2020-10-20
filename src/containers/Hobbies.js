import React, { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import PhotoGallery from '../components/PhotoGallery';
import yerbamate from '../portfoliopics/chimarrao.jpg';
import "../style/index.css";
import "../style/responsive.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Header = React.lazy(() => import('../components/Header'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

class Hobbies extends React.Component {
    render() {
        return (
            <div>
            <Suspense fallback={<LoadingSpinner />}>
            <Header />
            <body>
                <section className="flex-container">
                    <div className="row">
                        <div className="col span-1-of-2 photo-box">
                            <h2 className="intro-header">Photography</h2>
                                <div className="intro-text">
                                    <p>I enjoy taking pictures wherever I go. I take my pictures with the iPhone XR. From time to time I will be rotating out the pictures I have on display here. Feel free to click or swipe on the pictures!
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
                            <p>On my first trip to Brazil in 2010, I was introduced to yerba mate (Chimarrao). Safe to say, I got hooked. The culture that surrounds Yerba Mate is very intriguing to me and I am constantly informing myself with the latest news in the mate industry A friend of mine and I even started a the only podcast about Yerba Mate in the English language. <a href="http://www.mateguys.com" className="mateguys-link">The Mate Guys Podcast</a></p>
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

export default Hobbies;
