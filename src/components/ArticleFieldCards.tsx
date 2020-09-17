import React, { useEffect, useState } from 'react';
import Requests from '../util/Requests';
import { IArticleSummary } from '../util/Interface';
import ArticleSummaryBlock from './ArticleSummaryBlock';
import "./ArticleFieldCards.css";
import { Box } from '@material-ui/core';

interface IState{
    error: boolean,
    results: IArticleSummary[]
}

interface IResultsCardProps{
    SearchQuery: (string | null);
}

export default function ArticleFieldCards(props: IResultsCardProps){
    const [articleSummaries, setArticleSummaries] = useState<IState>({error: true, results: []})
    let ArticleSummaryCards = [];

    useEffect(() => {
        Requests.getArticleSummary(props.SearchQuery).then(response => response.json())
        .then(response => {
            setArticleSummaries({results: response, error: false})
        }).catch(e => {
            console.log(e.message)
        })
    });

    function ToArticleSummaryHTML(a: IArticleSummary){
        return(
            <Box 
                maxWidth="500px" 
                paddingRight="5px" 
                paddingLeft="5px" 
                paddingTop="10px"
            >
                <ArticleSummaryBlock 
                    articleID={a.articleID} 
                    author={a.author} 
                    title={a.title}
                    introduction={a.introduction} 
                    createdDate={a.createdDate}
                />
            </Box>
            
        )
    }
    
    if(articleSummaries.error){
        return(
            <h1 className="ErrorTextResultMessage">
                Error connecting to the backend!
            </h1>
        )
    }else if(articleSummaries.results.length === 0){
        return(
            <h1 className="NoResultMessage">
                No results to show!
            </h1>
        )
    }else{ // At this point, the API has returned some results to show.
        for(let ArticleSummary of articleSummaries.results){
            ArticleSummaryCards.push(
                ToArticleSummaryHTML(ArticleSummary)
            )
        }
        return(
            <div className="ResultCards">
                <Box 
                    display="flex"
                    alignItems="center"
                    flexWrap="wrap"
                    width="100%"
                >
                    {ArticleSummaryCards}
                </Box>
            </div>
        )
    }
    
}