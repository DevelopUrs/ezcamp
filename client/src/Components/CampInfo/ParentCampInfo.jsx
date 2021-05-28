import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Header, Text } from "./CampInfo.styles.jsx";
import Profile from "../ProfileCard/profileCard.jsx";
import { LandingPageContext } from "../../Contexts/LandingPageContext.jsx";
import sampleCounselors from "../sample_Counselor.jsx";

const CampInfo = () => {
  const { camp } = useContext(LandingPageContext);
  let counselors = sampleCounselors[0].counselors;
  // let profiles = [];
  // counselors.forEach(counselor => profiles.push(<Profile counselor={counselor}/>));

  return (
    <>
      <Grid container spacing={4}>
        {/* <Grid item xs={1}>
          <Avatar>A</Avatar>
        </Grid>
        <Grid item xs={11}>
          <Header>Adventure Kids Camp</Header>
        </Grid>
        <Grid item xs={12}>
          <Header>About Us</Header>
          <Text>
            ADVENTURE KIDS CAMPS is a full-day camp with a wide variety of
            unique experiences sure to delight your child! Activities are
            structured to be healthy, engaging, educational, and most of all,
            FUN. A highly trained, enthusiastic staff ensures that your child is
            safe, happy, and making positive relationships with fellow campers.
            ADVENTURES KIDS CAMP is also economical and provides families with
            flexible options to best fit summertime schedules.
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Header>Our Leaders</Header>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <Header>Our Counselors</Header>
          <Profile />
        </Grid>
      </Grid> */}

        <Grid item xs={11}>
          <Header>{camp.name}</Header>
        </Grid>
        <Grid item xs={12}>
          <Header>About Us</Header>
          <Text>{camp.description}</Text>
        </Grid>
        <Grid item xs={12}>
          <Header>Our Counselors</Header>
        </Grid>
        {counselors.map((counselor) => (
          <Profile counselor={counselor} />
        ))}
      </Grid>
    </>
  );
};

export default CampInfo;
