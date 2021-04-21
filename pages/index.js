import { Header, Main, Footer } from '@components/Container';
import { makeStyles } from '@material-ui/core/styles';
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
}));

const Home = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Header>

      <Main>
        <Grid>
          <Cards/>
          <Cards/>
          <Cards/>
        </Grid>
      </Main>

      <Footer/>
    </div>
  )
}

export default Home;
