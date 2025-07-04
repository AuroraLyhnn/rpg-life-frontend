import './NewHeroQuest.css';
import Page from "../../components/journal/book/Page.jsx";
import Book from "../../components/journal/book/Book.jsx";
import React, {useState} from "react";
import InputField from "../../components/inputField/InputField.jsx";
import PageTitle from "../../components/pageTitle/PageTitle.jsx";

function NewHeroQuest() {

    const [formState, setFormState] = useState({
        heroQuestDescription: '',
        subQuestOne: '',
        subQuestTwo: '',
        subQuestThree: '',
        motivationField: ''
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
                <Page className="new-hero-quest-leftPage">
                    <PageTitle title="Begin your next adventure"/>
                    <form className="new-hero-quest-form">
                        <InputField label="What brave adventure are you starting?"
                                    placeholder="Type your description here"
                                    name="hero-quest-description"
                                    id="hero-quest-description-input"
                                    type="text"
                                    value={formState.heroQuestDescription}
                                    onChange={handleChange}/>

                        <InputField label="The first milestone to accomplish"
                                    placeholder="Type your description here"
                                    name="subQuestOne"
                                    type="text"
                                    value={formState.subQuestOne}
                                    onChange={handleChange}/>

                        <InputField label="The second step on this journey:"
                                    placeholder="Type your description here"
                                    name="subQuestTwo"
                                    type="text"
                                    value={formState.subQuestTwo}
                                    onChange={handleChange}/>

                        <InputField label="After this you're so close to the end"
                                    placeholder="Type your description here"
                                    name="subQuestThree"
                                    type="text"
                                    value={formState.subQuestThree}
                                    onChange={handleChange}/>
                    </form>

                </Page>
                <Page className="new-hero-quest-rightPage">
                    <div className="input-motivation-area">
                        <label htmlFor="text-area-field">What will motivate you to keep going?</label>
                        <textarea className="motivation-field"
                                  name="motivationField"
                                  id="motivation-field"
                                  value={formState.motivationField}
                                  onChange={handleChange}
                        />
                    </div>
                    {/*<button type="submit" onClick={startHeroQuest}>Are you ready to go on this epic quest?!</button>*/}
                </Page>

            </Book>
        </>
    )
}

export default NewHeroQuest;