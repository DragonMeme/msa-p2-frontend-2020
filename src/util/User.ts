import { IUserPass } from "./Interface";

export default class User{
    static userState: IUserPass|undefined;
    static setUserState(userState: IUserPass){
        this.userState = userState;
        localStorage.setItem("articool_user", JSON.stringify(userState));
    }

    static clearUserState(){
        this.userState = undefined;
        localStorage.removeItem("articool_user");
    }

    static getUserState(){
        return this.userState;
    }
}