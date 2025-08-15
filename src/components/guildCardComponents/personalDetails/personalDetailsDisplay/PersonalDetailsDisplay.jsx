import ColorPicker from "../../colors/colorPicker/ColorPicker.jsx";
import {useState} from "react";
import { skinTones, eyeColors } from '../../colors/colors.js';
import ColorButton from "../../colors/colorButton/colorButton.jsx";


function PersonalDetailsDisplay() {
    const [formState] = useState({
        'currentJob': "mage",
        'eyeColor': "blue",
        "skinTone": "light",
        "name": "Aurora Lyhnn",
        "race": "elf"
    });

    const skinHex = skinTones.find(c => c.name === formState.skinTone)?.hex || '#000000';
    const eyeHex = eyeColors.find(c => c.name === formState.eyeColor)?.hex || '#000000';

    return(

        <form className="guild-card-data">
            <div className="section">
                <span className="label" htmlFor="name-field">Name:</span>
                <span className="value">{formState.name}</span>
            </div>

            <div className="section">
                <span className="label">Date Joined:</span>
                <span className="value">01-01-2028</span>
            </div>

            <div className="section">
                <span className="label" htmlFor="race-select">Race:</span>
                <span className="value">{formState.race}</span>
            </div>

            <div className="section">
                <span className="label">Skin:</span>

                <span className="value">
                    <ColorButton color={skinHex} label={`Skin color: ${formState.skinTone}`} />
                </span>

            </div>

            <div className="section">
                <span className="label" htmlFor="eye-color-select">Eyes:</span>
                <span className="value">
                    <ColorButton color={eyeHex} label={`Skin color: ${formState.eyeColor}`} />
                </span>
            </div>

            <div className="section">
                <span className="label" htmlFor="job-select">Job:</span>
                <span className="value">{formState.currentJob}</span>
            </div>

        </form>
    )
}
export default PersonalDetailsDisplay;
