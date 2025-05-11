import {useState} from "react";
import {LoginForm} from "./LoginForm";
import MeetingsPage from "./meetings/MeetingsPage";


export function UserPanel(props){
    return(
        <div>
        <h2>Witaj{props.username}</h2>
        <a onClick={() => props.onLogout(null)}>Wyloguj</a>
            <MeetingsPage/>
    </div>
    )
}