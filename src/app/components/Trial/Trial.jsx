import React from "react";
import logo from "./logo.png";
import text from "./text.png";
import product from "./product.png";
import left from "./left.png";
import trial from "./trial.png";
import check from "./check.png";
import mascot from "../Home/footer/twinkles.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "../Home/App.css";
import "./trial.css";

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

function Trial() {
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
            <img src={text} className="header-images" alt="simply gut happy" />
          </Grid>
        </Grid>
        {/* img left - list right */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img src={left} className="intro-img" alt="simply gut happy" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="introTxt">
              <div className="listTitle" id="trialListTitle">
                <h2>5 reasons to try</h2>
                <h1 className="introDCTrial">Daily Cultures</h1>
                <div className="dottedLine"></div>
              </div>
              <br></br>
              <ul className="listContainer">
                <li>
                  <img src={check} className="check" />
                  <p>
                    All our products are packed full of uniquely effective smart
                    cultures that survive stomach acid to reach the gut alive.
                  </p>
                </li>
                <li>
                  <img src={check} className="check" />
                  <p>
                    Come in a variety of convenient product formats to suit your
                    lifestyle that can be used everyday.
                  </p>
                </li>
                <li>
                  <img src={check} className="check" />
                  <p>
                    Can be easily consumed throughout the day as part of your
                    normal daily dietary routine.
                  </p>
                </li>
                <li>
                  <img src={check} className="check" />
                  <p>
                    Our products taste great, are healthy and wholesome, made
                    from only 100% natural ingredients.
                  </p>
                </li>
                <li>
                  <img src={check} className="check" />
                  <p>
                    Are suitable for Vegetarians and Vegans, so importantly
                    offer an alternative to dairy based probiotics.
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        {/* product */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Container fixed>
              <div className="listTitle">
                <h2>grab your exclusive</h2>
                <h1 id="DC">Daily Cultures</h1>
                <div className="dottedLine"></div>
                <h1 id="lifestyle">lifestyle taster pack</h1>
              </div>
              <img src={trial} alt="trial box" className="trialBox"></img>
              <div className="trialBoxBuyMe">
                <p>only</p>
                <h1>£2.99</h1>
                <a className="buyMe">Buy me</a>
              </div>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={product} alt="products" className="productTrial"></img>

            <div className="listTitle" id="trialBoxDesc">
              <h1 id="DC">What's in the box</h1>
              <div className="dottedLine"></div>
              <p>1 Oat & Cranberry nourishing oat, fruit and seed bar</p>
              <p>1 Sachet of amazing wholegrain porridge</p>
              <p>1 Delicious tasting breakfast tea bag</p>
              <p>1 Refreshing peppermint tea bag</p>
            </div>
          </Grid>
        </Grid>

        {/* products / culture */}
        <Grid container className="bottomnav">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="products"
            id="trialProducts"
          >
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
            id="trialCultures"
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
        {/* footer */}
        <Grid container className="footer">
          <Grid item xs={12} sm={12} md={6} className="footerMascot">
            <img src={mascot} className="mascot" alt="footer mascot" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="footerText">
            <div className="listTitle">
              <h2>are you gut happy?</h2>
              <h1 id="trialIntroDC">Then say hello</h1>
              <div className="dottedLine"></div>
              <div className="socials">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="far fa-envelope"></i>
              </div>
              <div className="legal">
                <p>©Daily Cultures Limited. 2019</p>
                <p className="right">Privacy.</p>
                <p className="right">Terms.</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Trial;
