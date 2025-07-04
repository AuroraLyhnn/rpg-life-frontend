import { useState } from 'react';
import './Register.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";
import Welcome from "../../components/journal/popups/welcome/Welcome.jsx";
import LogoPage from "../../components/journal/book/LogoPage.jsx";
import Flame from "../../assets/page/flame.png"
import InputField from "../../components/inputField/InputField.jsx";
function Register() {

    const [showWelcomeScroll, setShowWelcomeScroll] = useState(false);

    const handleScrollClick = () => {
        setShowWelcomeScroll(true);
    };

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        heroName: '',
        showWelcomeScroll: false
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }

    return (
        <>
            <Book>
                <LogoPage/>
                <Page className="right-page">
                    <div className="welcome-title">
                        <h2>Thank you for wanting to join our guild:</h2>
                        <h2>Eternal Flames</h2>
                        <img className="flame" src={Flame} alt="flame"/>
                    </div>


                    <h3 className="register-form-title" >Please fill out this form to make it official!</h3>
                    <form className="registration-form">
                            <InputField name="email" label="Email:" inputType="text" value={formState.email} onChange={handleChange}/>
                            <InputField name="password" label="Password:" inputType="password" value={formState.password} onChange={handleChange}/>
                            <InputField name="repeatPassword" label="Repeat Password:" inputType="password" value={formState.repeatPassword} onChange={handleChange}/>
                            <InputField name="heroName" label="Chose your hero name!" inputType="text" value={formState.heroName} onChange={handleChange}/>
                        <button className="register-button" type="button" onClick={handleScrollClick}>Register</button>
                    </form>

                </Page>
            </Book>

            <Welcome className={`welcome-scroll${showWelcomeScroll ? " visible" : ""}`} />
        </>
    );
}

export default Register;
