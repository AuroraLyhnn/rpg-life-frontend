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
import InputField from "../../components/inputField/InputField.jsx";

function Login() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    const [formState, setFormState] = useState({
        rememberMe: false
    });

    function handleChange(e) {
        const changedFieldName = e.taget.name;

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
                            <div className="email-field">
                                <img className="mail" src={Mail} alt="mail icon"/>
                                <input className="email-input" placeholder="Emailaddress:"
                                       name="email"
                                       id="email-field"
                                       type="text"
                                       value={emailValue}
                                       onChange={(e) => setEmailValue(e.target.value)}/>
                            </div>
                            <img src={Line} alt="line"/>
                        </div>


                        <div className="password-area">
                            <div className="password-field">
                                <img className="lock" src={Lock} alt="lock icon"/>
                                <input className="password-input" placeholder="Password"
                                       name="password"
                                       id="password-field"
                                       type="password"
                                       value={passwordValue}
                                       onChange={(e) => setPasswordValue(e.target.value)}/>
                            </div>
                            <img src={Line} alt="line"/>
                            <div className="password-and-remember-me">

                                <div className="remember me">
                                    <InputField name="rember-me-checkbox" label="Remember me?" inputType="checkbox" value={formState.rememberMe} onChange={{handleChange}} />
                                    <NavLink className="links" to="/forgot-password">Forgot password?</NavLink>
                                </div>
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