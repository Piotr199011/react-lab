import {useState} from "react";


export function LoginForm(props){

    const [email, setEmail] = useState('');
    function handleChange(event) {
        setEmail(event.target.value);
    }
return(
<div>
    <label>Zaloguj się e-mailem</label>
    <input type="text" onChange={handleChange} value={email}/>
    <button type="button" onClick={()=> props.onLogin(email)}>Wchodzę</button>
</div>);

}