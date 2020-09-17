import { IUserPass } from "./Interface";
require("dotenv").config();

const BASE_URL = process.env.REACT_APP_SOME_URL;

export default class Requests {

    // Login.
    static async login(creds: IUserPass){
        let res = await fetch(BASE_URL + "/api/Users/Verify",{
            headers: {
                Accept: 'application/json'
            },
            method: "GET",
            body: JSON.stringify({ userName: creds.userName, passWord: creds.passWord })
        });

        return res;
    }

    // Grab a list of articles in summary form.
    static async getArticleSummary(query: string | null){
        let res:Response;
        if(query === null){
            res = await fetch(BASE_URL + "/api/Articles/Summary",{
                headers: {
                    Accept: 'application/json'
                },
                method: "GET"
            });
        }else{
            res = await fetch(BASE_URL + "/api/Articles/Summary/Query/" + query,{
                headers: {
                    Accept: 'application/json'
                },
                method: "GET"
            });
        }
        
        return res;
    }

    // Grab a full article metadata.
    static async getArticle(id: number){
        let res = await fetch(BASE_URL + "/api/Articles/Full/" + String(id),{
            headers: {
                Accept: 'application/json'
            },
            method: "GET"
        });

        return res;
    }

    // Edit article headers.
    // static async editArticle(editedArticle: IArticle, id: number){
    //     let res = await fetch(BASE_URL + "/api/Articles/" + String(id),{
    //         headers: {
    //             Accept: 'application/json'
    //         },
    //         method: "PUT"
    //     });

    //     return res;
    // }
}