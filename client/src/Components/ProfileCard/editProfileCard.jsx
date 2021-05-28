import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ModalContext } from '../../Contexts/ModalContext.jsx';
//iimport LandingPage Context
//import sampleCounselors

import Styled from 'styled-components';

const Container = Styled.div`
  margin: auto;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const {toggleEditProfile} = useContext(ModalContext);
  //use user from LandingPage
  const classes = useStyles();

  let img = props.counselor.profileImageURL;

  return (
    <Container>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.counselor.firstName + ' ' + props.counselor.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We are in the kid business. Our staff have a heart for reaching kids
            and building lasting relationships through sports camping. We desire
            to love, protect, serve, encourage, and challenge each kid who walks
            through the camp gates.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={toggleEditProfile}>
          Edit
        </Button>
      </CardActions>
    </Card>
    </Container>
  );
}
