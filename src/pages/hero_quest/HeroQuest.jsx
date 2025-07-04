import './HeroQuest.css';
// import React, { useState} from "react";
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import Dragon from "../../assets/page/dragon1.png"
import Line from "../../assets/page/dark-line-s.png"
import InputField from "../../components/inputField/InputField.jsx";
import React, {useState} from "react";
import PageTitle from "../../components/pageTitle/PageTitle.jsx";
function HeroQuest() {
    //
    // const [formState, setFormState] = useState({
    //     heroQuestDescription: '',
    //     subQuestOne: '',
    //     subQuestTwo: '',
    //     subQuestThree: '',
    //     motivationField: ''
    // })
    //
    // function handleChange(e) {
    //     const changedFieldName = e.target.name;
    //
    //     setFormState({
    //         ...formState,
    //         [changedFieldName]: e.target.value,
    //     })
    // }
    const [formState, setFormState] = useState({
        heroQuestDescription: '',
    })

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
                <Page className="hero-quest-leftPage">
                    <PageTitle title="Hero Quest"/>
                    <form className="new-hero-quest-form">

                        <InputField label="Subquest 1"
                                    placeholder="User's description..."
                                    name="hero-quest-description"
                                    id="hero-quest-description-input"
                                    type="text"
                                    value={formState.heroQuestDescription}
                                    onChange={handleChange}/>

                        <InputField label="Subquest 2"
                                    placeholder="User's description..."
                                    name="hero-quest-description"
                                    id="hero-quest-description-input"
                                    type="text"
                                    value={formState.heroQuestDescription}
                                    onChange={handleChange}/>

                        <InputField label="Subquest 3"
                                    placeholder="User's description..."
                                    name="hero-quest-description"
                                    id="hero-quest-description-input"
                                    type="text"
                                    value={formState.heroQuestDescription}
                                    onChange={handleChange}/>
                        </form>
                </Page>
                <Page className="hero-quest-image">
                    <button className="hero-quest-complete-button">Finish Hero Quest!</button>
                </Page>
            </Book>
        </>
    )
}

export default HeroQuest;