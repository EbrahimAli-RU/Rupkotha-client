import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Card, Typography } from '@material-ui/core'
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const useStyles = makeStyles({
    root: {
        width: 280,
        padding: '1rem',
        margin: '.5rem',
        display: 'inline-block'
    },
    numberContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: '.8rem',
        color: '#777'
    },
    line: {
        borderBottom: '1px solid black',
        flexGrow: 1,
        marginTop: '-.4rem',
        marginBottom: '.8rem'
    },
    timingMessage: {
        display: 'flex',
        alignItems: 'center',
        margin: '.5rem 0',
        color: '#777'
    }
})

const DasboardCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <Typography variant='h5'>{props.title}</Typography>
            <div className={classes.numberContainer}>
                <Typography variant='h5'>{props.quantity}</Typography>
                <WatchLaterIcon style={{ marginBottom: '.3rem' }} />
            </div>
            <div className={classes.line}></div>
            <div className={classes.timingMessage}>
                <WatchLaterIcon />
                <Typography variant='subtitle2' style={{ marginLeft: '1rem' }}>Updated 2 minutes age</Typography>
            </div>
        </Card>
    );
};

export default DasboardCard;