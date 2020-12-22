import React, { useState } from 'react';
import {
  Avatar, Button, CssBaseline,
  TextField, FormControlLabel, Checkbox,
  Link, Paper, Box, Grid, Typography,
 } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © GS-Suite '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://media.giphy.com/media/46zrGVRCwKPQDCIbcB/giphy.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === theme.palette.grey[50],
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


export default function SignIn (props) {

  document.title = "Sign In | GS-Suite"

  const classes = useStyles();
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const apiUrl = "http://127.0.0.1:8000/auth/jwt/";

  function Login (event) {
    const data = {
      "username" : username,
      "password" : password
    }
    axios.post(apiUrl, data).then((response) => {
      if(response.status === 200){
        if (response.data["token"] !== undefined) {
          localStorage.setItem("token", response.data["token"]);
          props.history.push("/dashboard");   
        } 
      }
    });
    event.preventDefault();
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Typography component="h1" variant="h7">
            GS-Suite
          </Typography> */}
          <img src={"./logo.jpg"} width="300" height="120"></img>
        </div>
    
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
            Sign In
          </Typography>
          <form className={classes.form} noValidate onSubmit={Login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              onChange={e => setUsername(e.target.value)}
              name="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              id="password"
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
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}