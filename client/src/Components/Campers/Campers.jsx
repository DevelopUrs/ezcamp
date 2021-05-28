import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Header, Text } from '../CampInfo/CampInfo.styles.jsx';
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';
import Profile from '../ProfileCard/ProfileCard.jsx';
import sampleParent from '../../Components/sample_parent.jsx';

const Campers = () => {
  const { camp } = useContext(LandingPageContext);
  // const [allCampers, setAllCampers] = useState([]);

  let campers = [];
  for (let i = 0; i < sampleParent.length; i++) {
    if (sampleParent[i].id === camp.id) {
      for (let j = 0; j < sampleParent[i].parents.length; j++) {

        // campers.push(sampleParent[i].children[j]);
      }
    }
  }

  console.log(campers);

  return (
    <>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Header>Our Campers</Header>
      </Grid>
      {/* {campers.map((camper) =>
        <Profile camper={camper} />
      )} */}
      <Profile />
    </Grid>
    </>
  );
};

export default Campers;