import React from "react";
import logo from "./logo.png";
import gutText from "./text.png";
import introImg from "./left-half-1.png";
import left from "./cameo.png";
import right from "./pack.png";
import cameo2 from "./cameo2.png";
import packs from "./packs.png";
import cameo3 from "./cameo3.png";
import pack2 from "./pack2.png";
import mascot from "../Home/footer/twinkles.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../Home/App.css";
import "./products.css";

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

function Products() {
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
                <h2>ways you can enjoy</h2>
                <h1 id="introDC">Daily Cultures</h1>
                <div className="dottedLine"></div>
              </div>
              <br></br>
              <h2 id="subtitle">
                The convenience of our{" "}
                <span className="smart">smart cultures</span>
              </h2>
              <p className="aboutDC">
                Our products contain only the best, natural ingredients,
                providing you with healthy, and wholesome food and drinks
                choices that can be enjoyed throughout the day.
                <br></br>
                <br></br>
                We recommend starting the day the 'right way' with a bowl of our
                amazing wholegrain porridge or with a cup of our delicious
                breakfast tea.
                <br></br>
                <br></br>
                If you're out and about the why not enjoy a satisfying on-the-go
                snack with one of our nourishing oat bars. Or if you're looking
                for an afternoon pick me up, try our invigorating peppermint
                tea.
                <br></br>
                <br></br>
                Daily Cultures makes adding{" "}
                <span className="smart2"> smart cultures</span> to your daily
                routine easy.
              </p>
            </div>
          </Grid>
        </Grid>
        {/* product1 */}
        <Grid container className="cameos">
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={left}
              className="products-img-grid"
              alt="simply gut happy, a healthy outside starts from the inside"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={right}
              className="products-img-grid2"
              alt="natural and nourishing smart cultures, 100% natural ingredients"
            />
            <div className="productInfo">
              <div className="titleBtn">
                <h2>fuel your morning</h2>
                <a>Buy me</a>
              </div>
              <div className="dottedLine"></div>
              <p className="productDesc">
                with new Daily Cultures amazing wholegrain porridge. Packed with{" "}
                <span className="smart2"> smart cultures</span> to help set up
                the gut for the rest of the day
              </p>
              <h1 className="productTag">
                {" "}
                It's one extraordinary bowl of porridge
              </h1>
            </div>
          </Grid>
        </Grid>
        {/* product2 */}
        <Grid container className="cameos">
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={cameo2}
              className="products-img-grid"
              alt="simply gut happy, a healthy outside starts from the inside"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={packs}
              className="products-img-grid3"
              alt="natural and nourishing smart cultures, 100% natural ingredients"
            />
            <div className="productInfo">
              <div className="titleBtn1">
                <h2>make time for a brew</h2>
                <a>Buy me</a>
              </div>
              <div className="dottedLine"></div>
              <p className="productDesc">
                with new Daily Cultures delicious tasting breakfast and
                peppermint teas. Packed with{" "}
                <span className="smart2"> smart cultures</span> to help provide
                a refreshing boost for your gut
              </p>
              <h1 className="productTag2"> It's one extraordinary cup of tea</h1>
            </div>
          </Grid>
        </Grid>
        {/* product3 */}
        <Grid container className="cameos">
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={cameo3}
              className="products-img-grid"
              alt="simply gut happy, a healthy outside starts from the inside"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={pack2}
              className="products-img-grid4"
              alt="natural and nourishing smart cultures, 100% natural ingredients"
            />
            <div className="productInfo">
              <div className="titleBtn2">
                <h2>stay ready for anything</h2>
                <a>Buy me</a>
              </div>
              <div className="dottedLine"></div>
              <p className="productDesc">
                with new Daily Cultures nourishing oat based cereal bars. Packed with
                <span className="smart2"> smart cultures</span> to help keep the gut happy wherever you may be
              </p>
              <h1 className="productTag3"> It's one extraordinary cereal bar</h1>
            </div>
          </Grid>
        </Grid>
        {/* products / culture */}
        <Grid container className="bottomnav">
          <Grid item xs={12} sm={12} md={6} className="products">
            <div>
              <h2 className="subtext">learn about our</h2>
              <h1 className="navTitle" id="productsNav">
                Cultures
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className="cultures">
            <div>
              <h2 className="subtext">grab yourself a </h2>
              <h1 className="navTitle" id="culturesNav">
                Taster pack
              </h1>
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
              <h1 id="introDC">Then say hello</h1>
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

export default Products;
