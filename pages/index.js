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
    position: "relative",
    minHeight: "100vh",
    padding: "0 0 5em 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.between('xs', 'sm')]: {
      padding: "0 0 3em 0",
    }
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
    padding: "0 1em 0 0",
    [theme.breakpoints.between('xs', 'sm')]: {
      width: "100%",
      padding: "0",
      height: 'unset',
    }
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
  underConstructionImg: {
    width: "100%",
    height: "100vh",
  },
  avatarsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "center",
    [theme.breakpoints.between('xs', 'sm')]: {
      gridTemplateColumns: "1fr",
    }
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
    gridGap: "10px 25px",
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

  const [catValue, setCatValue] = useState("covid-19");
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const handleCategoryBtn = (val) => setCatValue(val);
  const menuBtnsData = [{
    menuTitle: "COVID-19",
    clickHandler: () => handleCategoryBtn("covid-19")
  },
  {
    menuTitle: "Criminality",
    clickHandler: () => handleCategoryBtn("criminality")
  },
  {
    menuTitle: "Economy",
    clickHandler: () => handleCategoryBtn("economy")
  },
  {
    menuTitle: "Education",
    clickHandler: () => handleCategoryBtn("education")
  },
  {
    menuTitle: "Gender Issues",
    clickHandler: () => handleCategoryBtn("gender issues")
  },
  {
    menuTitle: "Health",
    clickHandler: () => handleCategoryBtn("health")
  },
  {
    menuTitle: "Labor",
    clickHandler: () => handleCategoryBtn("labor")
  },
  ]

  const tabContents = (currentCat) => {
    switch (currentCat) {
      case "covid-19":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="covid-19"/>)}
            <div className={classes.contentWrapper}>
              <div className={classes.details}>
              <img className={classes.underConstructionImg} src="https://assets.rappler.com/89659C0CFEC34375850093CA0F895C7D/img/A02AC2415C7647F6BF727C8A1C230411/under-construction-page-01.jpg" />
              </div>
            </div>
          </React.Fragment>
        )
      case "criminality":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="criminality" />)}
            <div className={classes.contentWrapper}>
              <div className={classes.details}>
                <Typography variant="subtitle1" gutterBottom className={classes.detailsDesc}>
                  The number of reported murder and homicide cases at the start of 2016 went down by 56% compared to 2015. In August 2016, there were 681 murder and homicide cases reported according to the PNP.
                </Typography>
              </div>
              <div dangerouslySetInnerHTML={{ __html: `<iframe src='https://flo.uri.sh/visualisation/5940271/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/5940271/?utm_source=embed&utm_campaign=visualisation/5940271' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`}}></div>
            </div>
          </React.Fragment>
        )
      case "economy":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="economy" />)}
            <div className={classes.contentWrapper}>
              <div className={classes.details}>
                <img className={classes.underConstructionImg} src="https://assets.rappler.com/89659C0CFEC34375850093CA0F895C7D/img/A02AC2415C7647F6BF727C8A1C230411/under-construction-page-01.jpg" />
              </div>
            </div>
          </React.Fragment>
        )
      case "education":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="education" />)}
            <div className={classes.contentWrapper}>
              <div className={classes.details}>
                <Typography variant="subtitle1" gutterBottom className={classes.detailsDesc}>
                  About 9 out of 10 families in the country say the current blended learning system is more difficult than the traditional face to face system. More families outside Metro Manila say it is much more difficult now, with 63% families saying this in Visayas, 63% in Balance Luzon, and 61% in Mindanao, compared to 53% in Metro Manila.
                </Typography>
              </div>
              <div dangerouslySetInnerHTML={{ __html: `<iframe src='https://flo.uri.sh/visualisation/5940489/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/5940489/?utm_source=embed&utm_campaign=visualisation/5940489' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`}}></div>
            </div>
          </React.Fragment>
        )
      case "gender issues":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="gender issues" />)}
            <div className={classes.contentWrapper}>
              <div className={classes.details}>
                <Typography variant="subtitle1" gutterBottom className={classes.detailsDesc}>
                  Integer nec iaculis mi. Fusce cursus dapibus finibus. Fusce in leo ut mauris pellentesque mattis nec pellentesque nisl. Vestibulum sagittis pretium facilisis. Ut blandit justo nec velit pretium, ultrices ultrices.
                </Typography>
              </div>
              <div className={classes.detailsSubWrapper}>
                <Typography variant="h5" gutterBottom className={classes.detailsTitle}>
                  Gender issues
                </Typography>
              </div>
              <div className={classes.avatarsWrapper}>
                <div className={`${classes.avatarsFlex} ${classes.avatarsBorder}`}>
                  <Typography variant="h6" gutterBottom>For</Typography>
                  <div className={classes.avatarsGrid}>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>A</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Colmenares
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>B</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Cayetano
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>C</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Roxas
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={`${classes.avatarsFlex} ${classes.avatarsBorder}`}>
                  <Typography variant="h6" gutterBottom>Against</Typography>
                  <div className={classes.avatarsGrid}>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>A</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Pimentel
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>B</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Binay
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>C</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Villar
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>D</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Alejano
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>E</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Poe
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>E</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Ejercito
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>E</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Osmeña
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>E</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Angara
                      </Typography>
                    </div>
                    <div className={classes.avatarAndTextWrapper}>
                      <Avatar className={classes.avatarLarge}>E</Avatar>
                      <Typography variant="caption" gutterBottom className={classes.detailsDesc}>
                        Aquino
                      </Typography>
                    </div>
                  </div>
                </div>
                {/* <div className={classes.avatarsFlex}>
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
                </div> */}
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
          </React.Fragment>
        )
      case "health":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="health" />)}
            <div className={classes.contentWrapper}>
              <div className={classes.details}>
                <img className={classes.underConstructionImg} src="https://assets.rappler.com/89659C0CFEC34375850093CA0F895C7D/img/A02AC2415C7647F6BF727C8A1C230411/under-construction-page-01.jpg" />
              </div>
            </div>
          </React.Fragment>
        )
      case "labor":
        return (
          <React.Fragment>
            {matches && (<SideBar currentCat="labor" />)}
            <div className={classes.contentWrapper}>
              <div dangerouslySetInnerHTML={{ __html: `<iframe src='https://flo.uri.sh/visualisation/3002060/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/3002060/?utm_source=embed&utm_campaign=visualisation/3002060' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>`}}></div>
            </div>
          </React.Fragment>
        )
      default:
        return null;
    }
  }

  return (
    <div className={classes.root}>
      <Header>
        <AppBar />
        <div className={classes.menuBarWrapper}>
          <div className={classes.appHeaderWrapper}>
            <Typography variant="h4" gutterBottom>
              PH PoliTalks
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
        {tabContents(catValue)}
      </Main>
      <Footer />
    </div>
  )
}

export default Home;
