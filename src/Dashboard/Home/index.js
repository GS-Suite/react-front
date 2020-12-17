import React from 'react';
import {Container, Typography, Divider} from '@material-ui/core';


export default function Home() {

  document.title = "Dashboard | GS-Suite"

  return (
    <Container>
        <Typography variant="h4">
            Welcome, User
        </Typography>
        <Divider />
    </Container>
  );
}
