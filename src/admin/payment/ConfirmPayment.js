import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AuthNav from "../../component/authNav/AuthNav";
import AuthInput from "../../component/input/AuthInput";
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core'
import Card from '../../component/card/Card'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import { useDispatch, useSelector } from 'react-redux'
// import * as action from '../../../Redux/reseller/action/index'

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

const ConfirmPayment = React.forwardRef((props, ref) => {
    const classes = useStyles()
    return (
        <>
            <Card ref={ref} >
                <AuthNav loginTitle={`Payment ${props.credential.user_name}`} bColor={classes.bColor} tColor={classes.tColor} >
                    <CancelOutlinedIcon onClick={props.modalHandler} className={classes.userIcon} /></AuthNav>
                <>
                    <AuthInput
                        label='Payment Amount'
                        isReadOnly
                        type='text'
                        value={props.credential.payment_amount}
                        name='payment_amount'
                        handler={props.inputHandler} >
                        <PhoneIcon className={classes.icon} />
                    </AuthInput>
                    <AuthInput
                        label='Payment Method'
                        isReadOnly
                        type='text'
                        value={props.credential.payment_method}
                        name='payment_method'
                        handler={props.inputHandler} >
                        <AccountBalanceWalletOutlinedIcon className={classes.icon} />
                    </AuthInput>
                    <AuthInput
                        label='BKash Number'
                        isReadOnly={true}
                        type='text'
                        value={props.credential.bKash_number}
                        name='bKash_number'
                        handler={props.inputHandler} >
                        <AccountBalanceWalletOutlinedIcon className={classes.icon} />
                    </AuthInput>
                    <AuthInput
                        label='Transaction ID'
                        type='text'
                        value={props.credential.transaction_id}
                        name='transaction_id'
                        handler={props.inputHandler} >
                        <AccountBalanceWalletOutlinedIcon className={classes.icon} />
                    </AuthInput>
                </>
                <div className={classes.checkAndLoginContainer}>
                    <Button
                        variant="contained"
                        style={{ marginRight: '1rem' }}
                        color="secondary"
                        onClick={() => props.submitHandler(2, props.credential.id)}  >
                        CANCEL
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => props.submitHandler(1, props.credential.id)}>
                        CONFIRM
                    </Button>
                </div>
            </Card>
        </>

    );
});

export default ConfirmPayment;