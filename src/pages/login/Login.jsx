import './Login.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import AppLogo from "../../assets/page/application-logo.png"
import Mail from "../../assets/page/mail.png"
import Lock from "../../assets/page/lock-open.png"
import Line from "../../assets/page/dark-line-s.png"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import LogoPage from "../../components/journal/book/LogoPage.jsx";

function Login() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

        return (
            <Book>
                <LogoPage/>
                <Page className="rightPage">

                    <h1>Welcome brave adventurer!</h1>

                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div className="emailArea">
                            <div className="emailField">
                                <img className="mail" src={Mail} alt="mail icon"/>
                                <input className="emailInput" placeholder="Emailaddress:"
                                       name="email"
                                       id="email-field"
                                       type="text"
                                       value={emailValue}
                                       onChange={(e) => setEmailValue(e.target.value)}/>
                            </div>
                            <img src={Line} alt="line"/>
                        </div>


                        <div className="passwordArea">
                            <div className="passwordField">
                                <img className="lock" src={Lock} alt="lock icon"/>
                                <input className="passwordInput" placeholder="Password"
                                       name="password"
                                       id="password-field"
                                       type="password"
                                       value={passwordValue}
                                       onChange={(e) => setPasswordValue(e.target.value)}/>
                            </div>
                            <img src={Line} alt="line"/>
                            <NavLink className="links" to="/forgot-password">Forgot password?</NavLink>
                        </div>

                        <div className="login-or-register">
                            <button type="submit">Login</button>
                            <NavLink className="links" to="/register">No account yet?</NavLink>
                        </div>
                    </form>

                </Page>
            </Book>
        )
    }

export default Login;