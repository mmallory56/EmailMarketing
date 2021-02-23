import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return "Loading"
            case false:
                return <li><a href="/auth/google">Login with google</a></li>
            default:
                return ([

                    <li key="welcome1"><Link to={this.props.auth ? '/surveys' : "/"} href="/auth/google">Welcome</Link></li>,
                    <li key="payment1"><Payments ></Payments></li>,
                    <li key="23211" style={{margin: '0 10px'}}> Credits: {this.props.auth.credits}</li>,
                    <li key="logout1"><a href="/api/logout">Log Out</a></li>])
        }
    }
    render() {
        console.log(this.props.auth)
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Link to={this.props.auth ? '/surveys' : "/"} style={{ margin: "0px 20px" }} className="brand-logo">Emaily</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                            {<li><a href="/"></a></li>}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
function mapStatetoProps({ auth }) {
    return { auth };
}
export default connect(mapStatetoProps)(Header);