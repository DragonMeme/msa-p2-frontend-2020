import React from "react";
import { IArticle } from "../util/Interface";
import User from "../util/User";

export default class FullArticle extends React.Component<IArticle, any>{
    constructor(props:IArticle){
        super(props);
        this.setState(User.getUserState())
    }

    render(){
        document.title = this.props.title
        return(
            <div className="FullArticlePage">
            </div>
        )
    }
}