import {useState} from 'react'

import { testFetch, loginFetch } from "../../utils/fetch";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeHandler = (e, setter, state) => {
        setter(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        loginFetch(username, password);
    };


  return (


    <form onSubmit={(e) => handleSubmit(e)}>
    <input
    className="login-input"
    placeholder="Username"
    onChange={(e) => changeHandler(e, setUsername, username)}
    />
    <input
    className="login-input"
    placeholder="Password"
    onChange={(e) => changeHandler(e, setPassword, password)}
    />
    <button type="submit">Login</button>
    </form>

)};

export default Login