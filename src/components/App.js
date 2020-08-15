import React from 'react';
import { Router, Route, Switch } from 'react-router';
import "../style/App.css";
import AboutMe from '../containers/AboutMe';
import Home from '../containers/Home';
import Photography from '../containers/Photography';
import history from '../history';
import 'react-awesome-button/dist/themes/theme-blue.css';
//import "assets/vendor/nucleo/css/nucleo.css";
//import "assets/vendor/font-awesome/css/font-awesome.min.css";
//import "assets/scss/argon-design-system-react.scss";

class App extends React.Component {

    render() {
    return (
        <div className="App">
            <Router history={history}>
               <Switch>
                   <Route path ="/" exact component={Home} />
                   <Route path ="/about-me/" exact component={AboutMe} />
                    <Route path ="/photography" exact component={Photography} />
               </Switch>
               </Router>
               </div>
            );
        }
}


export default App;