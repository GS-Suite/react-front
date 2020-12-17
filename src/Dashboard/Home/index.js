import React, { useState, useEffect } from 'react';
import {Container, Box, Typography, Divider} from '@material-ui/core';


export default function Home() {

  const [loaded, setLoaded] = useState(false);
  const [videos, setVideos] = useState([])

  document.title = "Dashboard | GS-Suite"

  function getSubscribed () {
    ////Get videos
    //setVideos(JSON.parse(response.data));
    setLoaded(true);
  }

  useEffect(() => {
    getSubscribed()   
  }, [loaded])

  return (
    <Container>
        <Typography variant="h4">
            Welcome, User
        </Typography>
        <br />
        <Divider />
        <br />
        <Box>
          {
            (videos.length <= 0) ? (
              <Typography>
                You haven't got any new videos
              </Typography>
            ) : (
              videos.map((item, index) => {
                <Typography>
                  {item}
                </Typography>
              })
            )
          }
        </Box>
    </Container>
  );
}
