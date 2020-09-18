import React, { useState } from "react";
import "./SignUp.css";
import { Box, CardContent, Card, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { IUserPass } from "../util/Interface";
import Requests from "../util/Requests";
import User from "../util/User";

interface ISignUp{
    userName: string | null
    passWord: string | null
    confirmPassWord: string | null
}

export default function SignUp(props:any){
    const history = useHistory();
    const [NewAccount, setNewAccount] = useState<ISignUp>({userName: "", passWord: "", confirmPassWord: ""})
    let userDetails:IUserPass;

    const handleUserNameChange = (s: string | null) => {
        setNewAccount({
            userName: s,
            passWord: NewAccount.passWord,
            confirmPassWord: NewAccount.confirmPassWord
        });         
    }

    const handlePassWordChange = (s: string | null) => {
        setNewAccount({
            userName: NewAccount.userName,
            passWord: s,
            confirmPassWord: NewAccount.confirmPassWord
        });         
    }

    const handlePassWordConfirmationChange = (s: string | null) => {
        setNewAccount({
            userName: NewAccount.userName,
            passWord: NewAccount.passWord,
            confirmPassWord: s
        });         
    }

    const handleSubmit = () => {
        // Account has username and meets the following criteria.
        if(NewAccount.userName && NewAccount.userName.length > 0){
            if(NewAccount.passWord && NewAccount.passWord.length > 0){
                if(NewAccount.passWord === NewAccount.confirmPassWord){
                    userDetails = {
                        userName : NewAccount.userName,
                        passWord : NewAccount.passWord
                    }

                    Requests.createAccount(userDetails).then(
                        response => {
                            if(response.status === 200){
                                return response.json();
                            }else{
                                throw new Error("Something weht wrong!");
                            }
                        }
                    ).then( // Successfully created account.
                        () => {
                            User.setUserState(userDetails);
                            history.push("/");
                        }
                    ).catch(
                        err => console.error(err.message)
                    )
                }
            }
        }
        history.push("/signup/incorrectDetails")
    }

    const handleHome = () => {
        history.push("/");
    }

    document.title = "Register"
    return(
        <div className="SignPage">
            <h1>Register for ArtiCool!</h1>
            <Box
                width={{xs:"300px", sm:"500px"}}
            >
                <Card variant="outlined">
                    <CardContent className="LoginBoxComponent">
                        <Box 
                            paddingBottom="20px"
                        >
                            <TextField required
                                id="outlined-required"
                                fullWidth={true}
                                label="Username"
                                variant="outlined"
                                color="secondary"
                                onChange={e => handleUserNameChange(e.target.value)}
                            />
                        </Box>
                        <Box
                            paddingBottom="20px"
                        >
                            <TextField required
                                id="outlined-required"
                                fullWidth={true}
                                label="Password"
                                type="password"
                                variant="outlined"
                                color="secondary"
                                onChange={e => handlePassWordChange(e.target.value)}
                            />
                        </Box>
                        <Box
                            paddingBottom="20px"
                        >
                            <TextField required
                                id="outlined-required"
                                fullWidth={true}
                                label="Password"
                                type="password"
                                variant="outlined"
                                color="secondary"
                                onChange={e => handlePassWordConfirmationChange(e.target.value)}
                            />
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexWrap="noWrap"
                            width="100%"
                            height="80px"
                        >
                            <Button
                            variant="contained" 
                            color="default" 
                            onClick={handleSubmit}
                            >
                                Register
                            </Button>
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            flexWrap="noWrap"
                            width="100%"
                            height="80px"
                        >
                            <Button
                            variant="contained" 
                            color="default" 
                            onClick={handleHome}
                            >
                                Home
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}