import React, { useState, useEffect } from 'react';
import {
    Container, Box, Button, Typography,
    Divider, TextField,
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function Explore () {

    const [suggestions, setSuggestions] = useState([]);
    const [searchBox, setSearchBox] = useState(undefined);

    function getSuggestions () {
        //// get suggestions
        //setSuggestions(JSON.parse(response.data));
    }

    useEffect(() => {
        getSuggestions();
    }, [searchBox]);

    return (
        <Container>
            <Typography variant="h4">
                Explore
            </Typography>
            <br />
            <Divider />
            <br />
            <Box>
            <Autocomplete
                freeSolo
                disableClearable
                id="explore_search"
                options={suggestions.map((option) => option.title)}
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    margin="normal"
                    onChange={e => setSearchBox(e.target.value)}
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                />
                )}
            />
            </Box>
        </Container>
    );
}