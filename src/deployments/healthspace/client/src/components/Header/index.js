import React from 'react';
import { connect } from 'react-redux';
//import './styles.scss';
//import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

// material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

//import Logo from './../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    menuRights: {
        marginLeft: theme.spacing(2),
      },

    title: {
      flexGrow: 1,
    },
  }));

const Header = props => {
    const { currentUser } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    
                    <Link href="/" color="inherit" underline="none">
                    <LocalHospitalOutlinedIcon 
                        style={{ 'vertical-align' : 'text-top' }}
                        fontSize="inherit" />HeathSpace
                    </Link>
                </Typography>
                
                {/* if current user is available, then show logout */}
                {/* also need show notification icons and avatar */}
                {currentUser && (
                        <Button color="inherit"
                            onClick={() => auth.signOut()} >
                                Logout
                        </Button>
                )}

                {/* if current user not available, show register and login */}
                {!currentUser && (
                    <Typography variant="h5">
                        <Box component="span" m={3}>
                            <Link href="/login" color="inherit" underline="none">
                                Sign In
                                </Link>
                            </Box>
                        <Button size="large" variant="contained" 
                            color="secondary" href="/registration">
                            Get Started</Button>
                    </Typography>
                )}
                    
                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);
