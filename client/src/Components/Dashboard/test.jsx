import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import logo from '../../../dist/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={logo}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Mac Miller
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Bio:
          </Typography>
        </CardContent>
        {/* <div className={classes.controls}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel.
        </div> */}
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
    <Typography paragraph>
      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
      gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
      donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
      adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
      Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
      imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
      arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
      donec massa sapien faucibus et molestie ac.
    </Typography>
    </>
  );
}
