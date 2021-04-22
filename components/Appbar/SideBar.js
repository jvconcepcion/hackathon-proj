import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  sideBarWrapper: {
    width: '300px',
    height: '100vh',
    padding: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  menuBtns: {
    width: "100%",
    margin: "5px 0",
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
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Sub Category 1
      </Button>
      <Button
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Sub Category 2
      </Button>
      <Button
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Sub Category 3
      </Button>
      <Button
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Sub Category 4
      </Button>
      <Button
        // disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        Sub Category 5
      </Button>
    </div>
  );
};

export default SideBar;