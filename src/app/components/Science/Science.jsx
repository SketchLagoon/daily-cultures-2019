import React from "react";
import logo from "./logo.png";
import gutText from "./text.png";
import gut from "./gut.png";
import mugGrin from "./mugGrin.png";
import twinkles from "./twinkles.png";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import mascot from "../Home/footer/twinkles.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import "../Home/App.css";
import "./science.css";

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

function Science() {
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
            <img
              src={gut}
              className="intro-img intro-img3"
              alt="simply gut happy"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="intro-txt">
              <div className="listTitle">
                <h2>the good bacteria in</h2>
                <h1 id="scienceDC">Daily Cultures</h1>
                <div className="dottedLine"></div>
              </div>
              <br></br>
              <h2 id="subtitle">
                What makes our <span className="smart" id="scienceSmart">smart cultures </span> 
                better than others
              </h2>
              <ul className="listContainer">
                <li className="scienceListItem">
                  <img src={one} className="one" />
                  <p>
                    Our uique smart cultures are{" "}
                    <span className="shell">protected by a natural shell</span>,
                    which enables them to survive extremes of temperature and
                    stomach acid
                  </p>
                </li>
                <li className="scienceListItem">
                  <img src={two} className="two" />
                  <p>
                    This means they arrive safely in the gut where they 'come
                    alive' to support the body's own naturally occurring good
                    bacteria.{" "}
                    <span className="effective">
                      Making them more effective!
                    </span>
                  </p>
                </li>
                <li className="scienceListItem">
                  <img src={three} className="three" />
                  <p>
                    Our extraordinary smart cultures are natural with no need
                    for additives and importantly, they{" "}
                    <span className="shell">don't require added sugar</span> to
                    survive and they have a surprisingly long shelf life.
                  </p>
                </li>
                <li className="scienceListItem">
                  <img src={four} className="four" />
                  <p>
                    And amazingly,{" "}
                    <span className="effective">
                      they don't taste of anything...
                    </span>{" "}
                    so there is no compromise to the great taste of the 100%
                    natural ingredients we use.
                  </p>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        {/* video */}
        <Grid container className="videoGrid">
          <Grid item lg={3} className="twinkles">
            <img src={twinkles} alt="twinkles" className="leftTwinkles" />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <iframe
              src="https://player.vimeo.com/video/298611549"
              className="video"
              width="850"
              height="480"
              frameborder="0"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
            ></iframe>
          </Grid>
          <Grid item lg={3} className="twinkles">
            <img src={twinkles} alt="twinkles" className="rightTwinkles" />
          </Grid>
        </Grid>
        {/* faq */}
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img src={mugGrin} className="intro-img intro-img-cup" alt="simply gut happy" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Container>
            <div className="introTxt">
              <div className="listTitle">
                <h2>common questions about</h2>
                <h1 id="introDC" className="scienceDC">Daily Cultures</h1>
                <div className="dottedLine"></div>
              </div>
              <br></br>

              <div className="faq">
                <div className="questionBox">
                  <div className="question">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>Q:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p className="questionBold">What are the cultures in your products?</p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="answer">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>A:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p>
                            <span className="answerBold">
                              Cultures are more commonly known as probiotics.
                            </span>{" "}
                            They are live micro-organisms, which, when taken in
                            adequate amounts offer health benefits... We also
                            call probiotics 'good' or 'friendly' bacteria
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="questionBox">
                  <div className="question">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>Q:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p className="questionBold">
                            Will it taste like my normal food and drink?
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="answer">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>A:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p>
                            <span className="answerBold">Yes.</span> Our
                            products taste just like normal. The good bacteria
                            we use is taste free, so the natural, delicious
                            taste is 100% unaffected.
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="questionBox">
                  <div className="question">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>Q:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p className="questionBold">
                            Can the cultures survive boiling water and
                            microwave?
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="answer">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>A:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p>
                            <span className="answerBold">Yes.</span> Our
                            cultures are encased in a 100% natural protective
                            shell. This shields them from harsh conditions like
                            heat or stomach acid.
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="questionBox">
                  <div className="question">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>Q:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p className="questionBold">
                            Can I have more than one portion a day?
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="answer">
                    <Grid container className="">
                      <Grid item lg={1}>
                        <div className="label">
                          <p>A:</p>
                        </div>
                      </Grid>
                      <Grid item lg={11} sm={12}>
                        <div className="detail">
                          <p>
                            <span className="answerBold">Yes.</span> Have as
                            much as you like. Your body can never have enough
                            good bacteria!
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
            </Container>
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
          <Grid item xs={12} sm={12} md={6} className="cultures">
            <div>
              <a href="/trial">
                <h2 className="subtext">grab yourself a</h2>
                <h1 className="navTitle" id="culturesNav">
                  Taster pack
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
              <h1 id="scienceIntroDC">Then say hello</h1>
              <div className="dottedLine"></div>
              <div className="socials">
                <a href="https://www.instagram.com/daily_cultures_/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/DailyCultures/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/DailyCultures">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#contactModal">
                  <i className="far fa-envelope"></i>
                </a>
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

export default Science;
