import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuBtns: {
    margin: "1rem 10px",
    flexBasis: "10%",
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

const MenuButtons = ({ 
  currentMenuValue,
  menuTitle, 
  handleClick = () => console.log("define your func here")
}) => {

  const classes = useStyles();

  return (
    <Button
        disabled={currentMenuValue === menuTitle.toLowerCase() ? true : false}
        classes={({ root: classes.menuBtns, disabled: classes.menuBtnsDisabled })}
        variant="outlined"
        color="primary"
        onClick={() => handleClick()}
      >
        {menuTitle}
    </Button>
  );
};

export default MenuButtons;