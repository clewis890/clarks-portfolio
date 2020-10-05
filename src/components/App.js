import React from 'react';
import { Router, Route, Switch } from 'react-router';

import '../style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Loading from "./Loading";
import history from '../history';
// import Footer from './Footer';
// import Header from './Header';
// import Contact from './Contact';

class DynamicImport extends React.Component {
    state = {
        component: null
    }

    componentDidMount() {
        this.props.load()
            .then((component) => {
                this.setState({ 
                    component: component.default ? component.default : component
                })
            })
        }
render() {
    return this.props.children(this.state.component)
    }
}

const Home = (props) => (
    <DynamicImport load={() => import('../containers/Home')}>
        {(Component) => Component === null ? <Loading /> : <Component {...props} />}
    </DynamicImport>
)
const Hobbies = (props) => (
    <DynamicImport load={() => import('../containers/Hobbies')}>
        {(Component) => Component === null ? <Loading /> : <Component {...props} />}
    </DynamicImport>
)
const Projects = (props) => (
    <DynamicImport load={() => import('../containers/Projects')}>
        {(Component) => Component === null ? <Loading /> : <Component {...props} />}
    </DynamicImport>
)




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
