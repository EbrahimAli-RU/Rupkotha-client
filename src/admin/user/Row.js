import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button, TableCell, TableRow, Switch } from '@material-ui/core'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    margin: {
        marginLeft: '1rem'
    },
    message: {
        padding: '2px 10px',
        fontSize: '12px',
        color: 'white',

        borderRadius: '100px'
    },
    active_color: {
        backgroundColor: '#3f51b5'
    },
    notactive_color: {
        backgroundColor: 'crimson'
    }

}));

const Row = (props) => {
    const classes = useStyles()
    return (
        <StyledTableRow >
            <StyledTableCell scope="row">{props.serial}</StyledTableCell>
            <StyledTableCell align="left">{props.name}</StyledTableCell>
            <StyledTableCell align="left">{props.password}</StyledTableCell>
            <StyledTableCell align="left">{props.current_balance}</StyledTableCell>
            <StyledTableCell align="left">{props.reference_user}</StyledTableCell>
            <StyledTableCell align="left">{props.device_id}</StyledTableCell>
            <StyledTableCell align="left">{props.account_type}</StyledTableCell>
            <StyledTableCell align="left"> <Switch
                checked={props.status}
                onChange={() => props.statusHandler({ status: !props.status }, props.id)}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /> </StyledTableCell>
            <StyledTableCell align="left">
                <div >
                    <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={() => props.statusHandler({ device_id: null }, props.id)}
                        className={classes.margin}>
                        Reset
                    </Button>
                </div>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default Row;