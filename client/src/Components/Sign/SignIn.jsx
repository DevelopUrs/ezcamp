import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LandingPageContext } from '../../Contexts/LandingPageContext.jsx';
import logo from '../../../dist/logo.png';
import Styled from 'styled-components';
import sampleParent from '../../Components/sample_parent.jsx';
import sampleCounselor from '../../Components/sample_Counselor.jsx';

const Logo = Styled.img`
  height: 15%;
  width: 15%;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const { setLandingPage, email, setEmail, setProfile, camp, getUserInfo } = React.useContext(LandingPageContext);
  const classes = useStyles();

  const createAccount = () => {
    setLandingPage('SignUp');
  }

  const updateProfile = () => {
    for (let i = 0; i < sampleParent.length; i++) {
      if (sampleParent[i].id === camp.id) {
        for (let j = 0; j < sampleParent[i].parents.length; j++) {
          //check if user is a parent
          if (sampleParent[i].parents[j].email === email) {
            getUserInfo(sampleParent[i].parents[j]);
            setProfile('Parent');
            setLandingPage('');
          }
          //check if user is a camper
          for (let k = 0; k < sampleParent[i].parents[j].children.length; k++) {
            if (sampleParent[i].parents[j].children[k].email === email) {
              getUserInfo(sampleParent[i].parents[j]);
              setProfile('Camper');
              setLandingPage('');
            }
          }
        }
      }
    }
    //check if user is a counselor
    for (let i = 0; i < sampleCounselor.length; i++) {
      if (sampleCounselor[i].id === camp.id) {
        for (let j = 0; j < sampleCounselor[i].counselors.length; j++) {
          if (sampleCounselor[i].counselors[j].email === email) {
            getUserInfo(sampleCounselor[i].counselors[j]);
            setProfile('Counselor');
            setLandingPage('');
          }
        }
      }
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Logo src={logo}></Logo>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={updateProfile}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={createAccount} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
