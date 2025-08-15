import ColorPicker from "../../colors/colorPicker/ColorPicker.jsx";
import {useState} from "react";
import InputField from "../../../inputField/InputField.jsx";
import { skinTones, eyeColors } from '../../colors/colors.js';

function PersonalDetailsEditor() {
    const [formState, setFormState] = useState({
        'currentJob': "mage",
        'eyeColor': "blue",
        "skinTone": "light",
        "name": "Aurora Lyhnn"
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        })
    }
return(

    <form className="guild-card-data">



        <div className="section">
            <span className="label" htmlFor="name-field">Name:</span>
            <input className="value name-field" name="name" id="name-field" type="text" value={formState.name} onChange={handleChange}/>
        </div>

        <div className="section">
            <span className="label">Date Joined:</span>
            <span className="value">01-01-2028</span>
        </div>

        <div className="section">
            <span className="label" htmlFor="race-select">Race:</span>
            <span className="value">
                                <select
                                    className="select-box"
                                    name="currentRace" id="race-select"
                                    value={formState.currentRace}
                                    onChange={handleChange}>
                                <option value="elf">Elf</option>
                                <option value="human">Human</option>
                            </select>
                            </span>
        </div>

        <div className="section">
            <span className="label">Skin:</span>
            <div className="value color-buttons">
                <ColorPicker className=""
                             colors={skinTones}
                             selectedColor={formState.skinTone}
                             onSelect={(colorName) => setFormState({ ...formState, skinTone: colorName })}
                             label="eye color"
                />
            </div>
        </div>

        <div className="section">
            <span className="label" htmlFor="eye-color-select">Eyes:</span>
            <div className="value color-buttons">
                <ColorPicker
                    colors={eyeColors}
                    selectedColor={formState.eyeColor}
                    onSelect={(colorName) => setFormState({ ...formState, eyeColor: colorName })}
                    label="eye color"
                />
            </div>
        </div>

        <div className="section">
            <span className="label" htmlFor="job-select">Job:</span>
            <span className="value">
                                <select
                                    className="select-box"
                                    name="currentJob" id="job-select"
                                    value={formState.currentJob}
                                    onChange={handleChange}>
                                <option value="mage">Mage</option>
                                <option value="arcanist">Arcanist</option>
                                <option value="rogue">Rogue</option>
                                <option value="reaper">Reaper</option>
                            </select>
                            </span>
        </div>

    </form>
    )
}
export default PersonalDetailsEditor;
