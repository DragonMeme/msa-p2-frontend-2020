import React from "react";
import "./ArticleSummaryBlock.css";
import { IArticleSummary } from "../util/Interface";
import { Card, Typography, CardContent, makeStyles, CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      width: 400
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

export default function(props: IArticleSummary){
    const history = useHistory();
    
    // Clicking the area around the result card should take you to the full article view.
    const routeChange = () => {
        localStorage.setItem("selected_article_id", String(props.articleID));
        history.push("/article?id=" + String(props.articleID));
    }

    const classes = useStyles();
    return(
        <Card className={classes.root} variant="outlined">
            <CardActionArea onClick={routeChange}>
                <CardContent className="ArticleSummaryBlock">
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom component="h6">
                        Author: {props.author}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.introduction}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}