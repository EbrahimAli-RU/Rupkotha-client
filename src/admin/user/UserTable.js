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
                            <StyledTableCell align="left">Password</StyledTableCell>
                            <StyledTableCell align="left">Balance</StyledTableCell>
                            <StyledTableCell align="left">Reference</StyledTableCell>
                            <StyledTableCell align="left">Device Id</StyledTableCell>
                            <StyledTableCell align="left">Type</StyledTableCell>
                            <StyledTableCell align="left">Active Status</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((el, i) =>
                            <Row
                                statusHandler={props.updateStatus}
                                key={el._id}
                                id={el._id}
                                serial={i + 1 + (props.rowsPerPage * props.page)}
                                name={el.user_name}
                                status={el.status}
                                reference_user={el.reference_user}
                                password={el.password}
                                account_type={el.account_type}
                                device_id={el.device_id}
                                current_balance={el.current_balance}
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
