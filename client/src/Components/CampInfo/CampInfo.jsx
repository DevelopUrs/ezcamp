import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Header, Text } from './CampInfo.styles.jsx';
import Profile from '../ProfileCard/editProfileCard.jsx';
import Button from '@material-ui/core/Button';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';
import sampleCounselors from '../sample_Counselor.jsx';

const CampInfo = () => {
  const {toggleCampAbout} = useContext(ModalContext);
  const { camp } = useContext(LandingPageContext);

  let counselors = sampleCounselors[0].counselors;
  let logo = camp.name[0];

  return (
    <>
    <Grid container spacing={4}>
      <Grid item xs={1}>
        <Avatar>{logo}</Avatar>
      </Grid>
      <Grid item xs={11}>
        <Header>{ camp.name }</Header>
      </Grid>
      <Grid item xs={12}>
        <Header>About Us</Header>
        <Button size="small" color="primary" onClick={toggleCampAbout}>Edit</Button>
        <Text>{camp.description}</Text>
      </Grid>
      <Grid item xs={12}>
        <Header>Our Counselors</Header>
      </Grid>
      {counselors.map(counselor =>
        <Profile counselor={counselor}/>)}
    </Grid>
    </>
  );
}

export default CampInfo;