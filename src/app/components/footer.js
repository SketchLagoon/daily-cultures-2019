import React from "react";
import mascot from "./Home/footer/twinkles.png";
import Grid from "@material-ui/core/Grid";

import ContactModal from "./contact/ContactModal";
import ScrollDialog from "./ScrollDialog";

import { terms } from "../data/terms";
import { privacy } from "../data/privacy";

import "./Home/App.css";
import "./Products/products.css";

const Footer = () => (
  <Grid container className="footer">
    <Grid item xs={12} sm={12} md={6} className="footerMascot">
      <img src={mascot} className="mascot" alt="footer mascot" />
    </Grid>
    <Grid item xs={12} sm={12} md={6} className="footerText">
      <div className="listTitle">
        <h2>are you gut happy?</h2>
        <h1 id="productsIntroDC">Then say hello</h1>
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
          <ContactModal contactText={<i className="far fa-envelope hand" />} />
        </div>
        <div className="legal">
          <p>©Daily Cultures Limited. 2019</p>
          <ScrollDialog name="Terms." header="Terms" body={terms} />
          <ScrollDialog name="Privacy." header="Privacy" body={privacy} />
        </div>
      </div>
    </Grid>
  </Grid>
);

export default Footer;
