import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Header, Text } from '../CampInfo/CampInfo.styles.jsx';
import Profile from '../ProfileCard/ProfileCard.jsx';

const Campers = () => {
  return (
    <>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Header>Our Campers</Header>
      </Grid>
        <Profile />
        <Profile />
        <Profile />
    </Grid>
    </>
  );
};

export default Campers;