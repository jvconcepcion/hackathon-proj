import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { cardsData } from '@utils/dataStore'
import { Header, Main, Footer } from '@components/Container';
import { AppBar, MenuBtns, SideBar } from '@components/Appbar';
import { Grid, Masonry } from '@components/Grid';
import { Cards } from '@components/Cards';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "0 0.1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  appHeaderWrapper: {
    margin: "0 0 0 11em",
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: "0",
      padding: "0 10px",
      textAlign: "center",
      fontSize: "20px"
    }
  },
  menuBarWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#EBECFF",
    padding: "2em 0 10px 0"
  },
  menuBtnWrapper: {
    marginBottom: "-25px"
  },
  contentWrapper: {
   display: "flex",
   flexDirection: "column",
   justifyContent: "flex-start",
   width: "100%",
   height: '100vh',
   margin: "0 5em 0 0",
   [theme.breakpoints.between('xs', 'sm')]: {
    width: "100%",
    margin: "0",
    height: 'unset',}
  },
  details: {
    margin: "10px 10px 20px 10px",
  },
  detailsTitle: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "22px"
    }
  },
  detailsSubTxt: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "14px"
    }
  }
}));

const Home = () => {

  const [catValue, setCatValue] = useState("all");
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const handleCategoryBtn = (val) => setCatValue(val);
  const menuBtnsData = [{
    menuTitle: "All",
    clickHandler: () => handleCategoryBtn("all")
  },
  {
    menuTitle: "Cat1",
    clickHandler: () => handleCategoryBtn("cat1")
  },
  {
    menuTitle: "Cat2",
    clickHandler: () => handleCategoryBtn("cat2")
  },
  {
    menuTitle: "Cat3",
    clickHandler: () => handleCategoryBtn("cat3")
  },
  {
    menuTitle: "Cat4",
    clickHandler: () => handleCategoryBtn("cat4")
  },
  {
    menuTitle: "Cat5",
    clickHandler: () => handleCategoryBtn("cat5")
  },
  {
    menuTitle: "Cat6",
    clickHandler: () => handleCategoryBtn("cat6")
  },
  ]

  return (
    <div className={classes.root}>
      <Header>
        <AppBar />
        <div className={classes.menuBarWrapper}>
          <div className={classes.appHeaderWrapper}>
            <Typography variant="h4" gutterBottom>
              PHVote Hackathon Product Name
            </Typography>
            <p>Praesent quis vehicula orci. In non ullamcorper quam, vitae mollis est. Morbi at porttitor sapien, quis mollis arcu. Quisque id dignissim mauris, nec pulvinar dolor.</p>
          </div>
          <div className={classes.menuBtnWrapper}>
            <Grid>
              {menuBtnsData.map((items, key) => {
                return (
                  <MenuBtns
                    key={key}
                    currentMenuValue={catValue}
                    menuTitle={items.menuTitle}
                    handleClick={items.clickHandler}
                  />
                )
              })}
            </Grid>
          </div>
        </div>
      </Header>
      <Main>
        {matches && (<SideBar/>)}
        <div className={classes.contentWrapper}>
          <div className={classes.details}>
            <Typography variant="h4" gutterBottom className={classes.detailsTitle}>
              In non ullamcorper quam, 
            </Typography>
            <Typography variant="h6" gutterBottom className={classes.detailsSubTxt}>
              Proin accumsan malesuada nunc, eget pellentesque quam elementum congue. Ut cursus feugiat vehicula. Morbi vel tempor quam, et sagittis nunc. Nullam enim magna, pretium accumsan porta eu, tristique consectetur nisl. Donec mollis urna libero, in accumsan dui facilisis eget. Aliquam quis facilisis ipsum. Quisque quis nulla non lorem pulvinar placerat.
            </Typography>
          </div>
          <Masonry>
            {cardsData.candidates
              .filter(keyword => keyword.firstFilterKey.indexOf(catValue) >= 0)
              .map((data, key) => {
                return (
                  <Cards
                    key={key}
                    imagePath={data.imgUrl}
                    imageHeight={data.imgHeight}
                    title={data.title}
                    description={data.desc}
                  />)
              })}
          </Masonry>
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default Home;
