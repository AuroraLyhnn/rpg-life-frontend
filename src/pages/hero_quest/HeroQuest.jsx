import './HeroQuest.css';
import { useState} from "react";
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import Line from "../../assets/page/dark-line-s.png"
function HeroQuest() {
    const [heroQuestDescriptionValue, setHeroQuestDescriptionValue] = useState('');


    return (
        <>
            <Book>
                <Page className="leftPage">
                    <h1>Hero quest</h1>
                    <form className="new-hero-quest-form">
                        <div className="hero-quest-description-field">
                            <h3>What brave adventure are you starting?</h3>
                            <input className="hero-quest-description"
                                   name="hero-quest-description"
                                   id="hero-quest-description-input"
                                   type="text"
                                   value={heroQuestDescriptionValue}
                                   onChange={(e) => setQuestDescriptionValue(e.target.value)}
                                   placeholder="Type your description here"
                            />
                            <img className="under-line" src={Line} alt="Line"/>
                        </div>
                        <div className="amount-of-subquests-field">
                            <input className="amount-of-subquests-input"
                                   name="amount-of-subquests-input"
                                   id="amount-of-subquests-input"
                                   type="radio"
                                   value="one"
                                   onChange={() => setSubQuestOneDescriptionValue(e.target.value)}/>
                            <input className="amount-of-subquests-input"
                                   name="two-subquests"
                                   id="amount-of-subquests-input"
                                   type="text"
                                   value="SubQuestTwoDescriptionValue"
                                   onChange={() => setSubQuestTwoDescriptionValue(e.target.value)}/>
                            <input className="amount-of-subquests-input"
                                   name="two-subquests"
                                   id="amount-of-subquests-input"
                                   type="text"
                                   value="SubQuestThreeDescriptionValue"
                                   onChange={() => setSubQuestThreeDescriptionValue(e.target.value)}/>
                        </div>
                    </form>

                </Page>
                <Page className="rightPage">

                </Page>

            </Book>
        </>
    )
}

export default HeroQuest;