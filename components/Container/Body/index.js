import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: ".2fr 1fr",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    margin: "1.5rem 0",
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: "3rem 0",
      gridTemplateColumns: "1fr",}
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