import { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { Card, Typography, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from '../../component/input/SearchBox';
import Alert from '../../component/alert/Alert'
import { useSelector } from 'react-redux'
import axios from '../../utils/axios/axios'

////////////
import Modal from '@material-ui/core/Modal';
// import CreateUser from './CreateUser';
import Table from './Table';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        margin: theme.spacing(1),
        padding: '4px 1rem'
    },
    marginleft: {
        marginLeft: '.5rem'
    },
    b_s_wrapper: {
        display: 'flex',
        alignItems: 'center'
    }

}));

const EarningReport = () => {
    const classes = useStyles();
    const token = useSelector(state => state.utils.token)
    var decoded = jwt_decode(token);


    const [openModel, setOpenModel] = useState({ create: false, payment: false, edit: false });
    const [userCredential, setUserCredential] = useState({ user_name: '', password: '', user_type: 'premium' })
    const [error, setError] = useState({ error: 'error', message: '' })
    const [open, setOpen] = useState(false);
    const [searchBy, setSearchBy] = useState('')
    const [users, setUsers] = useState([])
    const [flag, setFlag] = useState(false)
    const [numberOfUsers, setNumberOfUsers] = useState(0)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);

    /////////GET USER FOR THE VERY FIRST TIME
    const getUserHandler = (nPage = page, rPPage = rowsPerPage) => {
        axios.get(`/admin/earningreport?page=${nPage}&limit=${rPPage}&s=${searchBy}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            setUsers(res.data.data.earningReport)
            setNumberOfUsers(res.data.data.count)
        }).catch(err => {
            console.log(err.response)
            setOpen(true)
            setError({ error: 'error', message: err.response.data.message })
        })
    }
    useEffect(() => {
        getUserHandler();
        setUserCredential({
            user_name: Math.floor(Math.random() * 899999 + 100000),
            password: Math.floor(Math.random() * 899999 + 100000), user_type: 'premium'
        })
        setFlag(true)
    }, [])



    ////////////////////////////////PAGINATION//////////////////////////////
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        getUserHandler(newPage, rowsPerPage)
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        getUserHandler(page, event.target.value)
    };

    const resellerSearchHandler = (e) => {
        setSearchBy(e.target.value)
        axios.get(`/admin/user/search/${decoded.id}?s=${e.target.value}&page=${page}&limit=${rowsPerPage}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            setUsers(res.data.data.user)
            setNumberOfUsers(res.data.data.count)
        }).catch(err => {
            setOpen(true)
            setError({ error: 'error', message: err.response.data.message })
        })
    }

    const updateStatusHandler = (status, id) => {
        axios.patch(`/admin/user/${id}`,
            status, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            getUserHandler();
        }).catch(err => {
            console.log(err.response)
            setOpen(true)
            setError({ error: 'error', message: err.response.data.message })
        })
    }


    return (
        <>
            <Alert />
            <Card>
                <div className={classes.root}>
                    <Typography className={classes.marginleft} variant='h5'>Earning Report</Typography>
                    <div className={classes.b_s_wrapper}>
                        <SearchBox value={searchBy} handler={resellerSearchHandler} />
                    </div>
                </div>
                <div>
                    {flag ? <Table
                        users={users}
                        updateStatus={updateStatusHandler}
                        numberOfUsers={numberOfUsers}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        handleChangePage={handleChangePage}
                        handleChangeRowsPerPage={handleChangeRowsPerPage}
                    /> : null}

                </div>
            </Card>
        </>
    );
};

export default EarningReport;