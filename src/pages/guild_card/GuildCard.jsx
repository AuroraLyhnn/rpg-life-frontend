import './GuildCard.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import Body from "../../assets/character/body/light/body.png"
import Arms from "../../assets/character/body/light/arms_staff_sword.png"
import Ears from "../../assets/character/body/light/ears.png"
import Eyes from "../../assets/character/eyes/blue.png"
import BackHair from "../../assets/character/hair/long/grey_back.png"
import FrontHair from "../../assets/character/hair/long/grey_front.png"
import BackDress from "../../assets/character/outfit/layered_dress/back.png"
import FrontDress from "../../assets/character/outfit/layered_dress/green_front.png"
import Sleeves from "../../assets/character/outfit/layered_dress/green_sleeves_staff.png"
import Weapon from "../../assets/character/weapon/staff/moonfairy.png"
import Shoes from "../../assets/character/shoes/sandals_green.png"
import Wings from "../../assets/character/wings/ice.png"
import PageTitle from "../../components/pageTitle/PageTitle.jsx";
import Decor from "../../assets/page/decoration/decor.png"
import InputField from "../../components/inputField/InputField.jsx";
import {useState} from "react";
import CharacterEditor from "../../components/character/characterEditor/CharacterEditor.jsx";
import CharacterDisplay from "../../components/character/characterDisplay/CharacterDisplay.jsx";





function GuildCard() {

    const [formState, setFormState] = useState({
        job : '',
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }

    const openEditor = () => setOpenCharacterEditor(true);
    const closeEditor = () => setOpenCharacterEditor(false);
    const [openCharacterEditor, setOpenCharacterEditor] = useState(false);


    return (
        <>
            <Book>
                <Page className="leftPage-guild-card">
                    <PageTitle title="Guild Card"/>
                    {openCharacterEditor ? (
                        <>
                            <CharacterEditor />
                            <button className="done-editing" type="button" onClick={closeEditor}>
                                I'm happy with my look!
                            </button>
                        </>
                    ) : (
                        <>
                            <CharacterDisplay />
                            <button className="character-button" type="button" onClick={openEditor}>
                                Change look
                            </button>
                        </>
                        )
                    }
                </Page>
                <Page className="right-page-guild-card">
                    <PageTitle title="Eternal Flames "/>
                    <form className="guild-card-data">
                        <div className="section">
                            <span className="label">Name:</span>
                            <span className="value">Aurora Lyhnn</span>
                        </div>
                        <div className="section">
                            <span className="label">Date Joined:</span>
                            <span className="value">01-01-2028</span>
                        </div>
                        <div className="section">
                            <span className="label">Race:</span>
                            <span className="value">Elf</span>
                        </div>
                        <div className="section">
                            <span className="label">Skin:</span>
                            <div className="value color-buttons">
                                <button className="color-picker light" type="button"></button>
                                <button className="color-picker tan" type="button"></button>
                                <button className="color-picker dark" type="button"></button></div>
                        </div>
                        <div className="section">
                            <span className="label">Eyes:</span>
                            <div className="value color-buttons">
                                <button className="color-picker blue" type="button"></button>
                                <button className="color-picker green" type="button"></button>
                                <button className="color-picker purple" type="button"></button>
                                <button className="color-picker red" type="button"></button>
                                <button className="color-picker yellow" type="button"></button>
                            </div>
                        </div>
                        <div className="section">
                            <span ><label className="label" htmlFor="job-select">Job:</label></span>
                            <span className="value">
                                <select className="select-box" name="job" id="job-select" onChange={handleChange}>
                                <option value="Mage">Mage</option>
                                <option value="Arcanist">Arcanist</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Reaper">Reaper</option>
                            </select>
                            </span>
                        </div>

                    </form>

                </Page>

            </Book>
        </>
    )
}

export default GuildCard;