import React, { useState } from "react";
import { IArticle, IFields } from "../util/Interface";
import "./FullArticle.css";
import { AppBar, Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Requests from "../util/Requests";

export default function FullArticle(props: any){
    const history = useHistory();
    let fields = [];

    const [FullArticle, SetFullArticle] = useState<IArticle>(
        {
            articleID: 0,
            author: "",
            createdDate: "",
            title: "",
            introduction: "",
            fields: []
        }
    );

    const handleHomeButton = () => {
        history.push("/");
    }

    const articleID : number = parseInt(window.location.search.slice(4));
    Requests.getArticle(articleID).then(
        response => {
            if(response.ok){
                return response.json()
            }else{
                return undefined;
            }
        }
    ).then(
        object => {
            if(object !== undefined){
                SetFullArticle(object);
            }
        }
    );

    function convertFieldToHTML(field: IFields){
        return(
            <>
                <h3 className="FieldHeader">{field.name}</h3>
                <p className="FieldBody">{field.value}</p>
            </>
        )
    }

    for(let field of FullArticle.fields){
        fields.push(
            convertFieldToHTML(field)
        )
    }

    document.title = FullArticle.author !== "" ? FullArticle.title : "Loading...";
    return(
        <div className="FullArticlePage">
            <div className="HeaderArticle">
                <AppBar position="static">
                    <Box 
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        flexWrap="noWrap"
                        width="100%"
                        height="80px"
                    >
                        <Button 
                            variant="contained" 
                            color="default" 
                            onClick={handleHomeButton}
                        >
                            Go Main Page
                        </Button>
                    </Box>
                </AppBar>
            </div>
            <div className="ArticleBlock">
                <h1>{FullArticle.title}</h1>
                <p className="articleProperties">Created on : {FullArticle.createdDate.slice(0,19)}<br/>By {FullArticle.author}</p>
                <p className="introduction">{FullArticle.introduction}</p>
                {fields}
            </div>
        </div>
    )
}