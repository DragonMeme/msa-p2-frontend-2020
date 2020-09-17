import React from "react";
import "./SignOut.css";
import User from "../util/User";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

interface IUser{
    userName: string | null;
}

export default function SignOut(props:any){
    const history = useHistory();

    if(User.getUserState() === undefined){
        history.push("/");
    }else{
        User.clearUserState();
    }

    const handleSubmit = () => {
        history.push("/");
    }

    document.title = "Successfully Signed Out"
    return(
        <div className="SplashScreen">
            <h1>You have successfully signed out!</h1>
            <Button
            variant="contained" 
            color="default" 
            onClick={handleSubmit}
            >
                Click here to return to main page!
            </Button>
        </div>
    )
}