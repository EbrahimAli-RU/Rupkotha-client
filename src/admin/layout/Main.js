import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Dasboard from '../dasboard/Dasboard';
// import User from '../user/User'
// import Payment from '../payment/Payment'
// import EarningReport from '../earningReport/EarningReport'
import Navigation from './Navigation';
import SideBar from './SideBar';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth + drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function Main() {
    const classes = useStyles();
    const [data, setdata] = useState(true)

    const handleSideBar = () => {
        setdata(!data)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navigation handler={handleSideBar} />
            <SideBar t={data} />
            <main className={clsx(classes.content, {
                [classes.contentShift]: data,
            })}>
                <Toolbar />
                <Switch>
                    {/* <Route path='/admin/earning' component={EarningReport} />
                    <Route path='/admin/payment' component={Payment} />
                    <Route path='/admin/user' component={User} /> */}
                    <Route path={`/admin/dashboard`} component={Dasboard} />
                </Switch>

            </main>
        </div>
    );
}
