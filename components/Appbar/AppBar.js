import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { RapplerLogo } from '@components/Banner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    zIndex: theme.zIndex.drawer + 1,
  }
}));

const ApplicationBar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={({ root: classes.appBar})}>
        <Toolbar>
          <RapplerLogo/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ApplicationBar;