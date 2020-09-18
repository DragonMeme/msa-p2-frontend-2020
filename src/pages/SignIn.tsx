import React, { useState } from "react";
import "./SignIn.css";
import { Card, CardContent, TextField, Box, Button } from "@material-ui/core";
import User from "../util/User";
import Requests from "../util/Requests";
import { IUserPass } from "../util/Interface";
import { useHistory } from "react-router-dom";

export default function SignIn(props: any) {
    const history = useHistory();
    const [state, setState] = useState<IUserPass>({
            userName: null,
            passWord: null
        }
    )

    const handleUserNameChange = (s: string | null) => {
        setState({
            userName: s,
            passWord: state.passWord
        });         
    }

    const handlePassWordChange = (s: string | null) => {
        setState({
            userName: state.userName,
            passWord: s
        });         
    }

    const handleSubmit = () =>{
        Requests.login(state).then(
            response => {
                if(response.ok){
                    User.setUserState(state);
                    history.push("/");
                }else{
                    setState({
                        userName: state.userName,
                        passWord: state.passWord,
                    })
                    history.push("/signin/incorrectdetails")
                }
            }
        )
    }

    document.title = "Sign In"
    return(
        <div className="SignPage">
            <h1>Sign in to ArtiCool!</h1>
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
                                Log In
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}