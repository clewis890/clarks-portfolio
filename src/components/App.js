import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../style/index.css';
import "../style/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import history from '../history';
import Home from '../containers/Home';
import Hobbies from '../containers/Hobbies';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';

class App extends React.Component {
    render() {
        return (   
            <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Hobbies' component={Hobbies} />
                    <Route path='/Projects' component={Projects} />
                    <Route path='/Contact' component={Contact} />
               </Switch>
            </Router>
            </div>
            );
        }
    }


export default App;
