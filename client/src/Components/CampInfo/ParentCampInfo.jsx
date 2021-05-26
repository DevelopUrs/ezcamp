import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Header, Text } from './CampInfo.styles.jsx';
import Profile from '../ProfileCard/ProfileCard.jsx';

const CampInfo = () => {
  return (
    <>
    <Grid container spacing={4}>
      <Grid item xs={1}>
        <Avatar>A</Avatar>
      </Grid>
      <Grid item xs={11}>
        <Header>Adventure Kids Camp</Header>
      </Grid>
      <Grid item xs={12}>
        <Header>About Us</Header>
        <Text>ADVENTURE KIDS CAMPS is a full-day camp with a wide variety of unique experiences sure to delight your child!
        Activities are structured to be healthy, engaging, educational, and most of all, FUN. A highly trained, enthusiastic staff ensures that your child is safe, happy, and making positive relationships with fellow campers. ADVENTURES KIDS CAMP is also economical and provides families with flexible options to best fit summertime schedules.</Text>
      </Grid>
      <Grid item xs={12}>
        <Header>Our Leaders</Header>
        <Profile />
      </Grid>
      <Grid item xs={12}>
        <Header>Our Counselors</Header>
        <Profile />
      </Grid>
    </Grid>
    </>
  );
}

export default CampInfo;