import { Container } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch, Route, Redirect,
} from 'react-router-dom';

import SideBar from './SideBar';
import Home from './Home';
import Channel from './Channel';
import Explore from './Explore';

import useStyles from './styles';
import React, { useEffect, useState } from 'react';


const Dashboard = (props) => {

    document.title = "Dashboard | GS-Suite"
    const classes = useStyles()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            props.history.push('/signin');
        }
    }, []);

    return (
        <Router>
            <Container className={classes.root}>
                <SideBar props={props} />
                <main className={classes.content}>
                    <Switch>
                        <Route path="/dashboard" exact component={Home} />
                        <Route path="/channel" exact component={Channel} />
                        <Route path="/explore" exact component={Explore} />
                    </Switch>
                </main>
            </Container>
        </Router>
    )
}

export default Dashboard;