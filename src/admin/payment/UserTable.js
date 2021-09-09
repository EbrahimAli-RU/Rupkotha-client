import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Row from './Row';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function UserTable(props) {
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >#</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Phone</StyledTableCell>
                            <StyledTableCell align="left">Payment Amount</StyledTableCell>
                            <StyledTableCell align="left">Payment Method</StyledTableCell>
                            <StyledTableCell align="left">Bkash Number</StyledTableCell>
                            <StyledTableCell align="left">Transaction ID</StyledTableCell>
                            <StyledTableCell align="left">Payment Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((el, i) =>
                            <Row
                                openModal={props.openModal}
                                key={el._id}
                                id={el._id}
                                serial={i + 1 + (props.rowsPerPage * props.page)}
                                name={el.user_name}
                                device_id={el.device_id}
                                transaction_id={el.transaction_id}
                                phone={el.phone}
                                payment_amount={el.payment_amount}
                                payment_method={el.payment_method}
                                bKash_number={el.bKash_number}
                                payment_status={el.payment_status}
                                transaction_id={el.transaction_id}
                            />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[20, 40, 50]}
                component="div"
                count={props.numberOfUsers}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                onPageChange={props.handleChangePage}
                onRowsPerPageChange={props.handleChangeRowsPerPage}
            />
        </>
    );
}
