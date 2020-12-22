import React, { useState, useEffect } from 'react';
import {
    Link, ButtonBase,
    Container, Box, Button, Typography, IconButton,
    Divider, TextField, Grid, GridList, GridListTile,
} from "@material-ui/core";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    // gridList: {
    //   width: 500,
    //   height: 200,
    // },
    search: {
        display: "flex",
    }
  }));

export default function Explore () {

    const [suggestions, setSuggestions] = useState([]);
    const testSuggestions = [
        "https://youtu.be/QAvHRJqKGug",
        "https://www.youtube.com/watch?v=7xJAV8Xo4v0",
        "https://www.youtube.com/watch?v=ct71suB2Anc",
        "https://www.youtube.com/watch?v=mCLrurFpIdM"
    ]
    var [suggestionMetaData, setSuggestionMetaData] = useState([]); //// can also initially keep this as random links
    const [searchBox, setSearchBox] = useState(undefined);
    const classes = useStyles();

    function getSuggestions () {
        //// get suggestions
        //setSuggestions(JSON.parse(response.data));
    }


    function searchAndLoad (event) {
        //// after, testSuggestions change to suggestions
        var metadataList = [];
        testSuggestions.map((item) => {
            //console.log(item);
            var apiUrl = "http://www.youtube.com/oembed?url=" + 
                item + "&format=json"
            axios.get(apiUrl).then((response) => {
                //console.log(response.data);
                metadataList.push(response.data);
            });
        });
        //console.log(testSuggestions);
        console.log(metadataList);
        setSuggestionMetaData(metadataList);
        event.preventDefault();
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
            <form onSubmit={searchAndLoad} >
                <Autocomplete
                    freeSolo
                    disableClearable
                    id="explore_search"
                    options={suggestions.map((option) => option.title)}
                    renderInput={(params) => (
                    <div className={classes.search}>
                        <TextField
                            {...params}
                            label="Search"
                            margin="normal"
                            onChange={e => setSearchBox(e.target.value)}
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                        <IconButton 
                            type="submit"
                            color="primary">
                                <SearchRoundedIcon />
                        </IconButton>
                        
                    </div>
                    )}
                />
            </form>
            <GridList cellHeight={160} className={classes.gridList}>
                {
                    suggestionMetaData.map((item, index) => (
                        <GridListTile key={index}>
                            <ButtonBase
                                focusRipple
                                key={item.title}
                                >
                                <img
                                    // width="200"
                                    // height="100"
                                    src={item.thumbnail_url}
                                 />
                                
                            </ButtonBase>                 
                        </GridListTile>
                        )
                    )
                }
            </GridList>
        </Container>
    );
}