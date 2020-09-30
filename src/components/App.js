import React from 'react';
import { Router, Route, Switch } from 'react-router';

import '../style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from '../containers/Projects';
import Home from '../containers/Home';
import Hobbies from '../containers/Hobbies';
import history from '../history';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';

class App extends React.Component {

    render() {
    return (
        <Router history={history}>
        <div className="App">
            <Header />
               <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/hobbies' component={Hobbies} />
               </Switch>
               <Contact />
               <Footer />
               </div>
               </Router>
            );
        }
}


export default App;