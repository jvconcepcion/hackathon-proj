import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-css';

const useStyles = makeStyles((theme) => ({
  myMasonryGrid: {
    display: "flex",
    marginLeft: "-30px",
    width: "auto",
  },
  myMasonryGridColumn: {
    paddingLeft: "30px",
    backgroundClip: "padding-box"
  }
}));

const MasonryComp = ({ children }) => {

  const classes = useStyles();
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={classes.myMasonryGrid}
      columnClassName={classes.myMasonryGridColumn}
    >
      {children}
    </Masonry>
  );
};

export default MasonryComp;