import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AuthNav from "../../../component/authNav/AuthNav";
import AuthInput from "../../../component/input/AuthInput";
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core'
import Card from '../../../component/card/Card'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../../Redux/reseller/action/index'

const useStyles = makeStyles({
    pos: {
        marginBottom: 12,
    },
    checkAndLoginContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '2rem 0.5rem 1rem 0.5rem'
    },
    userIcon: {
        color: '#777',
        marginRight: '.5rem',
        cursor: 'pointer'
    },
    bColor: {
        backgroundColor: 'white',
        paddingTop: '1rem',
        paddingLeft: '1rem'
    },
    tColor: {
        color: 'black',
        fontSize: '1.6rem'
    },
    icon: {
        color: '#777',
        marginRight: '.5rem'
    }
});

const CreateReseller = React.forwardRef((props, ref) => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const credential = useSelector(state => state.reseller.credential)
    const inputHandler = (e) => {
        const { name, value } = e.target
        dispatch(action.userInputHandler(name, value))
    }

    const resetHandler = () => {
        dispatch(action.userInputResetHandler())
    }
    return (
        <>
            <div ref={ref} >
                <AuthNav loginTitle='Create New Reseller' bColor={classes.bColor} tColor={classes.tColor} >
                    <CancelOutlinedIcon onClick={() => props.handlerClode('create')} className={classes.userIcon} /></AuthNav>
                <>
                    <AuthInput
                        label='UserName' type='text' value={credential.user_name} name='user_name' handler={inputHandler} >
                        <AccountBoxOutlinedIcon className={classes.icon} />
                    </AuthInput>
                    <AuthInput label='Password' type='text' value={credential.password} name='password' handler={inputHandler} >
                        <LockIcon className={classes.icon} />
                    </AuthInput>
                    <AuthInput label='Phone' type='text' value={credential.phone} name='phone' handler={inputHandler} >
                        <PhoneIcon className={classes.icon} />
                    </AuthInput>
                    <AuthInput label='Balance' type='Number' value={credential.balance} name='balance' handler={inputHandler} >
                        <AccountBalanceWalletOutlinedIcon className={classes.icon} />
                    </AuthInput>
                </>
                <div className={classes.checkAndLoginContainer}>
                    <Button variant="contained" style={{ marginRight: '1rem' }} onClick={resetHandler} >
                        RESET
                    </Button>
                    <Button variant="contained" color="primary" onClick={props.submitHandler}>
                        SUBMIT
                    </Button>
                </div>
            </div>
        </>

    );
});

export default CreateReseller;