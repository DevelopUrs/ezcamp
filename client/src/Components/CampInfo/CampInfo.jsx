import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Header, Text } from './CampInfo.styles.jsx';
import Profile from '../ProfileCard/editProfileCard.jsx';
import Button from '@material-ui/core/Button';
import { ModalContext } from '../../Contexts/ModalContext.jsx';

const CampInfo = () => {
  const {toggleCampAbout} = useContext(ModalContext);

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
        <Button size="small" color="primary" onClick={toggleCampAbout}>Edit</Button>
        <Text>ADVENTURE KIDS CAMPS is a full-day camp with a wide variety of unique experiences sure to delight your child!
        Activities are structured to be healthy, engaging, educational, and most of all, FUN. A highly trained, enthusiastic staff ensures that your child is safe, happy, and making positive relationships with fellow campers. ADVENTURES KIDS CAMP is also economical and provides families with flexible options to best fit summertime schedules.</Text>
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