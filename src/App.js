import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import {LoginForm} from "./LoginForm";
import {UserPanel} from "./UserPanel";

function App() {
    // let email="piotr.jarmosz@o2.pl";

    const [isLoggedInAs, setIsLoggedisAs] = useState(false);



    function handleAuthenticate(email) {

        if (email) {
            setIsLoggedisAs(email);
            // setEmail('');
        }
    }
    function logout()
    {
        setIsLoggedisAs(false)
    }

    return (
        <div>

            <h1>System do zapisów na zajęcia</h1>

            {

                isLoggedInAs
                    ? <UserPanel username={isLoggedInAs} onLogout={logout}/>
                    : <LoginForm onLogin={handleAuthenticate}/>

            }
        </div>
    );
}

export default App;
