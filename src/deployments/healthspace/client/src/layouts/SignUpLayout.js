import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainPageContainer: {
        display: 'flex',
        flexDirection:'column',
        minHeight: '100vh'
    },

    mainContent: {
        // to make it take up all the space
        flex:1,
        backgroundImage: 'url(https://source.unsplash.com/featured/?health,wellness)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  }));

const SignUpLayout = props => {
    const classes = useStyles();
    return (
        <div className={classes.mainPageContainer}>
            <div className={classes.mainContent}>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default SignUpLayout;
