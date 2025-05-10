import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    // let email="piotr.jarmosz@o2.pl";
    const [email, setEmail] = useState('');
    const [isLoggedInAs, setIsLoggedisAs] = useState(false);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleAuthenticate() {
        setIsLoggedisAs(email);
        setEmail('');
    }

    let content;
    if (isLoggedInAs) {
        content = <div>
            <h2>Witaj{isLoggedInAs}</h2>
            <a onClick={() => setIsLoggedisAs(null)}>Wyloguj</a>
        </div>

    } else {
        content = <div>
            <input type="text" onChange={handleChange} value={email}/>
            <button onClick={handleAuthenticate}>Wchodzę</button>
        </div>;

    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
