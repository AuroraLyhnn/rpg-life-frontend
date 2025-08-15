import './GuildCard.css';
import Book from "../../components/journal/book/Book.jsx";
import Page from "../../components/journal/book/Page.jsx";
import PageTitle from "../../components/pageTitle/PageTitle.jsx";
import {useState} from "react";
import CharacterEditor from "../../components/guildCardComponents/character/characterEditor/CharacterEditor.jsx";
import CharacterDisplay from "../../components/guildCardComponents/character/characterDisplay/CharacterDisplay.jsx";
import ColorPicker from "../../components/guildCardComponents/colors/colorPicker/ColorPicker.jsx";
import PersonalDetailsEditor
    from "../../components/guildCardComponents/personalDetails/personalDetailsEditor/PersonalDetailsEditor.jsx";
import PersonalDetailsDisplay
    from "../../components/guildCardComponents/personalDetails/personalDetailsDisplay/PersonalDetailsDisplay.jsx";


function GuildCard() {

    const [formState, setFormState] = useState({
        'currentJob': "mage",
        'eyeColor': "blue",
        "skinTone": "light"
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
                    {openCharacterEditor ? (
                        <>
                            <PersonalDetailsEditor/>
                        </>
                    ) : (
                        <>
                            <PersonalDetailsDisplay/>
                        </>
                    )
                    }
                </Page>

            </Book>
        </>
    )
}

export default GuildCard;