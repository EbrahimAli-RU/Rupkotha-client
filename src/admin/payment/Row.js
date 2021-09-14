import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button, TableCell, TableRow, Switch } from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
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
    let Status = <Chip size="small" label="Pending" style={{ backgroundColor: "", color: "white" }} />
    if (props.payment_status === 1) {
        Status = <Chip size="small" label="Complete" color="primary" />
    } else if (props.payment_status === 2) {
        Status = <Chip size="small" label="Cancel" color="secondary" />
    }
    return (
        <StyledTableRow >
            <StyledTableCell scope="row">{props.serial}</StyledTableCell>
            <StyledTableCell align="left">{props.name}</StyledTableCell>
            <StyledTableCell align="left">{props.phone}</StyledTableCell>
            <StyledTableCell align="left">{props.payment_amount}</StyledTableCell>
            <StyledTableCell align="left">{props.payment_method}</StyledTableCell>
            <StyledTableCell align="left">{props.bKash_number}</StyledTableCell>
            <StyledTableCell align="left">{props.transaction_id}</StyledTableCell>
            <StyledTableCell align="left">{Status} </StyledTableCell>
            <StyledTableCell align="left">
                <div >
                    <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => props.openModal({
                            id: props.id,
                            user_name: props.name,
                            phone: props.phone,
                            payment_amount: props.payment_amount,
                            payment_method: props.payment_method,
                            bKash_number: props.bKash_number,
                            transaction_id: props.transaction_id

                        })}
                        className={classes.margin}>
                        Confirm
                    </Button>
                </div>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default Row;