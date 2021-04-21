import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RapplerLogo } from '@components/Banner';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "100px",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));

const Footer = () => {

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <RapplerLogo/>
    </footer>
  );
};

export default Footer;