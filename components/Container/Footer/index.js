import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { RapplerLogo } from '@components/Banner';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "20px 0",
    backgroundColor: "#ffffff",
    boxShadow: "0px 1px 7px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
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