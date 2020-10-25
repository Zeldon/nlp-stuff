import React from 'react';
//import './styles.scss';

//material ui
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 5),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? 
        theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Typography align="left" variant="body1">
          <MuLink href="/" underline="none">
            © HealthSpace 2020
          </MuLink>
          </Typography>
    </footer>
  );
}

export default Footer;