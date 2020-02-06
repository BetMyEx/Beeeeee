import React from "react";
import './style.css'
import SignUpForm from "./Components/SignUpForm";
class SignUp extends React.Component{
    render() {
        return <div className="signUp"><SignUpForm></SignUpForm></div>;
    }
}
export default SignUp;