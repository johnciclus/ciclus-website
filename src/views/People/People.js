import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import School from "@material-ui/icons/School";
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
            </div>
            <GridContainer justify="left">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Education",
                      tabIcon: School,
                      tabContent: (
                        <GridContainer justify="left">
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Master Degree</b></p>
                            <p ><b>University: </b>Universidade de S&atilde;o Paulo</p>
                            <p ><b>Field of study: </b>Computer Science - Semantic web</p>
                            <p><b>Location: </b>S&atilde;o Paulo, Brasil</p>
                            <p><b>Duration: </b>2014 - 2016</p>

                            <p>Master dissertation: Ontologies and DSLs in the generation of Decision Support Systems, SustenAgro study case </p>
                            <p>Institute: Institute of Mathematical and Computer Sciences</p>
                            <p>Research lab.: Intermídia Interactive Web and Multimedia Systems</p>

                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Bachelor's degree</b></p>
                            <p ><b>University: </b>Universidad Industrial de Santander</p>
                            <p ><b>Field of study: </b>Systems Engineering - Systems dynamic</p>
                            <p><b>Location: </b>Bucaramanga, Colombia</p>
                            <p><b>Duration: </b>2007 - 2012</p>

                            <p>During my degree in system engineer at Industrial University of Santander, my responsibilities includes the development of web systems to supporting the decision making process in agricultural planning (EcoGranja System). Additionally, I worked as a web developer for one year in the development of web systems to support modeling with system dynamics (Evoluci&oacute;n Web Platform).</p>
                            <p>Degree Project: EcoGranja: Herramienta software para el dise&ntilde;o de granjas integrales agropecuarias, un enfoque din&aacute;mico sist&eacute;mico </p>
                            <p>Laureate distinction in Degree Project of Systems Engineering.</p>
                            <p>Institute: Escuela de Ingenier&iacute;a de Sistemas e Inform&aacute;tica</p>
                            <p>Research lab.: Grupo SIMON</p>

                            <br/>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Experience",
                      tabIcon: AssignmentTurnedIn,
                      tabContent: (
                        <GridContainer justify="left">
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Research Engineer</b></p>
                            <p ><b>Company: </b>Brain Agriculture</p>
                            <p><b>Location: </b>Campinas Area, Brasil</p>
                            <p><b>Duration: </b>March 2019 - September 2019</p>

                            <p>Research and development of blockchain-based solution to support agricultural credit process, project financed by Fapesp PIPE (Innovative Small Business Research)</p>
                            <p style={{textAlign: 'left'}}>
                              <b>Achieved goals:</b>
                              <ul>
                                <li>Development of 3 PoCs using Corda R3 (Java Kotlin), Quorum (Solidity) and Hyperledger Fabric (NodeJs)</li>
                                <li>Evaluation of these 3 PoC through Proof of Technology</li>
                                <li>Development and testing of the first version of Credit Platform using Hyperledger Fabric and Smart Contracts written in NodeJS.</li>
                                <li>Technical documentation and final reports</li>
                              </ul>
                            </p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Software Developer</b></p>
                            <p><b>Company: </b>IBM Brasil</p>
                            <p><b>Location: </b>S&atilde;o Paulo, Brasil</p>
                            <p><b>Duration: </b>June 2017 - January 2019</p>

                            <p>Software developer of analytics and cognitive solutions at IBM CIO (Chief Information Officer), I developed many projects using IBM Watson technologies as Watson conversation and Watson IoT</p>
                            <p>The main project was Cortex (Cognitive Recommendation Task Experience) a recommendation system of technicians and organizer of agendas, this system makes use of algorithms of artificial intelligence.</p>

                            <p style={{textAlign: 'left'}}>
                              <b>Achieved goals:</b>
                              <ul>
                                <li>Elicitation and definition of requirements (Agile methodologies and UML)</li>
                                <li>Design of the Recommendation Logic (Business Modeling)</li>
                                <li>Infrastructure setup to support MongoDB database and Microservices ( Flask Framework).</li>
                                <li>Development and testing of API Service (Python)</li>
                                <li>Release of a production version and updates (IBM Cloud)</li>
                              </ul>
                            </p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Full Stack Engineer</b></p>
                            <p><b>Company: </b>Corporaci&oacute;n Ruta N</p>
                            <p><b>Location: </b>Medell&iacute;n, Colombia</p>
                            <p><b>Duration: </b>August 2016 - Febraury 2017</p>

                            <p>Software developer of analytics and cognitive solutions at IBM CIO (Chief Information Officer), I developed many projects using IBM Watson technologies as Watson conversation and Watson IoT</p>
                            <p>"Speedy" was writen in NodeJS and integrated the following technologies:.</p>

                            <p style={{textAlign: 'left'}}>
                              <ul>
                                <li>Loopback Restful Framework - https://loopback.io/</li>
                                <li>Google Maps API - https://developers.google.com/maps/</li>
                                <li>Facebook Messenger API - https://developers.facebook.com/docs/messenger-platform</li>
                                <li>Wit - https://wit.ai/</li>
                                <li>MongoDB - https://www.mongodb.com/</li>
                                <li>Parse platform - https://parseplatform.github.io/</li>
                              </ul>
                            </p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Research Assistant</b></p>
                            <p><b>Company: </b>Universidad Industrial de Santander</p>
                            <p><b>Location: </b>Bucaramanga, Colombia</p>
                            <p><b>Duration: </b>January 2013 - December 2013</p>

                            <p>I developed a web based platform for supporting modeling and simulation with Systems Dynamics, implementing Evoluci&oacute;n web system</p>
                            <p>"Evoluci&oacute;n Web" was writen in Python and integrated the following technologies:.</p>

                            <p style={{textAlign: 'left'}}>
                              <ul>
                                <li>Django Framework</li>
                                <li>DBMS (Posgres)</li>
                                <li>HTML</li>
                                <li>Javascript</li>
                                <li>CSS</li>
                              </ul>
                            </p>
                            <br/>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="left">
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Sofware Development</b></p>
                            <p><b>Projects: </b>EcoGranja, Evoluci&oacute;n Web, SustenAgro, Speedy, Cortex Recommender, Brain Consortium</p>
                            <p><b>Years of experience: </b>10</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Research</b></p>
                            <p><b>Projects: </b>EcoGranja, Evoluci&oacute;n Web, SustenAgro</p>
                            <p><b>Years of experience: </b>5</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Web Services</b></p>
                            <p><b>Projects: </b>Evoluci&oacute;n Web, SustenAgro, Speedy, Cortex Recommender</p>
                            <p><b>Years of experience: </b>5</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Javascript</b></p>
                            <p><b>Projects: </b>EcoGranja, Evoluci&oacute;n Web, SustenAgro, Speedy, Cortex Recommender, Brain Consortium</p>
                            <p><b>Years of experience: </b>5</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>GIT</b></p>
                            <p><b>Projects: </b>EcoGranja, Evoluci&oacute;n Web, SustenAgro, Speedy, Cortex Recommender, Brain Consortium</p>
                            <p><b>Years of experience: </b>5</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Artificial Intelligence</b></p>
                            <p><b>Projects: </b>SustenAgro, Cortex Recommender</p>
                            <p><b>Years of experience: </b>4</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Linux</b></p>
                            <p><b>Projects: </b>SustenAgro, Speedy, Cortex Recommender, Brain Consortium</p>
                            <p><b>Years of experience: </b>4</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Python</b></p>
                            <p><b>Projects: </b>Evoluci&oacute;n Web, Cortex Recommender</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Mathematical Modeling</b></p>
                            <p><b>Projects: </b>EcoGranja, Evoluci&oacute;n Web, Cortex Recommender</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Semantic Web</b></p>
                            <p><b>Projects: </b>SustenAgro</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Sustainability</b></p>
                            <p><b>Projects: </b>EcoGranja, SustenAgro</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Agricultural Research</b></p>
                            <p><b>Projects: </b>EcoGranja, SustenAgro, Brain Consortium</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Data Analysis</b></p>
                            <p><b>Projects: </b>SustenAgro, Cortex Recommender</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>MongoDB</b></p>
                            <p><b>Projects: </b>Speedy, Cortex Recommender</p>
                            <p><b>Years of experience: </b>3</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>JAVA</b></p>
                            <p><b>Projects: </b>SustenAgro</p>
                            <p><b>Years of experience: </b>2</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>SQL</b></p>
                            <p><b>Projects: </b>EcoGranja, Evoluci&oacute;n Web</p>
                            <p><b>Years of experience: </b>2</p>
                            <br/>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <p><b>Blockchain</b></p>
                            <p><b>Projects: </b>Brain Consortium</p>
                            <p><b>Years of experience: </b>1</p>
                            <br/>
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
