import React from 'react';
import { Router, Route, Switch } from 'react-router';

import '../style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import history from '../history';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';
import Home from '../containers/Home';
import Hobbies from '../containers/Hobbies';
import Projects from '../containers/Projects';




class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/hobbies' component={Hobbies} />
                    <Route path='/projects' component={Projects} />
               </Switch>
               <Contact />
               <Footer />
            </Router>
            );
        }
}


export default App;
