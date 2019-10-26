import React from "react";
import logo from "./header/logo-v1.png";
import gutText from "./header/gutHappyText.png";
import introImg from "./intro/intro-img.png";
import left from "./img-grid/left.png";
import right from "./img-grid/right.png";
import digestive from "./digestive-health/digestive.png";
import check from "./digestive-health/check.png";
import mascot from "./footer/twinkles.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        {/* header */}
        <Grid className="App-header" container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <img src={logo} className="header-images" alt="logo" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <img
              src={gutText}
              className="header-images"
              alt="simply gut happy"
            />
          </Grid>
        </Grid>
        {/* intro */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img src={introImg} className="intro-img" alt="simply gut happy" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="intro-txt">
              <div className="listTitle">
                <h2>introducing</h2>
                <h1 id="homeIntroDC">Daily Cultures</h1>
                <div className="dottedLine"></div>
              </div>
              <br></br>
              <h2 id="subtitle">
                The <span className="smart">smart</span> way to love your gut
              </h2>
              <p className="aboutDC">
                Daily Cultures has been specifically created to provide new and
                alternative ways to achieve daily digestive health.
                <br></br>
                <br></br>
                Our range of products offer an effective way to help support and
                maintain a healthy gut through everyday food and drinks that fit
                conveniently into a persons normal daily routine.
                <br></br>
                <br></br>
                By combining the power of our uniquely effective smart cultures
                with 100% natural, high quality ingredients, we are able to
                provide an extraordinary balance of well-being and great taste.
                <br></br>
                <br></br>
                Daily Cultures really is the
                <span className="smart2"> smart</span> way to love your gut
              </p>
            </div>
          </Grid>
        </Grid>
        {/* grid */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={left}
              className="img-grid"
              alt="simply gut happy, a healthy outside starts from the inside"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={right}
              className="img-grid"
              alt="natural and nourishing smart cultures, 100% natural ingredients"
            />
          </Grid>
        </Grid>
        {/* digestive */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img src={digestive} className="intro-img" alt="simply gut happy" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="introTxt">
              <div className="listTitle">
                <h2>the benefits of better</h2>
                <h1 id="homeDigestiveHealth">Digestive health</h1>
                <div className="dottedLine"></div>
              </div>
              <br></br>
              <ul className="listContainer" id="ListFix">
                <li className="homeListItem">
                  <img src={check} className="check" />
                  <p>
                    Aids the bodies natural metabolism process through increased
                    protein utilisation.
                  </p>
                </li>
                <li className="homeListItem">
                  <img src={check} className="check" />
                  <p>
                    Supports positive mental health and well-being via the gut
                    brain axis.
                  </p>
                </li>
                <li className="homeListItem">
                  <img src={check} className="check" />
                  <p>
                    Can increase happiness levels as the majority of the
                    serotonin hormone is produced in the gut
                  </p>
                </li>
                <li className="homeListItem">
                  <img src={check} className="check" />
                  <p>
                    Good digestive health reduces muscle fatigue and the
                    feelings of lethargy.
                  </p>
                </li>
                <li className="homeListItem">
                  <img src={check} className="check" />
                  <p>
                    A happy, healthy gut is proven to help support the immune
                    system.
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        {/* products / culture */}
        <Grid container className="bottomnav">
          <Grid item xs={12} sm={12} md={6} className="products">
            <div>
              <a href="/products">
                <h2 className="subtext">explore our</h2>
                <h1 className="navTitle" id="productsNav">
                  Products
                </h1>
              </a>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="cultures"
            id="homeCultures"
          >
            <div>
              <a href="/science">
                <h2 className="subtext">learn about our</h2>
                <h1 className="navTitle" id="culturesNav">
                  Cultures
                </h1>
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
