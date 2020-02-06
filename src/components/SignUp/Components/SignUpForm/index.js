import React from "react";
import './style.css'
class SignUpForm extends React.Component {
    render() {
        return <div className="signUpForm">
            <p className="signUpHeader">Sign Up for updates</p>
            <input type="email" className="signUpForm"/>
            <button className="blackButton">fill button</button>
        </div>;
    }

}
export default SignUpForm;