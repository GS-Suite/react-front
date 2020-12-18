import SideBarData from './sidebar_data';
import { NavLink } from 'react-router-dom';
import useStyles from '../styles';
import {
  ListItemIcon, ListItemText,
  ListItem, Divider, Link,
  Drawer, List, Slide, Grow,
 } from '@material-ui/core';
import React from 'react';
import theme from '../../theme';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


export default function SideBar({props}) {
  const classes = useStyles();

  function logout(){
    localStorage.removeItem("token");
    props.history.push('/signin');
  }

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Divider />
        <List>
          <ListItem className={classes.SidebarLogo}>
          </ListItem>
          {SideBarData.map((item, index) => (
              <NavLink
                className={classes.drawerItem}
                activeStyle={{
                    fontWeight: "bolder",
                    color: theme.palette.secondary.main
                  }} 
                  to={item.path}>
              <Slide in={true} direction="right" timeout={300 * (index + 1)} >
                <ListItem button>
                    <ListItemIcon className={classes.icon}>
                      { item.icon }
                    </ListItemIcon>
                    <ListItemText >
                      {item.title}
                    </ListItemText>
                </ListItem>
              </Slide>
              </NavLink>
          ))}
          <Link onClick={logout}>
          <Grow in={true} timeout={2000}>
            <ListItem button>
                <ListItemIcon className={classes.icon}> <ExitToAppIcon /> </ListItemIcon>
                <ListItemText className={classes.drawerText} color="primary">
                  Logout
                </ListItemText>
            </ListItem>
          </Grow>
          </Link>
        </List>
      </Drawer>

  );
}
