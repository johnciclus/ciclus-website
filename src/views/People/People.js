import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import School from "@material-ui/icons/School";
import Add from "@material-ui/icons/Add";

import AssignmentTurnedIn from "@material-ui/icons/AssignmentTurnedIn";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/john.jpeg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Ciclus People"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/switzerland.jpeg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>John Garavito Su&aacute;rez</h3>
                    <h6>Software Engineer and Computer Scientist</h6>
                    <Button
                      href="https://www.linkedin.com/in/johnciclus/"
                      target="_blank"                       
                      justIcon 
                      link 
                      className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    
                    <Button
                      href="https://www.instagram.com/johnciclus/"
                      target="_blank" 
                      justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                I’m John Garavito Su&aacute;rez, a dedicated and self-motivated person who can adapt to change 
                and do my best to solve problems creatively. 
                I enjoy developing innovative software solutions based on 
                Artificial Intelligence and Scientific approaches.
              </p>
              <Button
                href="/john"
                color="primary">
                <Add/> More information
              </Button>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
