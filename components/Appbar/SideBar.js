import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  sideBarWrapper: {
    width: '300px',
    height: '100%',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  menuBtns: {
    width: "100%",
    margin: "5px 0",
    padding: "20px 0",
    backgroundColor: "#172139",
    color: "#ffffff",
    borderRadius: "0",
    fontSize: "16px",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
      margin: "2px 0",
    },
    '&:hover': {
      opacity: "0.7",
      backgroundColor: "#172139",
    }
  },
  menuBtnsDisabled: {
    opacity: "0.5",
    backgroundColor: "#172139",
    color: "#ffffff !important",
  }
}));

const SideBar = ({ handleClick = () => console.log("test")}) => {

  const classes = useStyles();

  return (
    <div className={classes.sideBarWrapper}>
      <Button
        disabled
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Dataset
      </Button>
      <Button
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Death Penalty
      </Button>
      <Button
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Lowering the minimum age of criminal responsibility
      </Button>
    </div>
  );
};

export default SideBar;