import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSeller } from "../Actions/SellerAction";

export function Register() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setname] = useState("");
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setname(usernameRef.current.value);
        dispatch(addSeller({ name, email, password}))
        navigate("/login")
    };
    const toLogin = () => {
        console.log(123456);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <button className="loginButton" onClick={toLogin}>Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Sign Up If you want to sell Products</h1>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>
                            Get Started
                        </button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="username" placeholder="name" ref={usernameRef} />
                        <input type="password" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>
                            Start
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}