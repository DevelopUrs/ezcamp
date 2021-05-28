import React, { useState, useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Header } from '../CampInfo/CampInfo.styles.jsx';
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';
import Profile from '../ProfileCard/camperProfileCard.jsx';
import sampleParent from '../../Components/sample_parent.jsx';

const Campers = () => {
  const { camp } = useContext(LandingPageContext);
  const [allCampers, setAllCampers] = useState([]);

  useEffect(() => {
    let campers = [];
    for (let i = 0; i < sampleParent.length; i++) {
      if (sampleParent[i].id === camp.id) {
        for (let j = 0; j < sampleParent[i].parents.length; j++) {
          for (let k = 0; k < sampleParent[i].parents[j].children.length; k++) {
            campers.push(sampleParent[i].parents[j].children[k]);
          }
        }
      }
      setAllCampers(campers);
    }
  }, [camp])

  return (
    <>
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Header>Our Campers</Header>
      </Grid>
      {allCampers.map((camper) =>
        <Profile camper={camper} />
      )}
    </Grid>
    </>
  );
};

export default Campers;
