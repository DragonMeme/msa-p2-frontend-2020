import React from "react";
import { IUserInput } from "../util/Interface";
import User from "../util/User";
import SearchBar from "../components/MainPage/SearchBar";
import ArticleFieldCards from "../components/MainPage/ArticleFieldCards";
import "./MainPage.css";
import { NavLink } from "react-router-dom";

interface IMainPageState{
    searchQuery: IUserInput;
    isLoggedIn: boolean;
}

export default class MainPage extends React.Component<any, IMainPageState>{
    constructor(props: any){
        super(props);

        this.state = {
            searchQuery: {SearchQuery:null},
            isLoggedIn: User.getUserState() !== undefined
        }
    }

    setSearchInput(a: IUserInput){
        this.setState({searchQuery:a})
    }

    renderSignInOption(){
        if(this.state.isLoggedIn) {
            return(
                <h5>You can search using keywords based on title or select one of the results shown below, or you may <NavLink to="/SignOut" className="NavLink" activeStyle={{color:"purple"}}>sign out</NavLink> of this account.</h5>
            );
        }else return(
            <h5>You can search using keywords based on title or select one of the results shown below. You may also <NavLink to="/SignIn" className="NavLink" activeStyle={{color:"purple"}}>sign in</NavLink> or <NavLink to="/SignUp" className="NavLink" activeStyle={{color:"purple"}}>register</NavLink>.</h5>
        );
    }

    renderWelcome(){
        if(this.state.isLoggedIn) {
            let user = User.getUserState()?.userName;
            return(<h2>Welcome to ArtiCool, {user}!</h2>)
        }else{
            return(<h2>Welcome to ArtiCool!</h2>)
        }
    }

    render(){
        document.title = "ArtiCool";
        return(
            <div className="MainPage">
                <SearchBar SetUserInput={(a: IUserInput) => this.setSearchInput(a)} />
                <div className="TheMainContent">
                    {this.renderWelcome()}
                    {this.renderSignInOption()}
                    <ArticleFieldCards SearchQuery={this.state.searchQuery.SearchQuery} />
                </div>
            </div>
        )
    }
}