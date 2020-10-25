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
      flex:1
  }
}));

const HomepageLayout = props => {
  const classes = useStyles();
  return (
    <div className={classes.mainPageContainer}>
      <Header {...props} />
        <div className={classes.mainContent}>
            {props.children}
        </div>
      <Footer />
    </div>
  );
};

export default HomepageLayout;
