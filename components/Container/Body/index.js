import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "5rem 0",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
}));
const BodyWrapper = ({children}) => {

  const classes = useStyles();

  return (
    <div className={classes.body}>
      {children}
    </div>
  );
};

export default BodyWrapper;