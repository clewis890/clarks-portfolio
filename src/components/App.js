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




class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/hobbies' component={Hobbies} />
                    <Route path='/projects' component={Projects} />
               </Switch>
            </Router>
            );
        }
}


export default App;
