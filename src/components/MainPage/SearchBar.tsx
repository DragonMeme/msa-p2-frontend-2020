import { IUserInput } from "../../util/Interface";
import React, { useState } from "react";
import { Button, TextField, AppBar, Box } from "@material-ui/core";
import "./SearchBar.css";

interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}

function SearchBar(props: ISearchBarProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    
    const handleSearchQueryChange = (s: string | null) => {
        setSearchQuery(s);          
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    const handleSubmit = () => {
        console.log(SearchQuery);

        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
            let UserInput: IUserInput = {
                SearchQuery: null
            }
            props.SetUserInput(UserInput);
        }
    }

    return (
        <div className="SearchBarComponent">
            <AppBar position="static">
                <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="noWrap"
                    width="100%"
                    height="80px"
                >
                    <Box 
                        width="10px"
                    ></Box>
                    <Box
                        width={{xs:"300px", sm:"450px", md:"600px"}}
                    >
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth={true}
                            label="Search for Articles"
                            variant="outlined"
                            error={HasFocus && SearchQuery === ""}
                            onClick={() => setHasFocus(true)}
                            value={SearchQuery}
                            onChange={e => handleSearchQueryChange(e.target.value)}
                        />
                    </Box>
                    <Box 
                        width="100px"
                    >
                        <Button 
                            variant="contained" 
                            color="default" 
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </AppBar>
        </div>
    )
}

export default SearchBar