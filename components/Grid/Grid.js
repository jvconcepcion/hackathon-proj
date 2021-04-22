import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "1rem",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
      flexDirection: "column",
    }
  }
}));

const Grid = ({ children }) => {

  const classes = useStyles();

  return (
    <div className={classes.grid}>
      {children}
    </div>
  );
};

export default Grid;