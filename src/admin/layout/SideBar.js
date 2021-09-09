import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Collapse } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
// import CollapseItem from '../component/sidebar/CollapseItem';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import GetAppIcon from '@material-ui/icons/GetApp';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',

    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
}));

const SideBar = (props) => {
    const classes = useStyles();
    const [collapse, setCollapse] = React.useState({
        reseller: false,
        user: false
    });

    const handleCollapse = (collapseItem) => {
        setCollapse({ ...collapse, [collapseItem]: !collapse[collapseItem] });
    };


    return (
        <Drawer
            className={classes.drawer}
            variant={props.t ? "persistent" : "temporary"}
            classes={{
                paper: classes.drawerPaper,
            }}
            // variant="persistent"
            anchor="left"
            open={props.t}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <Link to='/admin/dashboard' className={classes.link}>
                        <ListItem button >
                            <ListItemIcon>
                                <DateRangeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText style={{ fontSize: '1.6rem' }} primary="Dashboard" />
                        </ListItem>
                    </Link>
                    <Link to='/admin/user' className={classes.link}>
                        <ListItem button >
                            <ListItemIcon>
                                <DateRangeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText style={{ fontSize: '1.6rem' }} primary="User" />
                        </ListItem>
                    </Link>
                    <Link to='/admin/earning' className={classes.link}>
                        <ListItem button >
                            <ListItemIcon>
                                <DateRangeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText style={{ fontSize: '1.6rem' }} primary="Earning" />
                        </ListItem>
                    </Link>
                    <Link to='/admin/payment' className={classes.link}>
                        <ListItem button >
                            <ListItemIcon>
                                <DateRangeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText style={{ fontSize: '1.6rem' }} primary="Payment" />
                        </ListItem>
                    </Link>

                    {/* <ListItem button onClick={() => handleCollapse('user')}>
                        <ListItemIcon>
                            <AccountBoxOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                        {collapse.user ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={collapse.user} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {[{ link: '/admin/user', title: 'User' },
                            { link: '/admin/alluser', title: 'All User' }].map(el =>
                                <CollapseItem key={el.title} link={el.link} title={el.title} />)}
                        </List>
                    </Collapse> */}

                </List>
            </div>
        </Drawer>
    );
};

export default SideBar;