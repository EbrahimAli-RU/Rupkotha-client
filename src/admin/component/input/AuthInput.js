import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const AuthInput = (props) => {
    const { children, label } = props
    const classes = useStyles();
    return (
        <>
            <div className={classes.margin}>
                <Grid container alignItems="flex-end">
                    <Grid item>
                        {children}
                    </Grid>
                    <Grid item style={{ display: 'flex', flexGrow: 1 }}>
                        <TextField
                            inputProps={{
                                readOnly: Boolean(props.isReadOnly),
                            }}
                            autoComplete='off'
                            type={props.type}
                            label={label}
                            value={props.value}
                            onChange={props.handler}
                            name={props.name}
                            fullWidth />
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default AuthInput;