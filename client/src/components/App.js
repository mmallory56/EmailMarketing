import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import 'materialize-css/dist/css/materialize.min.css'
import {connect} from 'react-redux'
import * as actions from '../actions';
import Landing from './Landing'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends React.Component {
    componentDidMount()
    {
        console.log(this.props.fetchUser());
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header ></Header>
                    <Route exact={true} path="/" component={Landing} />
                    <Route exact={true} path="/Dashboard" component={Dashboard} />
                    <Route exact path="/surveys" component={Dashboard}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default connect(null,actions)(App);