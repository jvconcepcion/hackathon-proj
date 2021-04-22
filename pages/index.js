import React, { useState } from 'react';
import { Header, Main, Footer } from '@components/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuBar from '@components/Appbar';
import Grid from '@components/Grid';
import Cards from '@components/Cards';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    padding: "0 0.1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  menuBarWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#EBECFF",
    padding: "5em 0 10px 0"
  },
  menuBtnWrapper: {
    marginBottom: "-25px"
  },
  menuBtns: {
    margin: "1rem",
    flexBasis: "15%",
    backgroundColor: "#172139",
    color: "#ffffff",
    borderRadius: "0",
    fontSize: "16px",
    '&:hover': {
      opacity: "0.5",
      backgroundColor: "#172139",
    }
  }
}));

const Home = () => {

  const cardsData = {
    candidates: [{
      firstFilterKey: "cat1",
      imgUrl: "https://dummyimage.com/600x400/000/fff",
      imgHeight: "140", 
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum risus massa, fermentum dapibus massa efficitur at. Aliquam vitae odio ornare, dignissim dolor ut, laoreet."
    },
    {
      firstFilterKey: "cat2",
      imgUrl: "https://dummyimage.com/600x400/0e0ee6/fff",
      imgHeight: "140", 
      title: "Nulla cursus odio quam",
      desc: "Nulla cursus odio quam, et sodales urna fringilla et. Nulla porta bibendum sem, ut viverra ligula vulputate auctor. Pellentesque lobortis lorem et efficitur consectetur. Fusce."
    },
    {
      firstFilterKey: "cat3",
      imgUrl: "https://dummyimage.com/600x400/59bd86/fff",
      imgHeight: "140", 
      title: "Vestibulum gravida",
      desc: "Vestibulum gravida ac massa a consectetur. Maecenas justo ex, pulvinar scelerisque convallis sit amet, imperdiet in sem. Aenean tortor eros, laoreet vitae vestibulum ac, facilisis."
    },
    {
      firstFilterKey: "cat1",
      imgUrl: "https://dummyimage.com/600x400/000/fff",
      imgHeight: "140", 
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum risus massa, fermentum dapibus massa efficitur at. Aliquam vitae odio ornare, dignissim dolor ut, laoreet."
    },
    {
      firstFilterKey: "cat2",
      imgUrl: "https://dummyimage.com/600x400/0e0ee6/fff",
      imgHeight: "140", 
      title: "Nulla cursus odio quam",
      desc: "Nulla cursus odio quam, et sodales urna fringilla et. Nulla porta bibendum sem, ut viverra ligula vulputate auctor. Pellentesque lobortis lorem et efficitur consectetur. Fusce."
    },
    {
      firstFilterKey: "cat3",
      imgUrl: "https://dummyimage.com/600x400/59bd86/fff",
      imgHeight: "140", 
      title: "Vestibulum gravida",
      desc: "Vestibulum gravida ac massa a consectetur. Maecenas justo ex, pulvinar scelerisque convallis sit amet, imperdiet in sem. Aenean tortor eros, laoreet vitae vestibulum ac, facilisis."
    },
    {
      firstFilterKey: "cat1",
      imgUrl: "https://dummyimage.com/600x400/000/fff",
      imgHeight: "140", 
      title: "Lorem Ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum risus massa, fermentum dapibus massa efficitur at. Aliquam vitae odio ornare, dignissim dolor ut, laoreet."
    },
    {
      firstFilterKey: "cat3",
      imgUrl: "https://dummyimage.com/600x400/59bd86/fff",
      imgHeight: "140", 
      title: "Vestibulum gravida",
      desc: "Vestibulum gravida ac massa a consectetur. Maecenas justo ex, pulvinar scelerisque convallis sit amet, imperdiet in sem. Aenean tortor eros, laoreet vitae vestibulum ac, facilisis."
    },
  ]};

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header>
        <MenuBar/>
        <div className={classes.menuBarWrapper}>
          <div className={classes.menuBtnWrapper}>
            <Grid>
              <Button className={classes.menuBtns} variant="outlined" color="primary">
                Cat1
              </Button>
              <Button className={classes.menuBtns} variant="outlined" color="primary">
                Cat2
              </Button>
              <Button className={classes.menuBtns} variant="outlined" color="primary">
                Cat3
              </Button>
            </Grid>
          </div>
        </div>
      </Header>
      <Main>
        <Grid>
          {cardsData.candidates.map((data, key) => {
            return (
              <Cards
                key={key}
                imagePath={data.imgUrl}
                imageHeight={data.imgHeight}
                title={data.title}
                description={data.desc}
              />)
          })}
        </Grid>
      </Main>

      <Footer/>
    </div>
  )
}

export default Home;
