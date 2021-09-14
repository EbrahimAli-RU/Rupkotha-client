import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
        width: 400,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'Translate(-50%, -50%)'
    },
});

const SimpleCard = React.forwardRef((props, ref) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} ref={ref}>
            {props.children}
        </Card>
    );
})

export default SimpleCard
