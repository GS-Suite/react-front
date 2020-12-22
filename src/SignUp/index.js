import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState, useEffect } from 'react';
import {
  CssBaseline, Typography,
  TextField, Container,
  Checkbox, Avatar, Divider,
  Button, Link, List, ListItem,
  Grid, Slide, Grow,
 } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';
import API_BASE_URL from "../constants";


const SignUp = (props) => {

  document.title = "Sign Up | GS-Suite";

  const classes = useStyles();
  const [name, setName] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [password1, setPassword1] = useState(undefined);
  const [password2, setPassword2] = useState(undefined);
  const [errors, setErrors] = useState({});

  function signup(e){
    const data = {
      "name": name,
      "username": username,
      "password1": password1,
      "password2": password2
    }
    console.log(data);
    axios.post(API_BASE_URL + "sign_up/", data).then((response) => {
      if(response.status === 200){
        console.log(response.data);
        if (response.data["result"] === true ){
          props.history.push("/signin");
        }
        else{
          console.log(response.data["errors"]);
          setErrors(response.data["errors"]);
        }
        
      }
    });
    e.preventDefault();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
          <Slide direction="down" in={true} timeout={600}>
            <Typography variant="h4">
              GS-Suite
            </Typography>
          </Slide>
          <Slide direction="down" in={true} timeout={600}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Slide>
          <Grow in={true} timeout={1000}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </Grow>
          <form method="post" className={classes.form} onSubmit={signup}>
          <Slide direction="left" in={true} timeout={800}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                autofocus0="true"
              />
          </Slide>
            {errors["name"] ? (
                <List>
                  {errors["name"].map((item, index) => (
                    <ListItem>
                      <Typography variant="body" style={{"color": "#ff0000"}}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (<br />)
            }
          <Slide direction="right" in={true} timeout={1200}>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
            />
          </Slide>
          {errors["username"] ? (
                <List>
                  {errors["username"].map((item, index) => (
                    <ListItem>
                      <Typography variant="body" style={{"color": "#ff0000"}}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (<br />)
            }
          <Slide direction="left" in={true} timeout={1400}>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password1"
                onChange={(e) => setPassword1(e.target.value)}
              />
          </Slide>
          {errors["password1"] ? (
                <List>
                  {errors["password1"].map((item, index) => (
                    <ListItem>
                      <Typography variant="body" style={{"color": "#ff0000"}}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (<br />)
            }
          <Slide direction="right" in={true} timeout={1600}>
          <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password2"
                onChange={(e) => setPassword2(e.target.value)}
              />
          </Slide>
          {errors["password2"] ? (
                <List>
                  {errors["password2"].map((item, index) => (
                    <ListItem>
                      <Typography variant="body" style={{"color": "#ff0000"}}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (<br />)
            }
          <Slide direction="up" in={true} timeout={1800}>          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              >Sign Up
            </Button>
          </Slide>
          <Slide direction="up" in={true} timeout={2000}>
            <Container>
              <Grid container>
              <Grid item xs>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign In
                  </Link>
              </Grid>
            </Grid>
            
            <Divider />
            
            </Container>
            
            </Slide>
          </form>
        </div>
    </Container>
  );
}

export default SignUp;
