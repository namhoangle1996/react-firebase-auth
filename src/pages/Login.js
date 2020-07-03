import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(email, password)
        try {
            const ss = await signin(email,password);
            console.log(ss)
        }catch (err) {
            setError(err)
        }
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={(event) => handleSubmit(event) } >
                <h1>Login to <Link to="/"> Chatty </Link> </h1>
                <p>Fill in the form below to login to your account. </p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        autoComplete="true"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error ? (<p>error</p>) : null}
                    <button type="submit" >Login</button>
                </div>
                <hr />
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    )
}
