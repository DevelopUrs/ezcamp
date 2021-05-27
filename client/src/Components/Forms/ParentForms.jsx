import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Header = styled.div`
  text-align: left;
  margin: 15px;
  font-weight: 900;
  letter-spacing: .2rem;
  font-size: clamp(1rem, 5vw, 2rem);
  line-height: 1.3;
`;

const Header2 = styled.div`
  text-align: left;
  margin: 15px;
  font-weight: 900;
  letter-spacing: .2rem;
  font-size: clamp(1rem, 4vw, 1.5rem);
  line-height: 1.3;
`;

const Header3 = styled.div`
  text-align: left;
  margin: 15px;
  font-weight: 400;
  letter-spacing: .2rem;
  font-size: clamp(.5rem, 1rem);
  line-height: 1.3;
`;

const Text = styled.div`
  text-align: justify;
  margin: 15px;
`;

const Forms = () => {
  return (
    <>
    <Grid container spacing={4}>
      {/* <Grid item xs={1}>
        <Avatar>A</Avatar>
      </Grid> */}
      <Grid item xs={11}>
        <Header>Forms</Header>
      </Grid>
      <Grid item xs={12}>
        <Header2>Your Forms</Header2>
        <Header3>Upload your completed forms</Header3>
      </Grid>
      <Grid item xs={11}>
        <input type="file" id="myFile" name="filename"/>
        <input type="submit"/>
      </Grid>
      <Grid item xs={12}>
        <Header2>Forms and Instructions</Header2>
        <Header3>Download and complete your forms</Header3>
      </Grid>
    </Grid>
    </>
  );
}

export default Forms;