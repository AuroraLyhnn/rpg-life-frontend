import { useState } from 'react';
import './Register.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";
import Welcome from "../../components/journal/welcome/Welcome.jsx";
import LogoPage from "../../components/journal/book/LogoPage.jsx";
import Flame from "../../assets/page/flame.png"
import Line from "../../assets/page/dark-line-s.png"
function Register() {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [repeatPasswordValue, setRepeatPasswordValue] = useState('');
    const [heroNameValue, setHeroNameValue] = useState('');
    const [showWelcomeScroll, setShowWelcomeScroll] = useState(false);

    const handleScrollClick = () => {
        setShowWelcomeScroll(true);
    };

    return (
        <>
            <Book>
                <LogoPage/>
                <Page className="rightPage">
                    <h2>Thank you for wanting to join our guild: Eternal Flames <span><img className="flame" src={Flame} alt="flame"/></span></h2>
                    <img className="titleLine" src={Line}/>
                    <form className="registrationForm">
                        <h3>Please fill out this form to make it official</h3>
                        <br/>
                        <div className="emailAddressInputField">
                            <h3>Email:</h3>
                            <input className="emailAddressInput"
                                   name="email"
                                   id="email-field"
                                   type="text"
                                   value={emailValue}
                                   onChange={(e) => setEmailValue(e.target.value)}/>
                        </div>
                        <div className="newPasswordInputField">
                            <h3>Password:</h3>
                            <input className="newPasswordInput"
                                   name="password"
                                   id="password-field"
                                   type="password"
                                   value={passwordValue}
                                   onChange={(e) => setPasswordValue(e.target.value)}/>
                        </div>


                        <div className="repeatPasswordInputField">
                            <h3>Repeat Password:</h3>
                            <input className="repeatPasswordInput"
                                   name="repeat-password"
                                   id="repeat-password-field"
                                   type="password"
                                   value={repeatPasswordValue}
                                   onChange={(e) => setRepeatPasswordValue(e.target.value)}/>
                        </div>


                        <div className="heroNameInputField">
                            <div className="heroNameExplenation">
                                <h3>Chose your Hero name!</h3>
                                <h5>(You can change this later)</h5>
                            </div>

                            <input className="heroNameInput"
                                   name="hero-name"
                                   id="hero-name-field"
                                   type="text"
                                   value={heroNameValue}
                                   onChange={(e) => setHeroNameValue(e.target.value)}/>
                        </div>

                        <button className="registerButton" type="button" onClick={handleScrollClick}>Register</button>
                    </form>

                </Page>
            </Book>

            <Welcome className={`welcomeScroll${showWelcomeScroll ? " visible" : ""}`} />
        </>
    );
}

export default Register;
