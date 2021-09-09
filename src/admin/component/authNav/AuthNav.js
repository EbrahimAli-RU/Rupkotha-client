import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        height: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        paddingLeft: '.5rem'
    },
})

const AuthNav = (props) => {
    const classes = useStyles();
    return (
        <div className={[classes.root, props.bColor].join(' ')} >
            <Typography className={[classes.title, props.tColor].join(' ')}>
                {props.loginTitle}
            </Typography>
            {props.children}
        </div>
    );
};

export default AuthNav;