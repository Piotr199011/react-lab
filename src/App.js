import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import {LoginForm} from "./LoginForm";

function App() {
    // let email="piotr.jarmosz@o2.pl";

    const [isLoggedInAs, setIsLoggedisAs] = useState(false);



    function handleAuthenticate(email) {

            setIsLoggedisAs(email);
            // setEmail('');

    }
    let content;
    if (isLoggedInAs) {
        content =<div>
            <h2>Witaj{isLoggedInAs}</h2>
            <a onClick={() => setIsLoggedisAs(null)}>Wyloguj</a>
        </div>

    } else {
        content = <LoginForm onLogin={handleAuthenticate}/>

    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
