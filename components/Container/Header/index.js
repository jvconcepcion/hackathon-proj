import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
}));

const Header = ({ children }) => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <title>Hackathon Proj</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://public.flourish.studio/resources/embed.js"></script>
      </Head>
      <div className={classes.root}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Header;