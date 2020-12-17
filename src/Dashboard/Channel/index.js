import React, { useState, useEffect } from 'react';
import {
    Container, Box, Button, Typography,
    Divider, List, ListItem, Card,
} from "@material-ui/core";

export default function Channel () {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);
    const [addNewVideoControl, setAddNewVideoControl] = useState(false);

    function getVideos () {
        setLoaded(true);
    }

    useEffect(() => {
        getVideos()   
      }, [loaded])

    return (
        <Container>
            <Typography variant="h4">
                Your Channel
            </Typography>
            <Divider />
            <br />
            <Box>
                <Button variant="contained" 
                    color="primary" onClick={() => (setAddNewVideoControl(!addNewVideoControl))}>
                    Add Video
                </Button>
                {
                    addNewVideoControl ? (
                        <Typography>
                            Add model
                        </Typography>
                    ) : (
                        <Typography />
                    )
                }
            </Box>
            <br />
            <Box>
                {
                    (videos.length <= 0) ? (
                        <Typography>
                            You haven't addded any videos...
                        </Typography>
                    ) : (
                        <List>
                            {
                                videos.map((item, index) => (
                                    <ListItem> {item} </ListItem>
                                ))
                            }
                        </List>
                    )
                }
            </Box>
        </Container>
    );
}