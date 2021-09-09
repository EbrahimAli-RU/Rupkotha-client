import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import AuthNav from "../../component/authNav/AuthNav";
import AuthInput from "../../component/input/AuthInput";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core'
import Card from '../../component/card/Card'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from '../../utils/axios/axios'
import Alert from '../../component/alert/Alert'
import * as action from '../../Redux/utils/action/auth'

const useStyles = makeStyles({
    pos: {
        marginBottom: 12,
    },
    checkAndLoginContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2rem 0.5rem 1rem 0.5rem'
    },
    userIcon: {
        color: 'white',
        marginRight: '.5rem'
    },
    bColor: {
        backgroundColor: '#3f51b5'
    },
    tColor: {
        color: 'white'
    }
});

const Login = () => {
    const dispatch = useDispatch()
    const [remember, setRemember] = useState(false)
    const [credential, setCredential] = useState({ user_name: '', password: '' })
    const [error, setError] = useState({ error: 'success', message: '' })
    const [open, setOpen] = useState(false);
    const closeHandler = () => {
        setError({ error: error.error, message: '' })
        setOpen(false)
    }
    const classes = useStyles()
    /////Methode for changing checkbox input
    const handleChange = () => {
        setRemember(prevSta => !prevSta)
    }

    const inputHandler = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const history = useHistory();
    const loginHandler = () => {
        axios.post('/admin/login',
            { user_name: credential.user_name, password: credential.password }).then(res => {
                dispatch(action.tokenHandler(res.data.data.token))
                sessionStorage.setItem('token', res.data.data.token)
                history.push('/admin/dashboard')
            }).catch(err => {
                setOpen(true)
                setError({ error: 'error', message: err.response.data?.message })
            })
    }
    return (
        <>
            <Alert open={open} message={error.message} messageType={error.error} handler={closeHandler} />
            <Card>
                <AuthNav loginTitle='Login form' bColor={classes.bColor} tColor={classes.tColor}><PersonAddIcon className={classes.userIcon} /></AuthNav>
                <div>
                    <AuthInput label='User Name' type='text' value={credential.user_name} handler={inputHandler} name='user_name'  >
                        <PersonIcon />
                    </AuthInput>
                    <AuthInput label='Password' type='text' value={credential.password} handler={inputHandler} name='password' >
                        <LockIcon />
                    </AuthInput>
                </div>
                <div className={classes.checkAndLoginContainer}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={remember}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember"
                    />
                    <Button variant="contained" size="small" color="primary" onClick={loginHandler}>
                        login
                    </Button>
                </div>
            </Card>
        </>
    );
};

export default Login;