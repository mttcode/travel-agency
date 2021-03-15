import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import "../styles.css";

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return { color: '#CBCBCB'};
    } else {
        return { color: '#fff'};
    }
};

const Menu = ({history}) => (
<div>
    <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">Dashboard</Link>
        </li>

        {!isAuthenticated() && (

            <Fragment>
                <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">SignIn</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">SignUp</Link>
        </li>
            </Fragment>

        )}

        {isAuthenticated() && (
            <li className="nav-item">
            <span className="nav-link" style={{cursor: 'pointer', color: '#ffffff'}} onClick={() => signout(() => {
                history.push('/');
            })}>SignOut</span>
        </li>
        )}

    </ul>
</div>
)

export default withRouter(Menu);
