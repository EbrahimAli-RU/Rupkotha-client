import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logoutButton: {
        textTransform: 'uppercase',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navigation(props) {
    const classes = useStyles();
    const history = useHistory()
    const logoutHandler = () => {
        localStorage.clear()
        sessionStorage.clear();
        history.push('/admin')
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton onClick={props.handler} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                    VpnSwitch... Inc
                </Typography>
                <Button onClick={logoutHandler} color="inherit" className={classes.logoutButton}><ExitToAppIcon /> Logout</Button>
            </Toolbar>
        </AppBar>
    );
}

