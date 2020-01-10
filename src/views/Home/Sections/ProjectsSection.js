import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FindInPage from "@material-ui/icons/FindInPage";
import BugReport from "@material-ui/icons/BugReport";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our trajectory</h2>
          <h5 className={classes.description}>
            Ciclus Foundation has 5 years of experience in the design and development of Recommendation Systems, Simulation Systems, Knowledge Bases, and Financial Solutions.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Problem oriented"
              description="Each project starts with a business analysis where the problem is fully identified and defined, and continues with a data analysis where the problem is detailed."
              icon={FindInPage}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Innovative"
              description="During the design, a technological research is carried out to guarantee the most appropriate technologies and architecture. We automatize and apply artificial intelligence in every solution."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Quality"
              description="During the development, the best practices are applied to guarantee the quality in all aspects. We validate the use of international standards in every solution."
              icon={BugReport}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
