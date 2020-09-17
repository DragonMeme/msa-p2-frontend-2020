import React from "react";
import { IArticle } from "../util/Interface";
import User from "../util/User";
import "./FullArticle.css";
import { AppBar, Box } from "@material-ui/core";

export default class FullArticle extends React.Component<IArticle, any>{
    constructor(props:IArticle){
        super(props);
        this.setState(User.getUserState())
    }

    render(){
        document.title = this.props.title
        return(
            <div className="FullArticlePage">
                <AppBar position="static">
                <Box 
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexWrap="noWrap"
                    width="100%"
                    height="80px"
                >
                    
                </Box>
            </AppBar>
            </div>
        )
    }
}