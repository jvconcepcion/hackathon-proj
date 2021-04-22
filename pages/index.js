import React, { useState } from 'react';
import { Typography, useMediaQuery, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { cardsData } from '@utils/dataStore'
import { Header, Main, Footer } from '@components/Container';
import { AppBar, MenuBtns, SideBar } from '@components/Appbar';
import { Grid, Masonry } from '@components/Grid';
import { Cards } from '@components/Cards';

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
   height: "100%",
   padding: "0 5em 0 0",
   [theme.breakpoints.between('xs', 'sm')]: {
    width: "100%",
    padding: "0",
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
  detailsDesc: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "14px"
    }
  },
  detailsSubWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0 20px 0",
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: "center"
    }
  },
  detailsSubHeadings: {
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: "20px"
    }
  },
  avatarsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    textAlign: "center",
    [theme.breakpoints.between('xs', 'sm')]: {
      gridTemplateColumns: "1fr",}
  },
  avatarsFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatarsBorder: {
    borderLeft: "1px solid #172139",
    borderRight: "1px solid #172139",
  },
  avatarsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "10px 10px",
    margin: "20px 0",
  },
  avatarLarge: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  avatarAndTextWrapper: {
    display: "flex",
    flexDirection: "column",
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
            <Typography variant="subtitle1" gutterBottom className={classes.detailsDesc}>
              Pellentesque sit amet consequat nibh. Duis convallis nulla eget diam rhoncus rutrum. Donec lobortis tempor ligula, vitae tempus purus commodo id. Duis placerat nulla non tortor bibendum cursus. Integer vulputate varius feugiat. Fusce scelerisque vulputate magna, non scelerisque nisi scelerisque vitae. Suspendisse cursus ac eros tempus elementum. Suspendisse venenatis ultricies neque vitae eleifend. Etiam sapien quam, blandit quis lacinia in, lacinia id elit. Sed purus enim, molestie eget dictum vitae.
            </Typography>
          </div>
          <div className={classes.detailsSubWrapper}>
            <Typography variant="h4" gutterBottom className={classes.detailsTitle}>
              Etiam porttitor, urna id vehicula luctus, quam orci scelerisque lorem.
            </Typography>
          </div>
          <div className={classes.avatarsWrapper}>
              <div className={classes.avatarsFlex}>
                <Typography variant="h6" gutterBottom>For</Typography>
                <div className={classes.avatarsGrid}>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>A</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>B</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>C</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>D</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>E</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>F</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>G</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>H</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>I</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={`${classes.avatarsFlex} ${classes.avatarsBorder}`}>
                <Typography variant="h6" gutterBottom>No Stance/Unclear</Typography>
                <div className={classes.avatarsGrid}>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>A</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>B</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>C</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>D</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>E</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.avatarsFlex}>
                <Typography variant="h6" gutterBottom>Against</Typography>
                <div className={classes.avatarsGrid}>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>A</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>B</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>C</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>D</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>E</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>F</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                  <div className={classes.avatarAndTextWrapper}>
                    <Avatar className={classes.avatarLarge}>G</Avatar>
                    <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                      DUMMY TEXT
                    </Typography>
                  </div>
                </div>
              </div>
          </div>
          {/* <Masonry>
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
          </Masonry> */}
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default Home;
