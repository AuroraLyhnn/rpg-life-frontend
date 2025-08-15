import './Login.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import AppLogo from "../../assets/page/decoration/application-logo.png"
import Mail from "../../assets/page/decoration/mail.png"
import Lock from "../../assets/page/symbols/lock-open.png"
import Line from "../../assets/page/decoration/dark-line-s.png"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import LogoPage from "../../components/journal/book/LogoPage.jsx";
import InputField from "../../components/inputField/InputField.jsx";

function Login() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    const [formState, setFormState] = useState({
        rememberMe: false,
        loginEmail: '',
        loginPassword: ''
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }

        return (
            <Book>
                <LogoPage/>
                <Page className="right-page">

                    <h1>Welcome brave adventurer!</h1>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="email-area">
                                <InputField image={Mail}
                                    placeholder="Emailaddress"
                                       name="loginEmail"
                                       id="login-email"
                                       type="text"
                                       value={formState.loginEmail}
                                       onChange={handleChange}/>
                        </div>


                        <div className="password-area">
                                <InputField image={Lock}
                                    placeholder="Password"
                                       name="loginPassword"
                                       id="login-password"
                                       type="password"
                                       value={formState.loginPassword}
                                       onChange={handleChange}/>

                            <div className="password-and-remember-me">
                                <div className="remember me">
                                    <label className="remember-me-checkbox">
                                        <input name="remember-me-checkbox" label="Remember me?" type="checkbox" value={formState.rememberMe} onChange={handleChange} />Remember me?
                                    </label>


                                </div>
                                <NavLink className="links" to="/forgot-password">Forgot password?</NavLink>
                            </div>

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