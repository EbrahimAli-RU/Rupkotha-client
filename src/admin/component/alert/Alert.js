import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: '1rem auto',
        zIndex: 10000
    },
}));


export default function SimpleAlerts(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Collapse in={props.open}>
                <div>
                    <Alert action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={props.handler}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    } severity="error">{props.message}</Alert>
                </div>
            </Collapse>
        </div>
    );
}
